import React from 'react';
import { Link } from 'react-router-dom';
import { rankedCompaniesData } from '../data/topCompanies';

export const TopCompaniesPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Industry Rankings</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Top Enterprise Software Companies in Bangladesh
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal">
            An independent industry benchmark and evaluation of Bangladesh's leading software technology providers, ERP leaders, and digital transformation partners.
          </p>
        </div>
      </section>

      {/* Directory Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {rankedCompaniesData.map((company) => {
            const isSuffix = company.rank === 1;
            return (
              <div
                key={company.rank}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  isSuffix
                    ? 'bg-blue-50/60 border-blue-300 shadow-md ring-1 ring-blue-200'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono ${
                          isSuffix
                            ? 'bg-blue-700 text-white'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        #{company.rank}
                      </span>
                      <h2 className="text-xl font-bold text-slate-900">
                        {company.name}
                      </h2>
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
      </section>
    </div>
  );
};
