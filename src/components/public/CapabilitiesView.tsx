import React from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { Factory, Cpu, Wrench, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const CapabilitiesView: React.FC = () => {
  const { setPublicPage } = useCatalog();

  return (
    <div className="bg-slate-50 min-h-screen py-10 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Capabilities Header */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Manufacturing Infrastructure & Machinery
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 font-display">
              High-Tonnage Production & Precision Tooling
            </h1>
            <p className="text-slate-600 text-base mt-3 leading-relaxed">
              We process over 14,500 metric tonnes of polymer annually using advanced injection moulding, extrusion blow moulding, and continuous robotic automation.
            </p>
          </div>
        </div>

        {/* Machinery Specs Table */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 font-display">
                Plant Machinery Fleet
              </h2>
              <p className="text-xs text-slate-500">
                Operating 38 synchronized lines across 3 work shifts.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              100% Operational Status
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-100 text-slate-900 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-3.5 rounded-l-lg">Machine Category</th>
                  <th className="p-3.5">Tonnage / Capacity</th>
                  <th className="p-3.5">Key Product Output</th>
                  <th className="p-3.5">Resins Processed</th>
                  <th className="p-3.5 rounded-r-lg">Units in Fleet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">Heavy-Duty Injection Lines</td>
                  <td className="p-3.5 text-blue-700 font-bold">650T – 1200T</td>
                  <td className="p-3.5">Euro crates, industrial pallets, chemical tubs</td>
                  <td className="p-3.5">HDPE, PP Copolymer</td>
                  <td className="p-3.5 font-bold">12 Units</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">Mid-Tonnage Precision Presses</td>
                  <td className="p-3.5 text-blue-700 font-bold">250T – 500T</td>
                  <td className="p-3.5">Industrial pails, storage boxes, battery casings</td>
                  <td className="p-3.5">PP, ABS, HDPE</td>
                  <td className="p-3.5 font-bold">14 Units</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">High-Speed Technical Presses</td>
                  <td className="p-3.5 text-blue-700 font-bold">100T – 200T</td>
                  <td className="p-3.5">Electrical enclosures, threaded closures, gears</td>
                  <td className="p-3.5">PC/ABS, PA6 (Nylon), POM</td>
                  <td className="p-3.5 font-bold">6 Units</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">Extrusion Blow Moulding</td>
                  <td className="p-3.5 text-blue-700 font-bold">5L to 210L</td>
                  <td className="p-3.5">Jerry cans, chemical drums, barrels</td>
                  <td className="p-3.5">HMW-HDPE</td>
                  <td className="p-3.5 font-bold">6 Units</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quality Lab & Inspection Testing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-display">
              In-House Quality Control Lab
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped with calibrated computerized test rigs for continuous monitoring:
            </p>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Melt Flow Index (MFI) Plastometer for raw polymer verification</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hydraulic compression load tester up to 2,500 kg static load</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Environmental Stress Crack Resistance (ESCR) chemical bath</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Drop impact test tower up to 3.0 meters onto solid steel anvil</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Tool Room & Rapid Mould Development
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We design and machine hardened tool steel moulds in-house for customer proprietary items:
            </p>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>CAD/CAM SolidWorks and Autodesk Moldflow simulation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Precision CNC vertical machining centers (VMC)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Wire EDM & mirror spark erosion tooling equipment</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Preventative ultrasonic mould cavity cleaning protocols</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-800 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl font-bold font-display">
              Have a Custom Tooling or Tonnage Requirement?
            </h3>
            <p className="text-xs text-blue-100 mt-1 max-w-xl">
              Our engineering team can evaluate your product 3D CAD files or physical sample to calculate mold cavitation and cycle costs.
            </p>
          </div>

          <button
            onClick={() => {
              setPublicPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-lg bg-white text-blue-900 font-bold text-xs hover:bg-blue-50 transition-colors shadow-xs cursor-pointer shrink-0"
          >
            Submit Drawing for Review
          </button>
        </div>
      </div>
    </div>
  );
};
