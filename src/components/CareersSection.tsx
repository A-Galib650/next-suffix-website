import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, ChevronDown, ChevronUp, ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { careersData, CareerJob } from '../data/careers';
import { companyData } from '../data/company';

interface CareersSectionProps {
  onApplyJob: (job: CareerJob) => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ onApplyJob }) => {
  const [expandedJobId, setExpandedJobId] = useState<number | null>(1); // Default expand Head of BD

  const toggleJob = (id: number) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <section id="careers" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-bold tracking-wider uppercase text-blue-700">
              Career & Talent Opportunities
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Build Scalable Enterprise Systems with an Ambitious Engineering Team
            </h2>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              We look for passionate engineers, system architects, and business leaders who take pride in crafting resilient software that powers real enterprises.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 text-xs space-y-1 shrink-0">
            <div className="text-slate-500 font-medium">Direct Resume Submissions:</div>
            <a
              href={`mailto:${companyData.careerEmail}`}
              className="font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{companyData.careerEmail}</span>
            </a>
          </div>
        </div>

        {/* Job Listings List */}
        <div className="mt-10 space-y-4">
          {careersData.map((job) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <div
                key={job.id}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300"
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleJob(job.id)}
                  className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-blue-700">
                        {job.department}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="text-xs text-slate-500 font-medium">
                        {job.jobType}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-blue-700 transition-colors">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Exp: {job.experience}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onApplyJob(job);
                      }}
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
                    >
                      Apply Now
                    </button>
                    <div className="p-2 text-slate-400 hover:text-slate-600">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-6">
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {job.overview}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                      {/* Responsibilities */}
                      <div className="space-y-2">
                        <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2 text-slate-600">
                          {job.responsibilities.map((res, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-blue-600 font-bold mt-0.5">·</span>
                              <span>{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div className="space-y-2">
                        <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                          Candidate Requirements
                        </h4>
                        <ul className="space-y-2 text-slate-600">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-blue-600 font-bold mt-0.5">·</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* What We Offer */}
                    <div className="pt-3 border-t border-slate-200/60 space-y-2">
                      <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                        What We Offer
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {job.benefits.map((ben, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                            <span>{ben}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => onApplyJob(job)}
                        className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                      >
                        <span>Submit Application for {job.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
