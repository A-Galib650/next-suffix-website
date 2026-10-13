import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { companyData } from '../data/company';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Rupantor ERP Suite',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Contact Suffix IT Solutions
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal">
            Request an enterprise technical proposal, schedule a consultation, or visit our headquarters in Gulshan, Dhaka.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Office Coordinates */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Headquarters & Inquiries
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Dhaka Office Coordinates
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our engineering center and business development team are based in North Badda, Gulshan. We welcome in-person and virtual meetings.
                </p>
              </div>

              <div className="space-y-6">
                {/* Physical Location */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Office Address
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      {companyData.address.building} ({companyData.address.suite})
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed">
                      {companyData.address.street}, {companyData.address.area}, {companyData.address.city}, {companyData.address.country}
                    </div>
                  </div>
                </div>

                {/* Telephone */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Phone Number
                    </div>
                    <a
                      href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-bold text-slate-900 hover:text-blue-700 font-mono"
                    >
                      {companyData.phone}
                    </a>
                    <div className="text-xs text-slate-500">
                      Office Hours: Sunday – Thursday, 9:00 AM – 6:00 PM BST
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Electronic Mail
                    </div>
                    <a
                      href={`mailto:${companyData.email}`}
                      className="text-sm font-bold text-blue-700 hover:underline"
                    >
                      {companyData.email}
                    </a>
                    <div className="text-xs text-slate-500">
                      HR / Careers: <span className="font-medium text-slate-700">{companyData.careerEmail}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-blue-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Enterprise Security & NDA</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  We respect corporate privacy. All enterprise RFP specifications and technical disclosures are protected by mutual non-disclosure agreements.
                </p>
              </div>
            </div>

            {/* Right: Submission Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-lg">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Thank You for Contacting Suffix IT
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Your technical inquiry has been forwarded to our Chief Architect and Business Solutions team. We will respond within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          service: 'Rupantor ERP Suite',
                          message: '',
                        });
                      }}
                      className="mt-4 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-slate-900">
                        Request Proposal / Consultation
                      </h3>
                      <p className="text-xs text-slate-500">
                        Please provide project details and requirements below.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Full Name <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Corporate Email <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@organization.com"
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Contact Phone <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+880 1XXXXXXXXX"
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors font-mono"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company Ltd."
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Primary Area of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                      >
                        <option value="Rupantor ERP Suite">Rupantor ERP Suite</option>
                        <option value="Suffix Payroll & Tax System">Suffix Payroll & Tax System</option>
                        <option value="Smart Transformer IoT Telemetry">Smart Transformer IoT Telemetry</option>
                        <option value="Interconnect Billing Platform">Interconnect Billing Platform</option>
                        <option value="Field Force Management">Field Force Management</option>
                        <option value="Omnichannel E-Commerce">Omnichannel E-Commerce</option>
                        <option value="Cloud Hotel Management & PMS">Cloud Hotel Management & PMS</option>
                        <option value="IT Infrastructure & Cloud Hosting">IT Infrastructure & Cloud Hosting</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Requirements & Scope <span className="text-rose-600">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail your operational requirements, timeline, or number of system users..."
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 cursor-pointer"
                    >
                      <span>{loading ? 'Submitting...' : 'Send Enterprise Request'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
