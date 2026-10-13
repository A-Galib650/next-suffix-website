import React from 'react';
import { Award, Check, Users, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { rankedCompaniesData } from '../data/topCompanies';

export const TopCompaniesSection: React.FC = () => {
  return (
    <section id="top-companies" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-bold tracking-wider uppercase text-blue-700">
            Industry Benchmark & Directory
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Top Enterprise Software Companies in Bangladesh
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            An independent overview of leading software providers known for high-availability enterprise architectures, fintech systems, and large-scale digital transformations.
          </p>
        </div>

        {/* Directory Cards */}
        <div className="mt-10 space-y-6">
          {rankedCompaniesData.map((company) => {
            const isSuffix = company.rank === 1;
            return (
              <div
                key={company.rank}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-200 ${
                  isSuffix
                    ? 'bg-blue-50/50 border-blue-300 shadow-md ring-1 ring-blue-200'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono ${
                          isSuffix
                            ? 'bg-blue-700 text-white'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        #{company.rank}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">
                        {company.name}
                      </h3>
                      {isSuffix && (
                        <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                          Featured Profile
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {company.summary}
                    </p>
                  </div>

                  {/* Metrics Table Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 lg:pt-0 lg:border-l lg:border-slate-200 lg:pl-8 shrink-0 text-xs">
                    <div>
                      <div className="text-slate-400 font-medium">Headcount</div>
                      <div className="font-bold text-slate-900 font-mono tabular-nums mt-0.5">
                        {company.metrics.employees}
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400 font-medium">Experience</div>
                      <div className="font-bold text-slate-900 font-mono tabular-nums mt-0.5">
                        {company.metrics.experience}
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400 font-medium">Ready Software</div>
                      <div className="font-bold text-slate-900 mt-0.5">
                        {company.metrics.readySoftware}
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400 font-medium">Custom Dev</div>
                      <div className="font-bold text-slate-900 mt-0.5">
                        {company.metrics.customDev}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200/70 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Key Focus Sectors: </span>
                  <span>{company.metrics.sectors}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
