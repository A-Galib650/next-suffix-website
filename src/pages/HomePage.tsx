import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, X, ArrowRight, CheckCircle2, ChevronRight, Phone, MessageSquare, PhoneCall, ExternalLink, Quote } from 'lucide-react';

// Images from original repo
import bannerImg from '../assets/img/banner_image.png';
import bannerDot from '../assets/img/banner_dot.png';
import fieldForceSvg from '../media/download/fieldForce.svg.png';
import fieldForceImg from '../media/download/field-force.png';

// Company SVGs
import teamSvg from '../media/company/team.svg';
import softwareSvg from '../media/company/software.svg';
import webSvg from '../media/company/web.svg';

// Call Center GIFs
import callService1 from '../media/callcenter/service1.gif';
import callService2 from '../media/callcenter/service2.gif';
import callService3 from '../media/callcenter/service3.gif';

// Testimonial Client Photos
import moyeenPhoto from '../media/testimonial/1.jpg';
import rafiquePhoto from '../media/testimonial/2.jpg';
import ranaPhoto from '../media/testimonial/3.jpg';

// Client Brands
import biwtaLogo from '../media/brand/biwta-logo.png';
import wasaLogo from '../media/brand/WasaLogo.png';
import bepzaLogo from '../media/brand/bepza.jpg';
import sqLogo from '../media/brand/sq.png';
import apexLogo from '../media/brand/apex.png';
import visionLogo from '../media/brand/vision.png';
import japanLogo from '../media/brand/japan.png';
import passLogo from '../media/brand/pass.png';
import brand1 from '../media/brand/1.png';
import brand2 from '../media/brand/2.png';
import brand3 from '../media/brand/3.png';
import brand4 from '../media/brand/4.png';
import brand5 from '../media/brand/5.png';
import brand7 from '../media/brand/7.png';
import brand8 from '../media/brand/8.png';
import brand13 from '../media/brand/13.png';

// Product SVGs
import erpSvg from '../media/products/erp.svg';
import payrollSvg from '../media/products/payroll.svg';
import billingSvg from '../media/products/billing.svg';
import eCommerceSvg from '../media/products/eCommerce.svg';
import fundSvg from '../media/products/fund.svg';
import hotelSvg from '../media/products/hotel.svg';
import inventorySvg from '../media/products/inventory.svg';
import locationSvg from '../media/products/location.svg';

import { servicesData } from '../data/services';
import { productsData } from '../data/products';
import { companyData } from '../data/company';

