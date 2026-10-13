import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/company';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'ERP Consulting & Integration',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Coordinates & Headquarters */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-bold tracking-wider uppercase text-blue-400">
                Direct Communication & Consultation
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Let's Discuss Your Enterprise Architecture
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Connect directly with our solutions engineering team in Dhaka. We evaluate technical feasibility, project scope, and provide actionable architecture roadmaps.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Corporate Headquarters
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {companyData.address.building} ({companyData.address.suite})
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    {companyData.address.street}, {companyData.address.area}, {companyData.address.city}, {companyData.address.country}
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Direct Telephone
                  </div>
                  <a
                    href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors font-mono"
                  >
                    {companyData.phone}
                  </a>
                  <div className="text-xs text-slate-400">
                    Sunday – Thursday, 9:00 AM – 6:00 PM BST
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Official Inquiries
                  </div>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {companyData.email}
                  </a>
                  <div className="text-xs text-slate-400">
                    Recruitment: <span className="text-slate-300">{companyData.careerEmail}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Non-Disclosure Agreement (NDA) Protected</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                All client project details and corporate architectures shared with Suffix IT are treated under strict commercial confidentiality.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Capture & RFQ Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-800/90 border border-slate-700 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for contacting Suffix IT Solutions. Our technical team will review your specifications and reach out within 1 business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: 'ERP Consulting & Integration',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">
                      Request Technical Proposal or RFQ
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill out the form below and an enterprise architect will contact you.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Asif Ahmed"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-900/90 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Work Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-900/90 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Phone Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+880 17XX XXXXXX"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-900/90 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Organization / Entity
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company or Group Name"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-900/90 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Solution / Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-900/90 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Rupantor ERP Suite">Rupantor ERP Suite</option>
                      <option value="ERP Consulting & Integration">ERP Consulting & Integration</option>
                      <option value="Industrial IoT & Energy Telemetry">Industrial IoT & Energy Telemetry</option>
                      <option value="Smart Transformer Monitoring">Smart Transformer Monitoring</option>
                      <option value="Interconnect Billing Platform">Interconnect Billing Platform</option>
                      <option value="Suffix Payroll System">Suffix Payroll System</option>
                      <option value="Web & E-Commerce Solutions">Web & E-Commerce Solutions</option>
                      <option value="Custom Software Applications">Custom Software Applications</option>
                      <option value="IT Infrastructure & Cloud Hosting">IT Infrastructure & Cloud Hosting</option>
                      <option value="Hospital Management System">Hospital Management System</option>
                      <option value="Field Force Management">Field Force Management</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Project Scope & Timeline <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your requirements, expected users, integration needs, or timeline..."
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-900/90 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 text-xs uppercase tracking-wider font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.99] rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                  >
                    <span>{loading ? 'Transmitting Inquiries...' : 'Submit Technical Request'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
