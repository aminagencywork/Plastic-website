import React from 'react';
import { Category } from '../../types';
import { useCatalog } from '../../context/CatalogContext';

interface CategoryCardProps {
  category: Category;
}

/** Tall rounded image card with a frosted text panel, as in the reference. */
export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { setActiveCategoryFilter, setPublicPage, setSelectedProductSlug, products } = useCatalog();

  const count = products.filter((p) => p.categoryId === category.id).length;

  const handleClick = () => {
    setActiveCategoryFilter(category.id);
    setSelectedProductSlug(null);
    setPublicPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleClick}
      className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer bg-slate-200"
    >
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

      <span className="absolute top-4 left-4 bg-white/25 backdrop-blur-md border border-white/40 text-white text-[10px] font-semibold px-3 py-1 rounded-full">
        {count} Products
      </span>

      <div className="absolute left-3 right-3 bottom-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-4 text-white">
        <h3 className="text-sm font-bold">{category.name}</h3>
        <p className="text-[11px] text-white/80 mt-1 line-clamp-2 leading-relaxed">
          {category.description}
        </p>
      </div>
    </div>
  );
};
