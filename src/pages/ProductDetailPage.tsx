import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck, Database, Cpu, Layers, ExternalLink, Activity, Send } from 'lucide-react';
import { productsData } from '../data/products';

// Product Illustrations
import officeAmico from '../media/RupantorErp/At the office-amico.svg';
import creditCardCuate from '../media/RupantorErp/Credit card-cuate.svg';
import salesFeatureSvg from '../media/RupantorErp/salesFeature.svg';
import stmsImg from '../media/smartTransformer/STMS.png';
import stmsFeaturesImg from '../media/smartTransformer/image (1).png';
import fieldForceImg from '../media/download/field-force.png';
import billingSvg from '../media/products/billing.svg';
import eCommerceSvg from '../media/products/eCommerce.svg';
import fundSvg from '../media/products/fund.svg';
import hotelSvg from '../media/products/hotel.svg';
import inventorySvg from '../media/products/inventory.svg';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = productsData.find((p) => p.slug === slug) || productsData[0];
  const [activeTab, setActiveTab] = useState<'modules' | 'specs' | 'integrations'>('modules');
  const [demoRequested, setDemoRequested] = useState(false);

  // Illustration selection based on product
  const getProductHeroImage = () => {
    if (product.slug === 'rupantor-erp') return officeAmico;
    if (product.slug === 'transformer-monitoring') return stmsImg;
    if (product.slug === 'field-force-management') return fieldForceImg;
    if (product.slug === 'interconnect-billing') return billingSvg;
    if (product.slug === 'e-commerce') return eCommerceSvg;
    if (product.slug === 'provident-fund') return fundSvg;
    if (product.slug === 'hotel-booking-system') return hotelSvg;
    if (product.slug === 'rupantor-inventory') return inventorySvg;
    return officeAmico;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. SIGNATURE PRODUCT HEADER (From OurProductHeader.js) */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white pt-14 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 pb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-semibold text-blue-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{product.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-blue-100 font-normal leading-relaxed max-w-2xl">
                {product.subtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#demo-request"
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-blue-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <span>Request Guided Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-700/60 hover:bg-blue-700 border border-blue-400/30 rounded-xl transition-all"
                >
                  Consult Architecture
                </Link>
              </div>
            </div>

            {/* Header Hero Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-md w-full p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center min-h-[280px]">
                <img
                  src={getProductHeroImage()}
                  alt={product.name}
                  className="max-h-64 max-w-full object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Custom Shape Wave Divider */}
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

      {/* 2. STATS & KEY METRICS STRIP */}
      {product.highlightMetrics.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {product.highlightMetrics.map((hm, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md space-y-1"
              >
                <div className="text-3xl font-extrabold text-blue-700 font-mono tabular-nums">
                  {hm.stat}
                </div>
                <div className="text-xs font-medium text-slate-600">
                  {hm.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. EXECUTIVE SYSTEM OVERVIEW */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Architectural Body */}
          <div className="lg:col-span-8 space-y-10">
            {/* System Narrative */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                System Overview
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Purpose-Built Enterprise Capability
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {product.overview}
              </p>
            </div>

            {/* Smart Transformer Special Diagram if transformer-monitoring */}
            {product.slug === 'transformer-monitoring' && (
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
                <h3 className="text-lg font-bold text-slate-900 text-center">
                  Smart Transformer Monitoring System Features
                </h3>
                <div className="rounded-xl overflow-hidden border border-slate-100 flex justify-center p-2 bg-slate-50">
                  <img
                    src={stmsFeaturesImg}
                    alt="System Features Diagram"
                    className="w-full max-w-2xl h-auto object-contain"
                  />
                </div>
              </div>
            )}

            {/* Rupantor ERP Integrated Modules Showcase */}
            {product.slug === 'rupantor-erp' && (
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h3 className="text-lg font-bold text-slate-900">
                    Accounts Payable & Procurement Workflow
                  </h3>
                  <span className="text-xs font-mono text-blue-700 font-semibold">GAAP Compliant</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  <div className="space-y-3 text-xs text-slate-700">
                    <p className="leading-relaxed">
                      Rupantor ERP seamlessly ties purchasing authorizations, vendor invoices, payment scheduling, and ledger reconciliations into automated workflows.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        <span>Automated 3-way PO matching</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        <span>Vendor aging and cash outflow forecast</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        <span>Multi-currency tax & VAT calculation</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center p-4 bg-slate-50 rounded-xl">
                    <img src={creditCardCuate} alt="Accounts Integration" className="max-h-48 object-contain" />
                  </div>
                </div>
              </div>
            )}

            {/* Subsystems & Modules Grid */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-lg font-bold text-slate-900">
                  Core Subsystems & Modules
                </h3>
                <span className="text-xs text-slate-500 font-medium">{product.modules.length} Modules Included</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {product.modules.map((mod, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 hover:bg-blue-50/50 hover:border-blue-200 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{mod}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Role-managed permissions and audit logging</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Technical Specifications & Compliance
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="text-slate-500 font-medium">Deployment Target</div>
                  <div className="text-sm font-bold text-slate-900">{product.specs.deployment}</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="text-slate-500 font-medium">System Architecture</div>
                  <div className="text-sm font-bold text-slate-900">{product.specs.architecture}</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="text-slate-500 font-medium">Target Industries</div>
                  <div className="text-sm font-bold text-slate-900">{product.specs.targetIndustries}</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="text-slate-500 font-medium">Security & Role Access</div>
                  <div className="text-sm font-bold text-slate-900">{product.specs.security}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form & Fast Action */}
          <div className="lg:col-span-4 space-y-6">
            <div id="demo-request" className="sticky top-28 space-y-6">
              <div className="p-8 rounded-2xl bg-slate-900 text-white shadow-xl space-y-5">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                    Live Evaluation
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    Request {product.name} Demo
                  </h3>
                  <p className="text-xs text-slate-300">
                    Schedule a demonstration tailored to your exact organizational workflow.
                  </p>
                </div>

                {demoRequested ? (
                  <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                    <div className="text-sm font-bold text-white">Demo Scheduled</div>
                    <p className="text-xs text-slate-300">
                      Our solutions engineer will connect with you within 1 business day.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setDemoRequested(true);
                    }}
                    className="space-y-3.5 text-xs"
                  >
                    <div>
                      <label className="text-slate-300 font-semibold block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Asif Ahmed"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-slate-300 font-semibold block mb-1">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-slate-300 font-semibold block mb-1">Contact Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 1XXXXXXXXX"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-slate-300 font-semibold block mb-1">Organization / Enterprise</label>
                      <input
                        type="text"
                        placeholder="Company Ltd."
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md mt-2 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Submit Demo Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}

                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>Non-Disclosure Agreement (NDA) Protected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-400" />
                    <span>On-Premises or Cloud SLA Support</span>
                  </div>
                </div>
              </div>

              {/* Other Products Directory */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Other Suffix Platforms
                </div>
                <div className="space-y-1.5 text-xs">
                  {productsData
                    .filter((p) => p.slug !== product.slug)
                    .slice(0, 6)
                    .map((other) => (
                      <Link
                        key={other.id}
                        to={`/product/${other.slug}`}
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
