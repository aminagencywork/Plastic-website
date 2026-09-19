import React from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { ArrowRight, ArrowDown, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  const { setPublicPage, setSelectedProductSlug } = useCatalog();

  const goProducts = () => {
    setSelectedProductSlug(null);
    setPublicPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goContact = () => {
    setPublicPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative px-3 sm:px-6 pt-2 pb-10">
      <div className="relative max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden min-h-[560px] lg:min-h-[640px] flex flex-col justify-end bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=80"
          alt="Engineer operating a precision injection moulding machine"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10"></div>

        <div className="relative p-6 sm:p-10 lg:p-14 pb-14 lg:pb-16">
          <button
            onClick={() => {
              setPublicPage('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-white/90 text-slate-800 text-[11px] font-semibold rounded-full px-3 py-1.5 mb-5 cursor-pointer"
          >
            Version 2.0 is here
            <span className="font-bold inline-flex items-center gap-1">
              Read more <ArrowRight className="w-3 h-3" />
            </span>
          </button>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight max-w-xl">
            Powering Global Plastic Industry
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/80 max-w-md leading-relaxed">
            We combine decades of moulding expertise with cutting-edge technology to deliver crates, drums and custom OEM components.
          </p>

          <button
            onClick={goContact}
            className="mt-7 inline-flex items-center justify-between gap-6 bg-white text-slate-900 rounded-full pl-6 pr-1.5 py-1.5 text-xs font-bold tracking-wide uppercase shadow-lg cursor-pointer min-w-[240px]"
          >
            Get a free quote
            <span className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>

        {/* Floating info card (bottom right) */}
        <button
          onClick={goProducts}
          className="hidden md:flex absolute right-6 bottom-6 lg:right-10 lg:bottom-10 items-center gap-3 bg-white rounded-2xl p-2.5 pr-4 shadow-xl text-left cursor-pointer"
        >
          <div className="w-28 h-16 rounded-xl overflow-hidden relative bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=400&q=70"
              alt=""
              className="w-full h-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center">
                <Play className="w-3 h-3 fill-current" />
              </span>
            </span>
          </div>
          <div>
            <div className="text-lg font-bold text-slate-900 leading-none">
              /01 <span className="text-xs text-slate-400 font-medium">/03</span>
            </div>
            <div className="text-[11px] text-slate-500 mt-1 max-w-[140px]">
              Explore our full product catalog
            </div>
          </div>
        </button>
      </div>

        {/* Rotating "get in touch" badge (outside the clipped card so it overlaps the edge) */}
        <button
          onClick={goContact}
          aria-label="Get in touch"
          className="hidden lg:flex absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-10 w-28 h-28 rounded-full bg-slate-900 border-[6px] border-white items-center justify-center cursor-pointer"
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
            <defs>
              <path id="circ" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
            </defs>
            <text fill="#ffffff" fontSize="9.5" fontWeight="700" letterSpacing="3">
              <textPath href="#circ">GET IN TOUCH • GET IN TOUCH •</textPath>
            </text>
          </svg>
          <ArrowDown className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
};
