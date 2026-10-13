import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Layers, ArrowRight, Send, Check } from 'lucide-react';
import { ProductItem } from '../data/products';
import { ServiceItem } from '../data/services';
import { CareerJob } from '../data/careers';
import { companyData } from '../data/company';

interface DetailModalProps {
  product: ProductItem | null;
  service: ServiceItem | null;
  careerJob: CareerJob | null;
  consultationOpen: boolean;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  product,
  service,
  careerJob,
  consultationOpen,
  onClose,
}) => {
  const [applied, setApplied] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantNote, setApplicantNote] = useState('');

  if (!product && !service && !careerJob && !consultationOpen) {
    return null;
  }

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header Bar */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
            <span>Suffix IT Solutions</span>
            <span aria-hidden="true">·</span>
            <span>
              {product
                ? 'Product Architecture'
                : service
                ? 'Service Specification'
                : careerJob
                ? 'Job Application'
                : 'Enterprise Consultation'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          {/* PRODUCT VIEW */}
          {product && (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  {product.category}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-600 font-medium">
                  {product.subtitle}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed font-normal">
                {product.overview}
              </div>

              {/* Highlight Metrics */}
              {product.highlightMetrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {product.highlightMetrics.map((hm, i) => (
                    <div key={i} className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 space-y-1">
                      <div className="text-2xl font-extrabold text-blue-800 font-mono tabular-nums">
                        {hm.stat}
                      </div>
                      <div className="text-xs text-slate-600 font-medium">
                        {hm.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Modules Breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Included Subsystems & Architecture Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {product.modules.map((mod, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 font-medium">Deployment Target:</span>
                  <p className="font-semibold text-slate-800 mt-0.5">{product.specs.deployment}</p>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Architecture Framework:</span>
                  <p className="font-semibold text-slate-800 mt-0.5">{product.specs.architecture}</p>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Target Vertical:</span>
                  <p className="font-semibold text-slate-800 mt-0.5">{product.specs.targetIndustries}</p>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Security & Integrity:</span>
                  <p className="font-semibold text-slate-800 mt-0.5">{product.specs.security}</p>
                </div>
              </div>
            </div>
          )}

          {/* SERVICE VIEW */}
          {service && (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  {service.category}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {service.name}
                </h3>
                <p className="text-sm text-slate-600 font-medium">
                  {service.tagline}
                </p>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Technical Scope & Core Features
                </h4>
                <div className="space-y-2 text-xs text-slate-700">
                  {service.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Guaranteed Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {service.deliverables.map((del, i) => (
                    <div key={i} className="p-3 rounded-lg bg-blue-50/50 border border-blue-200 text-blue-900 font-medium">
                      {del}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CAREER JOB APPLICATION VIEW */}
          {careerJob && (
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  {careerJob.department} · {careerJob.location}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Application for {careerJob.title}
                </h3>
                <p className="text-xs text-slate-500">
                  Position Type: {careerJob.jobType} · Experience: {careerJob.experience}
                </p>
              </div>

              {applied ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Application Sent to Suffix HR
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Your profile for {careerJob.title} has been logged. Our recruitment team will review your application. You can also forward your CV to <span className="font-semibold text-blue-700">{companyData.careerEmail}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="your.email@domain.com"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+880 1XXXXXXXXX"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700">LinkedIn / Portfolio URL</label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700">Cover Note / Key Relevant Experience</label>
                    <textarea
                      rows={3}
                      value={applicantNote}
                      onChange={(e) => setApplicantNote(e.target.value)}
                      placeholder="Highlight your key achievements and why you want to join Suffix IT..."
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Job Application
                  </button>
                </form>
              )}
            </div>
          )}

          {/* CONSULTATION POPUP VIEW */}
          {consultationOpen && !product && !service && !careerJob && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900">
                  Schedule Enterprise Consultation
                </h3>
                <p className="text-xs text-slate-600">
                  Connect with our Chief Architect at Suffix IT Dhaka headquarters.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="font-semibold text-slate-800">Direct Office Contacts:</div>
                <div className="text-slate-600">
                  📍 {companyData.address.full}
                </div>
                <div className="text-slate-600">
                  📞 <span className="font-mono font-bold text-slate-900">{companyData.phone}</span>
                </div>
                <div className="text-slate-600">
                  ✉️ <span className="font-bold text-blue-700">{companyData.email}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>Go to Inquiry Form</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <div className="text-slate-500 font-medium">
            {companyData.address.area}, Dhaka-1212
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
