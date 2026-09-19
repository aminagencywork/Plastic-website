import React from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { Factory, Mail, Phone, MapPin, Lock, ArrowUp, ArrowRight } from 'lucide-react';
import type { PublicPage } from '../../types';

export const Footer: React.FC = () => {
  const { companyInfo, categories, setPublicPage, setActiveCategoryFilter, setSelectedProductSlug, setActiveView } =
    useCatalog();

  const go = (page: PublicPage) => {
    setSelectedProductSlug(null);
    setPublicPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goCategory = (id: string) => {
    setActiveCategoryFilter(id);
    go('products');
  };

  const linkCls = 'text-white/60 hover:text-orange-500 transition-colors cursor-pointer text-left';

  return (
    <footer className="px-3 sm:px-6 pb-4 bg-white">
      <div className="max-w-7xl mx-auto bg-slate-900 text-white rounded-3xl overflow-hidden">
        <div className="px-6 sm:px-12 pt-14 pb-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
              Let's Build The Future Together
            </h2>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              Industrial polymer manufacturing for logistics crates, chemical drums and precision custom-moulded components.
            </p>
            <button
              onClick={() => go('contact')}
              className="inline-flex items-center gap-4 bg-white text-slate-900 rounded-full pl-5 pr-1.5 py-1.5 text-xs font-bold cursor-pointer"
            >
              Get a quote
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          <div className="lg:col-span-3 space-y-3 text-sm">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Contact</h3>
            <p className="flex items-start gap-2 text-white/60">
              <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
              <span>{companyInfo.address}, {companyInfo.city}, {companyInfo.state} - {companyInfo.postalCode}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-500 shrink-0" />
              <a href={`tel:${companyInfo.phone}`} className={linkCls}>{companyInfo.phone}</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-500 shrink-0" />
              <a href={`mailto:${companyInfo.salesEmail}`} className={`${linkCls} truncate`}>{companyInfo.salesEmail}</a>
            </p>
          </div>

          <div className="lg:col-span-2 space-y-3 text-sm">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li><button onClick={() => go('home')} className={linkCls}>Home</button></li>
              <li><button onClick={() => go('products')} className={linkCls}>Products</button></li>
              <li><button onClick={() => go('capabilities')} className={linkCls}>Capabilities</button></li>
              <li><button onClick={() => go('about')} className={linkCls}>About us</button></li>
              <li><button onClick={() => go('contact')} className={linkCls}>Contact</button></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3 text-sm">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button onClick={() => goCategory(cat.id)} className={linkCls}>{cat.name}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Oversized brand wordmark */}
        <div className="px-6 sm:px-12 overflow-hidden select-none">
          <div className="flex items-center gap-3 text-[15vw] lg:text-[9rem] font-bold leading-none tracking-tight text-white whitespace-nowrap">
            <Factory className="w-[0.6em] h-[0.6em] text-orange-500 shrink-0" />
            ApexPlast
          </div>
        </div>

        <div className="px-6 sm:px-12 py-5 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveView('admin')}
              className="flex items-center gap-1.5 hover:text-orange-500 transition-colors cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              Admin
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              title="Back to Top"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-orange-500 text-white flex items-center justify-center cursor-pointer transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
