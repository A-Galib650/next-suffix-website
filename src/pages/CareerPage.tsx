import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, ArrowRight, Mail, Briefcase } from 'lucide-react';
import { careersData } from '../data/careers';
import { companyData } from '../data/company';
import mockupImg from '../media/banner/banner-nine.png';

export const CareerPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Header Banner matching Career.js */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white pt-16 pb-24 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-blue-300">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Career</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Find Your Career at Suffix IT
          </h1>
          <p className="text-base text-blue-100 max-w-xl mx-auto font-normal">
            Join a forward-thinking engineering and business team building cutting-edge software and industrial solutions.
          </p>

          <div className="pt-4 flex justify-center">
            <img
              src={mockupImg}
              alt="Career Mockup"
              className="max-h-60 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 2. Open Positions */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Current Job Openings</h2>
            <p className="text-xs text-slate-500">
              Explore opportunities in Engineering, Architecture, and Business Growth.
            </p>
          </div>
          <div className="text-xs text-slate-700">
            Direct Resume Submissions: <a href={`mailto:${companyData.careerEmail}`} className="font-bold text-blue-700 underline">{companyData.careerEmail}</a>
          </div>
        </div>

        <div className="space-y-4">
          {careersData.map((job) => (
            <div
              key={job.id}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                    {job.department}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-600 font-medium">{job.jobType}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  <Link to={`/career-detail/${job.id}`} className="hover:text-blue-700 transition-colors">
                    {job.title}
                  </Link>
                </h3>

                <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                  {job.overview}
                </p>

                <div className="flex flex-wrap items-center gap-5 text-xs text-slate-500 pt-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Experience: {job.experience}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-slate-400" />
                    <span>Compensation: {job.salary}</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0">
                <Link
                  to={`/career-detail/${job.id}`}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap shadow-xs"
                >
                  <span>View Details & Apply</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
