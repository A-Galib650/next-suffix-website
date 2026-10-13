import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import suffixLogoWhite from '../assets/img/Suffix-Logo-white.png';
import bacco from '../assets/img/bacco.png';
import cisco from '../assets/img/cisco.png';
import fort from '../assets/img/fort.png';
import basis from '../assets/img/basis.png';
import cer1 from '../assets/img/certificate (1).png';
import cer2 from '../assets/img/certificate (2).png';
import iso20000 from '../assets/img/ISO-20000-1-2018-Standards-Logo-768x768.png';
import sophos from '../assets/img/SOPHOS_Cybersecurity_Logo.png';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-3 space-y-5">
            <Link to="/">
              <img
                src={suffixLogoWhite}
                alt="Suffix IT Logo"
                className="h-10 w-auto object-contain hover:-translate-y-0.5 transition-transform"
              />
            </Link>
            <p className="text-sm text-blue-100/90 leading-relaxed font-normal">
              We maintain strategic partnerships with multiple organizations in Bangladesh and worldwide, working together to deliver high-quality solutions and long-term value.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/suffixworld/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center text-sm transition-colors shadow-xs"
                aria-label="Facebook"
              >
                <span className="font-bold text-xs">f</span>
              </a>
              <a
                href="https://www.linkedin.com/company/suffix-it-limited/mycompany/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-blue-700 hover:bg-blue-600 text-white flex items-center justify-center text-sm transition-colors shadow-xs"
                aria-label="LinkedIn"
              >
                <span className="font-bold text-xs">in</span>
              </a>
            </div>
          </div>

          {/* Column 2: Contact Us */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-blue-600 pb-2 inline-block">
              CONTACT US
            </h3>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Cha-70,70/A, Rupayan Millennium Square (9A), Progoti Sharoni, North Badda, Gulshan, Dhaka-1212.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:info@suffixit.com" className="hover:text-blue-300 transition-colors">
                  info@suffixit.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+8801958424000" className="hover:text-blue-300 transition-colors font-mono">
                  +88 01958 424000
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-blue-600 pb-2 inline-block">
              QUICK LINKS
            </h3>
            <nav className="flex flex-col space-y-2.5 text-xs">
              <Link to="/about" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all">
                About Us
              </Link>
              <Link to="/career" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all">
                Career
              </Link>
              <Link to="/contact" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all">
                Contact Us
              </Link>
              <Link to="/astha-policy" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all">
                Privacy Policy (Astha)
              </Link>
            </nav>
          </div>

          {/* Column 4: Certifications & Partnerships Matrix */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-blue-600 pb-2 inline-block">
              CERTIFICATIONS & PARTNERS
            </h3>
            <div className="space-y-3 pt-1">
              {/* Row 1: ISO Standards */}
              <div className="grid grid-cols-3 gap-2 items-center bg-white/5 p-2 rounded-xl border border-white/10">
                <div className="flex items-center justify-center p-1">
                  <img src={cer1} alt="ISO 9001" className="h-10 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center p-1">
                  <img src={cer2} alt="ISO 27001" className="h-10 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center p-1">
                  <img src={iso20000} alt="ISO 20000" className="h-10 w-auto object-contain" />
                </div>
              </div>

              {/* Row 2: BASIS & BACCO */}
              <div className="grid grid-cols-2 gap-2 items-center bg-white/5 p-2 rounded-xl border border-white/10">
                <div className="flex items-center justify-center p-1">
                  <img src={basis} alt="BASIS" className="h-7 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center p-1">
                  <img src={bacco} alt="BACCO" className="h-7 w-auto object-contain" />
                </div>
              </div>

              {/* Row 3: Cisco, Fortinet, Sophos */}
              <div className="grid grid-cols-3 gap-2 items-center bg-white/5 p-2 rounded-xl border border-white/10">
                <div className="flex items-center justify-center p-1">
                  <img src={cisco} alt="Cisco" className="h-6 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center p-1">
                  <img src={fort} alt="Fortinet" className="h-6 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center p-1">
                  <img src={sophos} alt="Sophos" className="h-5 w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 text-center text-xs text-slate-500">
          <p>
            © {currentYear} All Rights Reserved by{' '}
            <span className="text-blue-400 font-semibold">Suffix IT Limited</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
