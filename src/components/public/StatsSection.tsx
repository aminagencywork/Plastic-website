import React from 'react';
import { useCatalog } from '../../context/CatalogContext';

export const StatsSection: React.FC = () => {
  const { companyInfo, products } = useCatalog();

  const stats = [
    { value: `${companyInfo.experienceYears}+`, label: 'Years of industrial manufacturing experience' },
    { value: `${products.length}+`, label: 'Active product specifications in our catalog' },
    { value: `${companyInfo.machinesCount}`, label: 'CNC moulding lines, 100T to 1200T clamping' },
    { value: companyInfo.annualCapacity, label: 'Annual polymer output capacity' }
  ];

  return (
    <section className="bg-white py-14 lg:pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-0 lg:divide-x divide-slate-200">
          {stats.map((s, i) => (
            <div key={i} className="text-center px-4">
              <div className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
                {s.value}
              </div>
              <div className="text-[11px] text-slate-500 mt-2 max-w-[170px] mx-auto leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
