import React from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { Hero } from './Hero';
import { StatsSection } from './StatsSection';
import { ManufacturingProcess } from './ManufacturingProcess';
import { CategoryCard } from '../common/CategoryCard';
import { ProductCard } from '../common/ProductCard';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Factory,
  CheckCircle,
  Truck,
  Layers,
  Sparkles,
  PhoneCall,
  ChevronRight
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { categories, products, setPublicPage, setSelectedProductSlug, setQuickEnquiryProduct } = useCatalog();

  const featuredProducts = products.filter(p => p.isFeatured && p.isPublished).slice(0, 4);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust / Highlights Metrics */}
      <StatsSection />

      {/* 3. Product Categories Section */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 font-display">
                What We Make, We Make with Purpose
              </h2>
              <p className="text-slate-500 text-sm mt-1 max-w-xl">
                Precision-moulded containers, crates, drums, and bespoke OEM components designed for high durability.
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedProductSlug(null);
                setPublicPage('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700 cursor-pointer"
            >
              <span>View All Categories</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Products Section */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 font-display">
                Featured Industrial Products
              </h2>
              <p className="text-slate-500 text-sm mt-1 max-w-xl">
                Tested against extreme temperature cycles, drop impact tests, and multi-tier stack loads.
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedProductSlug(null);
                setPublicPage('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-orange-500 text-xs font-bold transition-colors cursor-pointer"
            >
              <span>Explore Complete Catalog ({products.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEnquire={(prod) => setQuickEnquiryProduct(prod)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. About / Company Introduction Section */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left image composite */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80"
                  alt="ApexPlast Facility Production Floor"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                    Main Production Facility
                  </div>
                  <div className="text-sm font-semibold">
                    85,000 Sq. Ft. Controlled Clean Manufacturing Floor
                  </div>
                </div>
              </div>

              {/* Sub-card overlay */}
              <div className="absolute -bottom-5 -right-5 hidden sm:block bg-white p-4 rounded-xl shadow-lg border border-slate-200 max-w-xs">
                <div className="text-xs font-bold text-slate-800">
                  Tool Room & Mold Maintenance
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  In-house CNC EDM and precision toolmakers for swift prototyping and zero production downtime.
                </div>
              </div>
            </div>

            {/* Right text introduction */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">
                WHO WE ARE
              </span>
              <h2 className="text-3xl font-semibold text-slate-900 font-display leading-tight">
                Building Reliable Plastic Solutions for Modern Industry
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Founded in 2008, <strong>ApexPlast Precision Polymers</strong> has grown into a premier manufacturing supplier of heavy-load logistics crates, industrial containers, UN-compliant packaging, and high-tolerance engineered components.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                We operate 38 computer-controlled injection and blow moulding machines with clamping forces ranging from 100 Tonnes to 1200 Tonnes. Our commitment to 100% virgin polymers, strict Melt Flow Index verification, and zero-defect QA guarantees that our products withstand the demanding rigors of warehouses, chemical transit, and automated logistics.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50">
                  <div className="text-xs font-bold text-slate-900">Custom Tooling (OEM)</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Cad to finished mould in 3-4 weeks</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50">
                  <div className="text-xs font-bold text-slate-900">Virgin Raw Materials</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Prime grade HDPE, PP, PC/ABS, NYLON</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setPublicPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-orange-500 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Learn More About Our Facility</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Manufacturing Capabilities & Machinery */}
      <section className="px-3 sm:px-6 py-6 bg-white">
        <div className="max-w-6xl mx-auto bg-slate-100 rounded-3xl px-4 sm:px-10 py-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 font-display">
              Advanced Machinery & Processing Capabilities
            </h2>
            <p className="text-slate-500 text-sm mt-1.5">
              High-tonnage injection moulding, continuous extrusion blow moulding, and in-house tooling under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white shadow-xs text-center">
              <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4 mx-auto">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Heavy-Tonnage Injection Moulding
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Equipped with microprocessor-controlled injection presses from 100 Tonnes to 1200 Tonnes. Capable of single-shot product weights up to 12.5 kg with robotic parts retrieval.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-500 border-t border-slate-200 pt-3 text-left">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Euro crates & industrial totes</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Heavy-duty plastic pallets & skids</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Thin-wall fast cycle packaging</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 text-center shadow-lg [&_h3]:text-white [&_p]:text-slate-300 [&_li]:text-slate-300 [&_ul]:border-white/10">
              <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4 mx-auto">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Extrusion Blow Moulding
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Multi-layer continuous parison extrusion for hazardous liquid containers and intermediate bulk packaging with UN Class II & III certification.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-500 border-t border-slate-200 pt-3 text-left">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>5L to 30L Industrial Jerry Cans</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>50L to 210L Open & Tight-Head Barrels</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Uniform parison wall thickness control</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-xs text-center">
              <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4 mx-auto">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Custom Moulding & Tool Room
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Dedicated CNC machining centers, wire-cut EDM, and master toolmakers capable of turning 3D CAD models into mass production tooling in 3 to 5 weeks.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-500 border-t border-slate-200 pt-3 text-left">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>DFM & mould flow analysis reports</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Hot runner multi-cavity moulds</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Insert moulding with brass & steel studs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Manufacturing Process Workflow */}
      <ManufacturingProcess />

      {/* 8. Why Choose Us Section */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 font-display">
              Why Tier-1 Businesses Partner With Us
            </h2>
            <p className="text-slate-500 text-sm mt-1.5">
              Consistent dimensional precision, high cycle speed, scalable bulk supply, and zero defect tolerance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50">
              <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold mb-3">
                01
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                100% Prime Virgin Polymers
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                We do not blend degraded regrinds into structural products. Certified certificates of analysis (COA) provided with every production run.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50">
              <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold mb-3">
                02
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                High Volume Capacity
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                With 38 production lines operating 24/7, we process over 14,500 metric tonnes of plastic yearly, keeping your distribution supply line uninterrupted.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50">
              <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold mb-3">
                03
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                In-House Tooling Room
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Our in-house toolmakers maintain, inspect, and polish moulds daily, preventing flashes, burrs, and dimensional shrinkage across long runs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50">
              <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold mb-3">
                04
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                Custom Branding & Color
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Custom Pantone / RAL masterbatch compounding, laser engraving, screen printing, and in-mould labeling (IML) tailored to your brand identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final Call to Action Section */}
      <section className="px-3 sm:px-6 py-10 bg-white">
        <div className="relative max-w-7xl mx-auto bg-slate-900 text-white rounded-3xl px-6 py-16 text-center space-y-6">
          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full inline-block">
            Direct Manufacturing Supply & Quotations
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight font-display max-w-2xl mx-auto">
            Looking for a Reliable Plastic Manufacturing Partner?
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Tell us what you need. Our team of polymer engineers and sales specialists will help you select or custom-mould the exact plastic product for your application.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setSelectedProductSlug(null);
                setPublicPage('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Explore Product Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setPublicPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-orange-500" />
              <span>Contact Sales Desk</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