export const HomePage: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Field force checklist items from FieldManagementData.js
  const fieldForceList = [
    'Invoice and Payment',
    'Live Tracking',
    'Task Management',
    'Attendance Management',
    'Expense Management',
    'Chat and Collaboration',
    'Offline data synchronization',
  ];

  // Testimonials from Testimonial.js
  const testimonials = [
    {
      title: 'Super Support!',
      quote:
        'SuffixIT- A reliable Partner has with great satisfaction been working with Suffixit since 2015. Suffix is always delivering honest, rock-solid work of good quality.',
      author: 'Md. Ahsanul Moyeen',
      designation: 'Senior Manager, CrossWorld Telecom Ltd.',
      photo: moyeenPhoto,
    },
    {
      title: 'Awesome Design',
      quote:
        'SuffixIT brings all together software platform. It measures, analyzes and improves customer satisfaction. Leading company for Customer Support & Service Software.',
      author: 'Kazi Anowarul Rafique',
      designation: 'Head of Operations, New Generation Telecom Ltd.',
      photo: rafiquePhoto,
    },
    {
      title: 'Great Flexibility',
      quote:
        'SuffixIT Essentials makes it easy for small businesses and startups to build stronger customer relationships with an all-in-one sales and support solution that is easy to use.',
      author: 'Md. Ashif Imran Rana',
      designation: 'Chief Technical Officer, Mother Telecommunication',
      photo: ranaPhoto,
    },
  ];

  // Client Brands from ClientBrandData.js
  const clientBrands = [
    { name: 'BIWTA', logo: biwtaLogo },
    { name: 'Dhaka WASA', logo: wasaLogo },
    { name: 'BEPZA', logo: bepzaLogo },
    { name: 'SQ Group', logo: sqLogo },
    { name: 'Apex', logo: apexLogo },
    { name: 'Vision', logo: visionLogo },
    { name: 'Japan', logo: japanLogo },
    { name: 'Pass', logo: passLogo },
    { name: 'Client 1', logo: brand1 },
    { name: 'Client 2', logo: brand2 },
    { name: 'Client 3', logo: brand3 },
    { name: 'Client 4', logo: brand4 },
    { name: 'Client 5', logo: brand5 },
    { name: 'Client 7', logo: brand7 },
    { name: 'Client 8', logo: brand8 },
    { name: 'Client 13', logo: brand13 },
  ];

  // Product SVG mapping
  const productSvgMap: Record<string, string> = {
    'rupantor-erp': erpSvg,
    'payroll-system': payrollSvg,
    'interconnect-billing': billingSvg,
    'e-commerce': eCommerceSvg,
    'provident-fund': fundSvg,
    'hotel-booking-system': hotelSvg,
    'rupantor-inventory': inventorySvg,
    'field-force-management': locationSvg,
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO SECTION (From HeroSection.js) */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <span>Enterprise Technology Solutions</span>
                <span aria-hidden="true">·</span>
                <span>Established 2017</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
                We care about the IT Solution you need
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Suffix IT provides best and prominent Software & Hardware solutions to ensure your business
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#WhyChooseUs"
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Let's Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Video Play Button */}
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="px-5 py-3 text-xs font-bold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors flex items-center gap-2.5 cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <span>Watch Corporate Video</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-400">
                <div>9+ Years in Software Industry</div>
                <div>150+ Enterprise Clients</div>
                <div className="col-span-2 sm:col-span-1">ISO Quality Compliant</div>
              </div>
            </div>

            {/* Right Column: Original Hero Banner Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative max-w-md w-full">
                <img
                  src={bannerImg}
                  alt="Suffix IT Solution"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
                <img
                  src={bannerDot}
                  alt="dot pattern"
                  className="absolute -bottom-6 -right-6 w-24 opacity-60 pointer-events-none hidden sm:block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between p-4 bg-slate-900 text-white">
                <span className="text-xs font-bold">Suffix IT Corporate Presentation</span>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/t9XYLboQdSg?autoplay=1"
                  title="Suffix IT YouTube player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 2. WHY CHOOSE US (From WhyChooseUs.js) */}
      <section id="WhyChooseUs" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Graphic from repo */}
            <div className="lg:col-span-6 flex justify-center">
              <img
                src={fieldForceSvg}
                alt="Why Choose Us"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Why Choose Us
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                We are working with <br />
                <span className="text-blue-700">{companyData.experienceYears}+ years experience</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Founded on July 1, 2017, Suffix IT delivers robust architectures designed to eliminate business friction. From enterprise ERP suites to telecommunications interconnect billing and industrial IoT monitoring.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm">Enterprise Delivery</div>
                  <p className="text-slate-600">Tailored systems that integrate directly into your workflow.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm">Dedicated SLA Support</div>
                  <p className="text-slate-600">24/7 technical monitoring and rapid incident resolution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR COMPANY (From OurCompany.js) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Our <span className="text-blue-700">Company</span>
            </h2>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              At Suffix IT, we develop innovative and creative products and services that provide total communication and information solutions. Satisfied clients around the globe bear testimony to the quality of our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center space-y-4 shadow-xs hover:shadow-md transition-shadow">
              <div className="h-44 flex items-center justify-center">
                <img src={teamSvg} alt="Team" className="max-h-36 object-contain" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Team Of Highly Experienced Professionals
              </h3>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center space-y-4 shadow-xs hover:shadow-md transition-shadow">
              <div className="h-44 flex items-center justify-center">
                <img src={softwareSvg} alt="Software" className="max-h-36 object-contain" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Working In Software Industry Since 2017
              </h3>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center space-y-4 shadow-xs hover:shadow-md transition-shadow">
              <div className="h-44 flex items-center justify-center">
                <img src={webSvg} alt="Big Vision" className="max-h-36 object-contain" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                We Dream Big and Win Together
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FIELD FORCE MANAGEMENT (From FieldForceManagement.js) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Featured Product System
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                We are working with <br />
                <span className="text-blue-700">Field Force Management</span>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Equip your distributed team with real-time field operations, automated GPS routing, attendance check-in, and offline order bookings.
              </p>

              {/* Exact Checklist Items from FieldManagementData.js */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {fieldForceList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/product/field-force-management"
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs"
                >
                  <span>View More Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Original Field Force Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <img
                src={fieldForceImg}
                alt="Field Force Management System"
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL CENTER SERVICE (From CallCenter.js) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Our <span className="text-blue-700">Call Center Service</span>
            </h2>
            <p className="text-base text-slate-600 font-normal">
              We never say no to anything! We are here for all your needs. All you have to do is tell.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Inbound Call */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center space-y-4 shadow-xs">
              <div className="h-32 flex items-center justify-center">
                <img src={callService1} alt="Inbound Call" className="max-h-24 object-contain" />
              </div>
              <h3 className="text-lg font-bold text-blue-700">
                Inbound Call
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated and hardworking agents who are working tirelessly to answer all queries about your company.
              </p>
            </div>

            {/* Service 2: Outbound Call */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center space-y-4 shadow-xs">
              <div className="h-32 flex items-center justify-center">
                <img src={callService2} alt="Outbound Call" className="max-h-24 object-contain" />
              </div>
              <h3 className="text-lg font-bold text-blue-700">
                Outbound Call
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Let customers know about your products/services via our charming agents.
              </p>
            </div>

            {/* Service 3: Live Chat Support */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center space-y-4 shadow-xs">
              <div className="h-32 flex items-center justify-center">
                <img src={callService3} alt="Live Chat Support" className="max-h-24 object-contain" />
              </div>
              <h3 className="text-lg font-bold text-blue-700">
                Live Chat Support
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Group of smart and charismatic agents are always online to provide live chat services.
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="http://suffixcallcenter.com/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs"
            >
              <span>More Info on Suffix Call Center</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. OUR SERVICES (From OurService.js) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Full-Lifecycle Practices
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                Our Services & Capabilities
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1.5"
            >
              <span>Explore All {servicesData.length} Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 6).map((service, index) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="font-bold text-blue-700">{String(index + 1).padStart(2, '0')}.</span>
                    <span className="font-sans text-[11px] text-slate-500">{service.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    <Link to={`/service/${service.slug}`} className="hover:text-blue-700">
                      {service.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">SLA Supported</span>
                  <Link
                    to={`/service/${service.slug}`}
                    className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR PRODUCTS (From OurProducts.js with original SVGs) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Proprietary Software Systems
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                Our Software Products
              </h2>
            </div>
            <Link
              to="/products"
              className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1.5"
            >
              <span>Explore All {productsData.length} Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsData.slice(0, 8).map((prod) => {
              const svgIcon = productSvgMap[prod.slug] || erpSvg;
              return (
                <div
                  key={prod.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 p-2.5 flex items-center justify-center">
                      <img src={svgIcon} alt={prod.name} className="w-full h-full object-contain" />
                    </div>

                    <h3 className="text-base font-bold text-slate-900">
                      <Link to={`/product/${prod.slug}`} className="hover:text-blue-700">
                        {prod.name}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">{prod.category}</span>
                    <Link
                      to={`/product/${prod.slug}`}
                      className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (From Testimonial.js) */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-white">
              What They Said!
            </h2>
            <p className="text-sm text-slate-300 font-normal">
              Customer satisfaction is our top priority. Client's positive feedback inspire and motivate our team and business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <Quote className="w-8 h-8 text-blue-400 opacity-60" />
                  <h3 className="text-lg font-bold text-white">
                    "{item.title}"
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-700">
                  <img
                    src={item.photo}
                    alt={item.author}
                    className="w-12 h-12 rounded-full object-cover border border-slate-600 shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.author}</h4>
                    <p className="text-[11px] text-slate-400">{item.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OUR HAPPY CLIENTS (From ClientBrand.js) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Our <span className="text-blue-700">Happy Clients</span>
            </h2>
            <p className="text-base text-slate-600 font-normal">
              We Work Only For The Best.
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 items-center">
            {clientBrands.map((brand, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:shadow-xs transition-all flex items-center justify-center h-20"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. QUICK CONTACT CALLOUT */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Accelerate Your Enterprise Software Needs?
          </h2>
          <p className="text-sm text-blue-100 max-w-lg mx-auto font-normal">
            Visit our Dhaka headquarters or contact our team for technical consultations and RFP submissions.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-blue-900 bg-white hover:bg-slate-100 rounded-xl transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <span>Connect with Suffix IT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
