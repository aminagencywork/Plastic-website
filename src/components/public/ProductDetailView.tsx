import React, { useState } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { ProductCard } from '../common/ProductCard';
import {
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Send,
  MessageSquare,
  FileText,
  Layers,
  Box,
  CheckCircle,
  Truck,
  HelpCircle,
  Printer
} from 'lucide-react';

export const ProductDetailView: React.FC = () => {
  const {
    products,
    categories,
    selectedProductSlug,
    setPublicPage,
    setSelectedProductSlug,
    setQuickEnquiryProduct,
    companyInfo
  } = useCatalog();

  const product = products.find(p => p.slug === selectedProductSlug) || products[0];
  const category = categories.find(c => c.id === product?.categoryId);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-slate-800">Product Not Found</h2>
        <button
          onClick={() => {
            setSelectedProductSlug(null);
            setPublicPage('products');
          }}
          className="mt-4 px-4 py-2 rounded-lg bg-blue-700 text-white text-sm font-bold cursor-pointer"
        >
          Return to Product Catalog
        </button>
      </div>
    );
  }

  const currentImage = product.images[activeImageIndex] || product.images[0];
  const relatedProducts = products
    .filter(p => p.categoryId === product.categoryId && p.id !== product.id && p.isPublished)
    .slice(0, 3);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hello ApexPlast Sales,\n\nI am viewing your website product catalog and would like to enquire about:\n*Product:* ${product.name}\n*Code:* ${product.productCode}\n*Material:* ${product.material}\n\nPlease share price sheet, bulk MOQ and delivery timeline.`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  const handlePrintSpecs = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumbs navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <button
            onClick={() => {
              setSelectedProductSlug(null);
              setPublicPage('home');
            }}
            className="hover:text-blue-700 transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <button
            onClick={() => {
              setSelectedProductSlug(null);
              setPublicPage('products');
            }}
            className="hover:text-blue-700 transition-colors cursor-pointer"
          >
            Products Catalog
          </button>
          {category && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-600 truncate max-w-xs">{category.name}</span>
            </>
          )}
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-blue-700 font-bold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Top Split: Gallery (Left) & Specifications / Enquiry (Right) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
            {/* LEFT: Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main large display photo */}
              <div className="relative aspect-4/3 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden group">
                {currentImage ? (
                  <img
                    src={currentImage.imageUrl}
                    alt={currentImage.altText || product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-103"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                    <Box className="w-16 h-16 stroke-[1.2]" />
                    <span className="text-xs mt-2">No photo available</span>
                  </div>
                )}

                {product.isFeatured && (
                  <span className="absolute top-3 left-3 bg-amber-600 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-xs uppercase tracking-wider">
                    Featured Spec
                  </span>
                )}

                {product.productCode && (
                  <span className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-xs text-white text-xs font-mono font-semibold px-2.5 py-1 rounded shadow-xs">
                    {product.productCode}
                  </span>
                )}
              </div>

              {/* Thumbnails strip (if multiple) */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={img.id || idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-blue-700 ring-2 ring-blue-700/20 shadow-xs'
                          : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.imageUrl}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Manufacturing guarantee box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="font-bold text-slate-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Quality Assurance Standard</span>
                </div>
                <p className="leading-relaxed text-[11px] text-slate-500">
                  Produced under ISO 9001:2015 controlled parameters. Guaranteed 100% prime virgin polymer resin without non-homogenized regrind impurities. Batch certificate of analysis (COA) supplied.
                </p>
              </div>
            </div>

            {/* RIGHT: Product Details, Specs Table & B2B Enquiry CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                {/* Category & SKU */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {category?.name || 'Industrial Plastics'}
                  </span>
                  {product.productCode && (
                    <span className="text-slate-500 font-mono">
                      Part Code: <strong className="text-slate-800">{product.productCode}</strong>
                    </span>
                  )}
                </div>

                {/* Name */}
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-display">
                  {product.name}
                </h1>

                {/* Short Description */}
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Technical Specifications Table */}
                <div className="mt-6 pt-5 border-t border-slate-200">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Technical Specifications
                  </h3>

                  <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden text-xs">
                    {product.material && (
                      <div className="grid grid-cols-3 p-3 bg-white">
                        <span className="font-semibold text-slate-500">Raw Material / Resin</span>
                        <span className="col-span-2 font-medium text-slate-900">{product.material}</span>
                      </div>
                    )}
                    {product.dimensions && (
                      <div className="grid grid-cols-3 p-3 bg-slate-50/70">
                        <span className="font-semibold text-slate-500">Outer Dimensions</span>
                        <span className="col-span-2 font-medium text-slate-900">{product.dimensions}</span>
                      </div>
                    )}
                    {product.weight && (
                      <div className="grid grid-cols-3 p-3 bg-white">
                        <span className="font-semibold text-slate-500">Tare Weight</span>
                        <span className="col-span-2 font-medium text-slate-900">{product.weight}</span>
                      </div>
                    )}
                    {product.capacity && (
                      <div className="grid grid-cols-3 p-3 bg-slate-50/70">
                        <span className="font-semibold text-slate-500">Volume / Load Capacity</span>
                        <span className="col-span-2 font-medium text-slate-900">{product.capacity}</span>
                      </div>
                    )}
                    {product.color && (
                      <div className="grid grid-cols-3 p-3 bg-white">
                        <span className="font-semibold text-slate-500">Standard Colors</span>
                        <span className="col-span-2 font-medium text-slate-900">{product.color}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-3 p-3 bg-slate-50/70">
                      <span className="font-semibold text-slate-500">Custom Options</span>
                      <span className="col-span-2 font-medium text-slate-900">
                        Hot-stamped company logo, barcode labels, RFID tags, custom masterbatch
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* B2B Action Enquiry Box */}
              <div className="p-5 rounded-xl bg-slate-900 text-white space-y-3 shadow-md">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold text-white">
                    Interested in this product?
                  </div>
                  <span className="text-[11px] font-mono text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">
                    B2B Direct Supply
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We supply distributors, OEMs, and wholesalers in volume batches. Contact our sales engineering team directly for pricing, minimum order quantities, and factory freight options.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => setQuickEnquiryProduct(product)}
                    className="w-full sm:flex-1 py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Product Enquiry</span>
                  </button>

                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full sm:w-auto py-3 px-5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    title="Open WhatsApp chat with product details"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Us</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: In-Depth Overview & Industrial Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-display">
                About This Product
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {product.description || product.shortDescription}
              </p>
            </div>

            {/* Applications List */}
            {product.applications && product.applications.length > 0 && (
              <div className="pt-6 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Typical Industrial Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right sidebar info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Ordering & Delivery Notes
              </h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Truck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Dispatch Modes:</strong> Full truckload (FTL), Less than truckload (LTL), and 20ft/40ft ocean container stuffing.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Box className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Packaging:</strong> Stretch-wrapped onto export-grade pallets with edge-protector angles.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Samples:</strong> Technical evaluation samples available for qualified corporate accounts upon request.
                  </span>
                </li>
              </ul>

              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={handlePrintSpecs}
                  className="w-full py-2.5 px-3 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Technical Spec Sheet</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Carousel / Grid */}
        {relatedProducts.length > 0 && (
          <div className="pt-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 font-display">
                Related Products in {category?.name || 'this category'}
              </h2>
              <button
                onClick={() => {
                  setSelectedProductSlug(null);
                  setPublicPage('products');
                }}
                className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
              >
                View Category Catalog
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} onEnquire={(prod) => setQuickEnquiryProduct(prod)} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
