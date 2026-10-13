import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { companyData } from '../data/company';
import aboutTeamImg from '../media/about/1.jpg';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. SIGNATURE Suffix IT WAVE BANNER (From BannerWithContent.js) */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white pt-20 pb-28 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About Us
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto font-normal">
            Exporting quality software worldwide since 2017. Total communication and information architectures for enterprise operations.
          </p>
          <div className="pt-2">
            <a href="#whoWeAre" className="inline-block animate-bounce text-white/80 hover:text-white">
              <ChevronDown className="w-8 h-8 mx-auto" />
            </a>
          </div>
        </div>

        {/* Parallax Wave SVG from original BannerWithContent.js */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            className="w-full h-12 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="opacity-80">
              <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
              <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </section>

      {/* 2. CORPORATE HISTORY & WHO WE ARE (From AboutContent.js) */}
      <section id="whoWeAre" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Our History
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Who we are?
              </h2>
            </div>

            <p className="text-base text-slate-700 leading-relaxed font-normal text-justify">
              {companyData.history}
            </p>

            {/* Vision Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-base">
                <Compass className="w-5 h-5" />
                <h3>Vision</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {companyData.vision}
              </p>
            </div>

            {/* Mission Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-base">
                <Target className="w-5 h-5" />
                <h3>Mission</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {companyData.mission}
              </p>
            </div>
          </div>

          {/* Right Image: Original 1.jpg */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl max-w-md w-full">
              <img
                src={aboutTeamImg}
                alt="Suffix IT Software Operations"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-slate-900 text-white text-xs">
                <div className="font-bold text-blue-400">Suffix IT Solutions Ltd.</div>
                <p className="text-slate-300 text-[11px] mt-0.5">
                  Dhaka Engineering Headquarters · Rupayan Millennium Square (9A)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY MILESTONES */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
              <div className="text-3xl font-extrabold text-blue-700 font-mono">2017</div>
              <div className="text-xs text-slate-600 font-medium">Year Established</div>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
              <div className="text-3xl font-extrabold text-blue-700 font-mono">150+</div>
              <div className="text-xs text-slate-600 font-medium">Enterprise Clients</div>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
              <div className="text-3xl font-extrabold text-blue-700 font-mono">25+</div>
              <div className="text-xs text-slate-600 font-medium">Software Products</div>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
              <div className="text-3xl font-extrabold text-emerald-600 font-mono">99.98%</div>
              <div className="text-xs text-slate-600 font-medium">System Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Let's Collaborate On Your Next Project
          </h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Our engineers and consultants in Dhaka are ready to help you architect and deploy your systems.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="px-8 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <span>Get in Touch with Suffix IT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
