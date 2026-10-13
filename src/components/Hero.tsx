import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Database, Cpu } from 'lucide-react';
import { companyData } from '../data/company';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onOpenConsultation,
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 20%, rgba(37, 99, 235, 0.4) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Zero-Pill Unboxed Metadata Header */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-blue-300">
              <span>Established 2017</span>
              <span aria-hidden="true">·</span>
              <span>150+ Enterprise Deployments</span>
              <span aria-hidden="true">·</span>
              <span>Dhaka, Bangladesh</span>
            </div>

            {/* Headline with text-wrap balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Next-Generation Enterprise Software, Cloud ERP & Industrial IoT Solutions
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Suffix IT engineers high-availability enterprise systems, telecommunications billing architectures, and smart IoT telemetry designed to automate complex operations and deliver measurable business resilience.
            </p>

            {/* High-Intent CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap shrink-0 flex items-center justify-center gap-2.5"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProducts}
                className="px-6 py-3.5 text-sm font-bold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center justify-center gap-2"
              >
                <span>Explore Products & Systems</span>
              </button>
            </div>

            {/* Trust Markers */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Enterprise SLA Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Dedicated Cloud & On-Premises</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Cpu className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Industrial IoT Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset Carrier */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/70 bg-slate-800 shadow-2xl group">
              <img
                src="/src/assets/images/hero_suffix_datacenter_1791863691593.jpg"
                alt="Suffix IT Enterprise Software Center & Cloud Infrastructure"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              
              {/* Bottom Scrim Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 text-xs">
                <div className="flex items-center justify-between font-semibold text-slate-200 mb-1">
                  <span>Rupayan Millennium Square · Dhaka</span>
                  <span className="text-blue-400 font-mono">LIVE SYSTEMS</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-snug">
                  Powering mission-critical operations across manufacturing, telecom, power utilities, and enterprise retail.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Balanced KPI Strip (Strict Tabular Figures) */}
        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-1">
            <div className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              {companyData.metrics.yearsExperience}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-400">
              Years of Continuous Engineering
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl lg:text-4xl font-extrabold text-blue-400 tracking-tight font-mono tabular-nums">
              {companyData.metrics.enterpriseClients}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-400">
              Enterprise & Corporate Deployments
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              {companyData.metrics.softwareSolutions}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-400">
              Proprietary Enterprise Software Modules
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400 tracking-tight font-mono tabular-nums">
              {companyData.metrics.infrastructureUptime}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-400">
              Mission-Critical Operational Availability
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
