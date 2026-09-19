import React from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { StatsSection } from './StatsSection';
import { ShieldCheck, Factory, Award, CheckCircle, ArrowRight, PhoneCall } from 'lucide-react';

export const AboutView: React.FC = () => {
  const { companyInfo, setPublicPage } = useCatalog();

  return (
    <div className="bg-slate-50 min-h-screen py-10 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* About Header */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              About ApexPlast Precision Polymers
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 font-display">
              18+ Years of Manufacturing Excellence in Precision Plastics
            </h1>
            <p className="text-slate-600 text-base mt-3 leading-relaxed">
              Established in {companyInfo.establishedYear}, ApexPlast is a dedicated B2B plastic manufacturing enterprise specializing in high-load industrial logistics crates, chemical storage drums, UN packaging, and custom injection moulded components.
            </p>
          </div>
        </div>

        {/* Plant Metrics */}
        <StatsSection />

        {/* Plant Infrastructure & Equipment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs">
          <div className="space-y-4">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Plant & Machinery
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              85,000 Sq. Ft. State-of-the-Art Production Facility
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our continuous production floors house 38 modern servo-hydraulic and all-electric injection moulding machines ranging from 100 Tonnes to 1200 Tonnes clamp force.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              To support continuous round-the-clock runs, our plant is backed by captive power generators, automated raw material desiccant dehumidifying dryers, chilled water central circuits, and robotic part extractors.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Microprocessor-controlled injection presses (100T – 1200T)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Extrusion blow moulding up to 210-Liter barrel capacity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>In-house CNC tool room with wire EDM and spark erosion</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>In-line hot-stamping, screen printing and RFID tagging</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80"
                alt="Industrial factory facility floor"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Quality Management Policy */}
        <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-2xl border border-slate-800 shadow-xl space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              Zero Defect Culture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-display">
              Strict Polymer Testing & Batch Traceability
            </h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Every production lot undergoes melt flow index (MFI), density checks, Izod impact drop testing, and hydraulic pressure testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <ShieldCheck className="w-6 h-6 text-blue-400 mb-2" />
              <h3 className="text-sm font-bold text-white">ISO 9001:2015</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Full standard compliance with internal audits and continuous quality calibration protocols.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <Award className="w-6 h-6 text-blue-400 mb-2" />
              <h3 className="text-sm font-bold text-white">Food Contact Compliance</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Certified virgin food-grade polypropylenes tested for migration limits and heavy metal absence.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <Factory className="w-6 h-6 text-blue-400 mb-2" />
              <h3 className="text-sm font-bold text-white">UN Hazardous Packaging</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Hydrostatic pressure and drop-tested drum & jerry can compliance for UN Packaging Class II and III.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900 font-display">
            Plan a Factory Visit or Request Material Data Sheets
          </h3>
          <p className="text-sm text-slate-500 max-w-lg mx-auto">
            We welcome technical audits by procurement managers, automotive tier suppliers, and corporate distributors.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => {
                setPublicPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Contact Plant Engineers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
