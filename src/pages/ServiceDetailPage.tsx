import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck, Database, Cpu, Send, Layers } from 'lucide-react';
import { servicesData } from '../data/services';

// Original Service Images
import itInfraBanner from '../media/ITInfrastructure/itInfrastructureBannerImg.png';
import softDevImg from '../media/customApp/software-development.png';
import stmsImg from '../media/smartTransformer/STMS.png';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];
  const [auditRequested, setAuditRequested] = useState(false);

  const getServiceBannerImg = () => {
    if (service.slug === 'it-infrastructure' || service.slug === 'power-cooling') return itInfraBanner;
    if (service.slug === 'industrial-monitoring' || service.slug === 'iot') return stmsImg;
    return softDevImg;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white pt-14 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 pb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{service.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-semibold text-blue-200">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span>{service.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {service.name}
              </h1>

              <p className="text-base sm:text-lg text-blue-100 font-normal leading-relaxed max-w-2xl">
                {service.tagline}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#audit-request"
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <span>Request Architecture Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-800/60 hover:bg-blue-800 border border-blue-400/30 rounded-xl transition-all"
                >
                  Contact Practice Lead
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-md w-full p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center min-h-[260px]">
                <img
                  src={getServiceBannerImg()}
                  alt={service.name}
                  className="max-h-60 max-w-full object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-8 text-slate-50 fill-current"
          >
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
          </svg>
        </div>
      </section>

      {/* 2. Main Content Body */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Scope, Features, Deliverables */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Practice Scope
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Engineering & Delivery Methodology
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {service.description}
              </p>
            </div>

            {/* Features */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Key Capabilities & Technical Features
              </h3>
              <div className="space-y-3">
                {service.keyFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800 leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Benefits */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Measurable Business Outcomes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.businessBenefits.map((ben, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1.5"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                    <p className="text-xs font-semibold text-blue-950 leading-snug">
                      {ben}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Guaranteed Deliverables */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Contractual Deliverables & Artifacts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                {service.deliverables.map((del, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 flex items-center gap-2.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Fast Request */}
          <div className="lg:col-span-4 space-y-6">
            <div id="audit-request" className="sticky top-28 space-y-6">
              <div className="p-8 rounded-2xl bg-slate-900 text-white shadow-xl space-y-5">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                    Consultation Request
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    Request Architecture Review
                  </h3>
                  <p className="text-xs text-slate-300">
                    Connect directly with our solutions architects to evaluate project feasibility.
                  </p>
                </div>

                {auditRequested ? (
                  <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                    <div className="text-sm font-bold text-white">Request Received</div>
                    <p className="text-xs text-slate-300">
                      We will review your scope and follow up within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setAuditRequested(true);
                    }}
                    className="space-y-3.5 text-xs"
                  >
                    <div>
                      <label className="text-slate-300 font-semibold block mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-slate-300 font-semibold block mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@organization.com"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-slate-300 font-semibold block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 1XXXXXXXXX"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-slate-300 font-semibold block mb-1">Project Scope / Details</label>
                      <textarea
                        rows={3}
                        placeholder="Expected scope, scale, or deployment requirements..."
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md mt-2 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Submit Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}

                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>Non-Disclosure Protected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-400" />
                    <span>Production SLA & Support</span>
                  </div>
                </div>
              </div>

              {/* Other Services */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Other Services
                </div>
                <div className="space-y-1.5 text-xs">
                  {servicesData
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 6)
                    .map((other) => (
                      <Link
                        key={other.id}
                        to={`/service/${other.slug}`}
                        className="block p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-blue-700 transition-colors font-medium truncate"
                      >
                        · {other.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
