import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, ArrowLeft, CheckCircle2, Send, Check } from 'lucide-react';
import { careersData } from '../data/careers';
import { companyData } from '../data/company';

export const CareerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const jobId = Number(id) || 1;
  const job = careersData.find((j) => j.id === jobId) || careersData[0];

  const [applied, setApplied] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantNote, setApplicantNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-14 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/career" className="hover:text-white">Careers</Link>
            <span>/</span>
            <span className="text-slate-300">{job.title}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                {job.department} · {job.jobType}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                {job.title}
              </h1>
            </div>
            <Link
              to="/career"
              className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 self-start sm:self-center"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Open Positions</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-3 border-t border-slate-800">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>Experience: {job.experience}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-blue-400" />
              <span>Salary: {job.salary}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Job Details */}
            <div className="lg:col-span-7 space-y-8">
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider text-xs">
                  Role Overview
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {job.overview}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Key Responsibilities
                </h2>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {job.responsibilities.map((res, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span className="leading-relaxed">{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Qualifications & Skills
                </h2>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  What Suffix IT Offers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  {job.benefits.map((ben, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Direct Application Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 p-8 rounded-2xl bg-white border border-slate-200 shadow-lg space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    Apply for this Position
                  </h3>
                  <p className="text-xs text-slate-500">
                    Submit your application directly to Suffix IT recruitment.
                  </p>
                </div>

                {applied ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      Application Submitted Successfully
                    </h4>
                    <p className="text-xs text-slate-600">
                      We have logged your application for <span className="font-semibold text-slate-900">{job.title}</span>. Our HR team will reach out after review.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
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
                        placeholder="email@domain.com"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>

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
                      <label className="font-semibold text-slate-700">Portfolio / LinkedIn Link</label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700">Cover Note & Summary</label>
                      <textarea
                        rows={3}
                        value={applicantNote}
                        onChange={(e) => setApplicantNote(e.target.value)}
                        placeholder="Describe your relevant enterprise experience..."
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Submit Application</span>
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
