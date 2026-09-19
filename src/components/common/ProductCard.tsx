import React from 'react';
import { Product } from '../../types';
import { useCatalog } from '../../context/CatalogContext';
import { ArrowUpRight, Box } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onEnquire?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { categories, navigateToProduct } = useCatalog();

  const category = categories.find((c) => c.id === product.categoryId);
  const primaryImage = product.images.find((img) => img.isPrimary) || product.images[0];

  return (
    <div
      onClick={() => navigateToProduct(product.slug)}
      className="group bg-white rounded-3xl border border-slate-200 p-2.5 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col cursor-pointer"
    >
      <div className="relative aspect-4/3 bg-slate-100 rounded-2xl overflow-hidden">
        {primaryImage ? (
          <img
            src={primaryImage.imageUrl}
            alt={primaryImage.altText || product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
            <Box className="w-12 h-12 stroke-[1.2] mb-1" />
            <span className="text-xs">No image provided</span>
          </div>
        )}

        <div className="absolute top-3 left-3 right-3 flex justify-between items-start pointer-events-none">
          {product.isFeatured && (
            <span className="bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
              Featured
            </span>
          )}
          {product.productCode && (
            <span className="ml-auto bg-white/25 backdrop-blur-md border border-white/40 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
              {product.productCode}
            </span>
          )}
        </div>
      </div>

      <div className="p-3 pt-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[11px] font-semibold text-orange-600 mb-1">
            {category ? category.name : 'Precision Polymer'}
          </div>
          <h3 className="text-sm font-bold text-slate-900 line-clamp-1">{product.name}</h3>
          <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-slate-600">
            {product.material && (
              <span className="bg-slate-100 rounded-full px-2.5 py-1">
                {product.material.replace('100% Virgin', '').trim()}
              </span>
            )}
            {product.capacity && (
              <span className="bg-slate-100 rounded-full px-2.5 py-1">{product.capacity}</span>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-900">View details</span>
          <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center group-hover:bg-slate-900 transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
};
