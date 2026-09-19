import React from 'react';
import { useCatalog } from '../../context/CatalogContext';
import {
  Package,
  FolderTree,
  PlusCircle,
  Inbox,
  Eye,
  Edit,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    products,
    categories,
    enquiries,
    setAdminPage,
    setEditingProductId,
    navigateToProduct,
    setActiveView
  } = useCatalog();

  const publishedCount = products.filter(p => p.isPublished).length;
  const draftCount = products.length - publishedCount;
  const recentProducts = [...products].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5);

  const handleEditProduct = (id: string) => {
    setEditingProductId(id);
    setAdminPage('edit-product');
  };

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Phase 1 — Product Catalog & Showcase Console
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 font-display">
            Catalog Overview
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Display-only digital showcase. Customer ordering & cart modules will be unlocked in Phase 2.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setAdminPage('add-product')}
            className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Upload New Product</span>
          </button>
          <button
            onClick={() => setActiveView('public')}
            className="px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
          >
            View Live Showcase
          </button>
        </div>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Total Products
            </div>
            <div className="text-3xl font-black text-slate-900 mt-1">
              {products.length}
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1">
              {publishedCount} Published ({draftCount} Drafts)
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <Package className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Product Categories
            </div>
            <div className="text-3xl font-black text-slate-900 mt-1">
              {categories.length}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Active polymer lines
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
            <FolderTree className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Featured Showcase
            </div>
            <div className="text-3xl font-black text-slate-900 mt-1">
              {products.filter(p => p.isFeatured).length}
            </div>
            <div className="text-[11px] text-amber-600 font-semibold mt-1">
              Displayed on Homepage
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Customer Leads
            </div>
            <div className="text-3xl font-black text-slate-900 mt-1">
              {enquiries.length}
            </div>
            <div className="text-[11px] text-blue-600 font-semibold mt-1">
              {enquiries.filter(e => e.status === 'new').length} New Enquiries
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Inbox className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Recently Added Products Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 font-display">
              Recently Added Products
            </h2>
            <p className="text-xs text-slate-500">
              Latest items added to your digital plastic catalog.
            </p>
          </div>
          <button
            onClick={() => setAdminPage('products')}
            className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Product Details</th>
                <th className="p-4">Category</th>
                <th className="p-4">Material Resin</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentProducts.map((prod) => {
                const category = categories.find(c => c.id === prod.categoryId);
                const primaryImg = prod.images.find(img => img.isPrimary) || prod.images[0];

                return (
                  <tr key={prod.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                          {primaryImg && (
                            <img
                              src={primaryImg.imageUrl}
                              alt={prod.name}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">
                            {prod.name}
                          </div>
                          <div className="text-slate-400 font-mono text-[11px]">
                            {prod.productCode || 'No Code'} {prod.isFeatured && '• Featured'}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="p-4 font-medium text-slate-600">
                      {category ? category.name : 'Unassigned'}
                    </td>

                    <td className="p-4 text-slate-600 max-w-xs truncate">
                      {prod.material || 'Standard Plastic'}
                    </td>

                    <td className="p-4">
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                          prod.isPublished
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${prod.isPublished ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                        {prod.isPublished ? 'Published' : 'Draft'}
                      </span>
                    </td>

                    <td className="p-4 text-right space-x-2 whitespace-nowrap">
                      <button
                        onClick={() => navigateToProduct(prod.slug)}
                        className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
                        title="View on public website"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleEditProduct(prod.id)}
                        className="px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold cursor-pointer"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
