import React, { useState } from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, Server, Cpu, ShieldCheck, Activity, Globe, Smartphone, HeartPulse, GraduationCap, Database, Video } from 'lucide-react';
import { servicesData, ServiceItem } from '../data/services';

interface ServicesGridProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onSelectService,
  onOpenConsultation,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = [
    'All',
    'Enterprise Software',
    'Cloud & Infrastructure',
    'Industrial IoT',
    'Specialized Systems',
  ];

  const filteredServices =
    selectedFilter === 'All'
      ? servicesData
      : servicesData.filter((s) => s.category === selectedFilter);

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-bold tracking-wider uppercase text-blue-700">
              Consulting & Delivery Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Full-Lifecycle Engineering from Silicon & Edge to Cloud Architecture
            </h2>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              We partner with enterprise organizations, telecom providers, and utilities to build resilient digital systems, secure IT/OT perimeters, and modern scalable platforms.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Schedule Architecture Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Filter Segmented Controls */}
        <div className="mt-8 flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/70 rounded-xl max-w-fit">
          {categories.map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Highlight Spotlight Banner: Industrial IoT & Telemetry */}
        {(selectedFilter === 'All' || selectedFilter === 'Industrial IoT') && (
          <div className="mt-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-10">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  <img
                    src="/src/assets/images/service_iot_industrial_1791863693345.jpg"
                    alt="Industrial IoT Telemetry and Smart Transformer Automation"
                    className="w-full h-64 sm:h-72 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                <div className="text-xs font-semibold text-blue-700 flex items-center gap-2">
                  <span>Specialized Practice</span>
                  <span aria-hidden="true">·</span>
                  <span>Industrial IoT & SCADA Automation</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                  Real-Time Edge Sensor Networks & Transformer Telemetry
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Precision industrial telemetry monitoring electrical grids, distribution substations, and factory assets. We ingest sub-second Modbus and MQTT sensor streams to predict insulation failures, phase imbalances, and load surges before outages occur.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    <span>Sub-second emergency alert dispatch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    <span>RS485, Modbus & MQTT hardware firmware</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    <span>Live SCADA-grade web dashboards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    <span>Preventative equipment maintenance forecasting</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      const iotService = servicesData.find((s) => s.slug === 'industrial-monitoring');
                      if (iotService) onSelectService(iotService);
                    }}
                    className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Industrial IoT Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Numbered Editorial Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const indexString = String(index + 1).padStart(2, '0');
            return (
              <div
                key={service.id}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Editorial human index numbering */}
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="font-semibold text-blue-700">{indexString}.</span>
                    <span className="text-slate-500 font-sans text-[11px] font-medium">{service.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Concrete Deliverables */}
                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Key Deliverables
                    </div>
                    {service.deliverables.slice(0, 2).map((del, i) => (
                      <div key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">·</span>
                        <span className="line-clamp-1">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] font-semibold text-slate-500">
                    SLA Supported
                  </div>
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-bold text-blue-700 group-hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect Details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
