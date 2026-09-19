import React from 'react';
import { Layers, Wrench, Flame, SearchCheck, CheckSquare, Truck } from 'lucide-react';

const steps = [
  { num: '01', title: 'Virgin Resin QC', desc: 'Inspection of raw HDPE / PP / PC granules with Melt Flow Index (MFI) & density batch tests.', icon: Layers },
  { num: '02', title: 'Precision Tooling', desc: 'Hardened steel injection moulds with balanced runner systems for uniform wall thickness.', icon: Wrench },
  { num: '03', title: 'Automated Moulding', desc: 'Computer-controlled clamp force (100T-1200T) with robotic parts extraction.', icon: Flame },
  { num: '04', title: 'Load & Stress Testing', desc: 'Drop impact tests, compression stack trials, and environmental stress crack checks.', icon: SearchCheck },
  { num: '05', title: 'Finishing & Branding', desc: 'Flash trimming, barcode labeling, hot-stamp branding, and protective shrink wrap.', icon: CheckSquare },
  { num: '06', title: 'Direct B2B Dispatch', desc: 'Palletized shrink-wrapped batches prepared for wholesale delivery or export containers.', icon: Truck }
];

/** Dark rounded panel with numbered rows (orange marker on the active row). */
export const ManufacturingProcess: React.FC = () => {
  return (
    <section className="px-3 sm:px-6 py-10 bg-white">
      <div className="max-w-7xl mx-auto bg-slate-900 text-white rounded-3xl px-6 sm:px-12 py-14">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">
            Production workflow
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-2">
            Manufacturing Services Tailored for You
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Every run follows a closed-loop quality process from resin to dispatch.
          </p>
        </div>

        <div className="max-w-4xl mx-auto divide-y divide-white/10">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="flex items-center gap-4 sm:gap-8 py-5">
                <span className="text-sm text-slate-400 font-medium w-8 shrink-0">{s.num}</span>
                <h3 className="text-base sm:text-lg font-semibold w-48 shrink-0">{s.title}</h3>
                <p className="hidden md:block flex-1 text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                <span
                  className={`ml-auto w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                    i === 1 ? 'bg-orange-500 text-white' : 'bg-white/10 text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
