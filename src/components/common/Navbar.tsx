import React, { useState } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { Factory, Menu, X, Lock, Search } from 'lucide-react';
import type { PublicPage } from '../../types';

const LINKS: { label: string; page: PublicPage }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Products', page: 'products' },
  { label: 'Capabilities', page: 'capabilities' },
  { label: 'About us', page: 'about' },
  { label: 'Contact', page: 'contact' }
];

/**
 * Pill-style floating navbar (logo pill left, link pill + search right)
 * that overlays the hero, matching the reference design.
 */
export const Navbar: React.FC = () => {
  const { publicPage, setPublicPage, setActiveView, isAdminLoggedIn, setSelectedProductSlug } = useCatalog();
  const [open, setOpen] = useState(false);

  const go = (page: PublicPage) => {
    setSelectedProductSlug(null);
    setPublicPage(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (page: PublicPage) =>
    publicPage === page || (page === 'products' && publicPage === 'product-detail');

  return (
    <header className="sticky top-0 z-40 px-3 sm:px-6 pt-6 pb-2 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 pointer-events-auto">
        {/* Logo pill */}
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full pl-2 pr-5 py-1.5 shadow-md border border-slate-200 cursor-pointer"
        >
          <span className="w-8 h-8 rounded-full bg-slate-900 text-orange-500 flex items-center justify-center">
            <Factory className="w-4 h-4" />
          </span>
          <span className="text-base font-extrabold tracking-tight text-slate-900">
            Apex<span className="text-blue-600">Plast</span>
          </span>
        </button>

        {/* Desktop link pill */}
        <div className="hidden lg:flex items-center gap-2">
          <nav className="flex items-center bg-white/95 backdrop-blur-md rounded-full p-1.5 shadow-md border border-slate-200">
            {LINKS.map((l) => (
              <button
                key={l.page}
                onClick={() => go(l.page)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  isActive(l.page)
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => go('products')}
            className="flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full px-4 py-2.5 shadow-md border border-slate-200 text-xs font-semibold text-slate-700 cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            Search
          </button>
          <button
            onClick={() => setActiveView('admin')}
            title="Admin"
            className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-slate-200 flex items-center justify-center text-slate-700 hover:text-orange-600 cursor-pointer"
          >
            <Lock className="w-4 h-4" />
            <span className="sr-only">{isAdminLoggedIn ? 'Admin Portal' : 'Admin Login'}</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden w-10 h-10 rounded-full bg-white/95 shadow-md border border-slate-200 flex items-center justify-center cursor-pointer"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 p-3 space-y-1 pointer-events-auto">
          {LINKS.map((l) => (
            <button
              key={l.page}
              onClick={() => go(l.page)}
              className={`w-full text-left px-4 py-2.5 rounded-full text-sm font-semibold ${
                isActive(l.page) ? 'bg-slate-900 text-white' : 'text-slate-700'
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => {
              setActiveView('admin');
              setOpen(false);
            }}
            className="w-full flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-slate-700 bg-slate-100"
          >
            <Lock className="w-4 h-4 text-orange-600" />
            {isAdminLoggedIn ? 'Admin Portal' : 'Admin Login'}
          </button>
        </div>
      )}
    </header>
  );
};
