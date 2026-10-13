import React from 'react';
import { Target, Compass, Award, Shield, CheckCircle2, MapPin, Building, Calendar } from 'lucide-react';
import { companyData } from '../data/company';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story, Vision & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold tracking-wider uppercase text-blue-700">
              Corporate Heritage & Purpose
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Engineering Mission-Critical Solutions for Global Enterprise Needs
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {companyData.history}
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                  <Compass className="w-4 h-4 shrink-0" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {companyData.vision}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                  <Target className="w-4 h-4 shrink-0" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {companyData.mission}
                </p>
              </div>
            </div>

            {/* Corporate Benchmarks */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-1">
                <div className="text-slate-400 font-medium">Headquarters</div>
                <div className="font-semibold text-slate-800">Gulshan, Dhaka</div>
              </div>
              <div className="space-y-1">
                <div className="text-slate-400 font-medium">Established</div>
                <div className="font-semibold text-slate-800">{companyData.establishedDate}</div>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <div className="text-slate-400 font-medium">Enterprise Track Record</div>
                <div className="font-semibold text-slate-800">{companyData.experienceYears}+ Continuous Years</div>
              </div>
            </div>
          </div>

          {/* Right Column: Office Imagery & Key Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src="/src/assets/images/company_team_consulting_1791863692664.jpg"
                alt="Suffix IT Software Consulting and Leadership Team"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-slate-900 text-white text-xs space-y-1">
                <div className="font-semibold text-blue-300">
                  Engineering Leadership & Consultation
                </div>
                <p className="text-slate-400 text-[11px]">
                  Rupayan Millennium Square, Suite 9A, Progoti Sharoni, Dhaka.
                </p>
              </div>
            </div>

            {/* Trust Pillars */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Core Engineering Commitments
              </div>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>Strict IP protection and client data confidentiality standards</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>Clean architecture with thorough documentation and knowledge transfer</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>Dedicated post-deployment SLA support with sub-hour incident response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
