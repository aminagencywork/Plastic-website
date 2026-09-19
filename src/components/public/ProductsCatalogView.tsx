import React, { useMemo } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { ProductCard } from '../common/ProductCard';
import { Search, Filter, Box, X, ChevronRight, Layers, Sparkles } from 'lucide-react';

export const ProductsCatalogView: React.FC = () => {
  const {
    products,
    categories,
    activeCategoryFilter,
    setActiveCategoryFilter,
    searchQuery,
    setSearchQuery,
    setQuickEnquiryProduct
  } = useCatalog();

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Must be published in Phase 1 public view
      if (!product.isPublished) return false;

      // Category filter
      if (activeCategoryFilter && product.categoryId !== activeCategoryFilter) {
        return false;
      }

      // Search query across name, code, short description, material
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(q);
        const matchCode = product.productCode?.toLowerCase().includes(q);
        const matchDesc = product.shortDescription?.toLowerCase().includes(q);
        const matchMat = product.material?.toLowerCase().includes(q);
        if (!matchName && !matchCode && !matchDesc && !matchMat) return false;
      }

      return true;
    });
  }, [products, activeCategoryFilter, searchQuery]);

  const activeCategoryObj = categories.find((c) => c.id === activeCategoryFilter);

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Catalog Header */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              B2B Product Showcase & Specifications
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1 font-display tracking-tight">
              Plastic Products Catalog
            </h1>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
              Browse our standard production portfolio of industrial crates, chemical containers, heavy-duty drums, and precision technical mouldings. Every product is engineered to industrial specifications and available for wholesale delivery.
            </p>
          </div>

          {/* Search and Quick Filters Bar */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full md:flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by title, product code (e.g. AP-EC), resin material..."
                className="w-full pl-10 pr-9 py-2.5 bg-slate-50 text-sm rounded-xl border border-slate-200 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-xs text-slate-500 font-medium whitespace-nowrap self-start md:self-center">
              Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> of {products.length} Products
            </div>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <button
            onClick={() => setActiveCategoryFilter(null)}
            className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
              activeCategoryFilter === null
                ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
            }`}
          >
            All Products ({products.filter(p => p.isPublished).length})
          </button>

          {categories.map((category) => {
            const count = products.filter(p => p.categoryId === category.id && p.isPublished).length;
            const isSelected = activeCategoryFilter === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategoryFilter(category.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer border flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                <span>{category.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description Banner (if selected) */}
        {activeCategoryObj && (
          <div className="bg-white p-4 rounded-xl border border-blue-100 bg-blue-50/40 flex items-center justify-between text-xs text-slate-700">
            <div>
              <span className="font-bold text-blue-900">Filtered Category: {activeCategoryObj.name}</span>
              <p className="text-slate-500 mt-0.5">{activeCategoryObj.description}</p>
            </div>
            <button
              onClick={() => setActiveCategoryFilter(null)}
              className="text-blue-700 font-bold hover:underline shrink-0 ml-4 cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEnquire={(prod) => setQuickEnquiryProduct(prod)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-4 shadow-xs">
            <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Box className="w-7 h-7 stroke-[1.5]" />
            </div>
            <h3 className="text-base font-bold text-slate-900">No Products Matched</h3>
            <p className="text-xs text-slate-500">
              We couldn't find any products matching &ldquo;{searchQuery}&rdquo;. Try clearing your search query or selecting a different category.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategoryFilter(null);
                }}
                className="px-4 py-2 rounded-lg bg-blue-700 text-white text-xs font-bold hover:bg-blue-800 transition-colors cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}

        {/* Custom Requirements Notice */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">
              Bespoke Moulding & Custom Specifications
            </span>
            <h3 className="text-xl font-bold mt-1 font-display">
              Can't Find Your Exact Dimensions or Volume Requirements?
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              We offer in-house mould development, custom Pantone color compounding, and contract injection moulding for industrial procurement teams.
            </p>
          </div>

          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategoryFilter(null);
              // Open enquiry
              setQuickEnquiryProduct(products[0] || null);
            }}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shrink-0 shadow-md transition-colors cursor-pointer"
          >
            Submit Custom Specification
          </button>
        </div>
      </div>
    </div>
  );
};
