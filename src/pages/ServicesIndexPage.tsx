import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/services';

export const ServicesIndexPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = [
    'All',
    'Enterprise Software',
    'Cloud & Infrastructure',
    'Industrial IoT',
    'Specialized Systems',
  ];

  const filtered =
    selectedFilter === 'All'
      ? servicesData
      : servicesData.filter((s) => s.category === selectedFilter);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Engineering & Consulting Services
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal">
            Strategic digital transformation, industrial IoT telemetry, ERP architecture, and enterprise cybersecurity.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/70 rounded-xl max-w-fit mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((service, idx) => (
              <div
                key={service.id}
                className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="font-semibold text-blue-700">{String(idx + 1).padStart(2, '0')}.</span>
                    <span className="text-slate-500 font-sans text-[11px]">{service.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    <Link to={`/service/${service.slug}`}>{service.name}</Link>
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Deliverables
                    </div>
                    {service.deliverables.slice(0, 2).map((del, i) => (
                      <div key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">·</span>
                        <span className="truncate">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">SLA Supported</span>
                  <Link
                    to={`/service/${service.slug}`}
                    className="text-xs font-bold text-blue-700 group-hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>View Service Page</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
