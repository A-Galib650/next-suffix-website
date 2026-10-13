import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Cpu, Activity, Zap } from 'lucide-react';
import logoImg from '../assets/img/Suffix-Logo.png';
import featureProductImg from '../assets/img/try2.png';
import featureServiceImg from '../assets/img/try5.png';
import featureIotImg from '../assets/img/try8.png';
import { productsData } from '../data/products';
import { servicesData } from '../data/services';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [iotOpen, setIotOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setIotOpen(false);
    setServicesOpen(false);
  };

  const iotLinks = [
    {
      to: '/product/transformer-monitoring',
      title: 'Smart Transformer Monitoring',
      desc: 'Real-time telemetry, oil temperature & grid surge alerts',
      icon: 'Activity',
    },
    {
      to: '/service/Industrial-Monitoring',
      title: 'Industrial Energy Monitoring',
      desc: 'Power factor, load balancing & SCADA telemetry',
      icon: 'Zap',
    },
    {
      to: '/service/iot',
      title: 'Automation & IoT',
      desc: 'Edge gateway firmware, Modbus, MQTT sensor networks',
      icon: 'Cpu',
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center shrink-0">
            <img
              src={logoImg}
              alt="Suffix IT Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                `transition-colors py-1 ${
                  isActive ? 'text-blue-700 font-bold' : 'hover:text-blue-700'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `transition-colors py-1 ${
                  isActive ? 'text-blue-700 font-bold' : 'hover:text-blue-700'
                }`
              }
            >
              About
            </NavLink>

            {/* Products Dropdown with try2.png */}
            <div
              className="relative"
              onMouseEnter={() => {
                setProductsOpen(true);
                setIotOpen(false);
                setServicesOpen(false);
              }}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer ${
                  location.pathname.startsWith('/product') && !location.pathname.includes('transformer')
                    ? 'text-blue-700 font-bold'
                    : 'hover:text-blue-700'
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 w-[580px] p-4 bg-white border border-slate-200 rounded-2xl shadow-2xl grid grid-cols-12 gap-4 animate-in fade-in duration-150">
                  <div className="col-span-5 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex flex-col justify-between p-2">
                    <img
                      src={featureProductImg}
                      alt="Featured Products"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <div className="p-2 space-y-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                        Enterprise Platforms
                      </div>
                      <div className="text-xs font-semibold text-slate-800">
                        Rupantor ERP, Payroll & Billing
                      </div>
                    </div>
                  </div>

                  <div className="col-span-7 max-h-72 overflow-y-auto space-y-1 pr-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1">
                      Ready Systems
                    </div>
                    {productsData.map((prod) => (
                      <Link
                        key={prod.id}
                        to={`/product/${prod.slug}`}
                        onClick={closeMenu}
                        className="block px-2.5 py-1.5 rounded-lg text-xs hover:bg-blue-50/70 text-slate-700 hover:text-blue-700 transition-colors"
                      >
                        <div className="font-bold">{prod.name}</div>
                        <div className="text-[11px] text-slate-500 truncate">{prod.subtitle}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IoT Dedicated Dropdown with try8.png */}
            <div
              className="relative"
              onMouseEnter={() => {
                setIotOpen(true);
                setProductsOpen(false);
                setServicesOpen(false);
              }}
              onMouseLeave={() => setIotOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer ${
                  location.pathname.includes('iot') ||
                  location.pathname.includes('transformer') ||
                  location.pathname.includes('Industrial-Monitoring')
                    ? 'text-blue-700 font-bold'
                    : 'hover:text-blue-700'
                }`}
              >
                <span>IoT</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {iotOpen && (
                <div className="absolute top-full -left-16 w-[520px] p-4 bg-white border border-slate-200 rounded-2xl shadow-2xl grid grid-cols-12 gap-4 animate-in fade-in duration-150">
                  <div className="col-span-5 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex flex-col justify-between p-2">
                    <img
                      src={featureIotImg}
                      alt="Industrial IoT Telemetry"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <div className="p-2 space-y-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                        Industrial IoT
                      </div>
                      <div className="text-xs font-semibold text-slate-800">
                        Smart Grid & Sensor Networks
                      </div>
                    </div>
                  </div>

                  <div className="col-span-7 space-y-2 py-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2">
                      Industrial Solutions
                    </div>
                    {iotLinks.map((item, i) => (
                      <Link
                        key={i}
                        to={item.to}
                        onClick={closeMenu}
                        className="block p-2 rounded-lg text-xs hover:bg-blue-50/70 text-slate-800 hover:text-blue-700 transition-colors"
                      >
                        <div className="font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                          <span>{item.title}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown with try5.png */}
            <div
              className="relative"
              onMouseEnter={() => {
                setServicesOpen(true);
                setProductsOpen(false);
                setIotOpen(false);
              }}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer ${
                  location.pathname.startsWith('/service') &&
                  !location.pathname.includes('iot') &&
                  !location.pathname.includes('Industrial-Monitoring')
                    ? 'text-blue-700 font-bold'
                    : 'hover:text-blue-700'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-[580px] p-4 bg-white border border-slate-200 rounded-2xl shadow-2xl grid grid-cols-12 gap-4 animate-in fade-in duration-150">
                  <div className="col-span-5 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex flex-col justify-between p-2">
                    <img
                      src={featureServiceImg}
                      alt="Featured Services"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <div className="p-2 space-y-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                        Capabilities
                      </div>
                      <div className="text-xs font-semibold text-slate-800">
                        Consulting & Architecture
                      </div>
                    </div>
                  </div>

                  <div className="col-span-7 max-h-72 overflow-y-auto space-y-1 pr-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1">
                      Our Services
                    </div>
                    {servicesData.map((svc) => (
                      <Link
                        key={svc.id}
                        to={`/service/${svc.slug}`}
                        onClick={closeMenu}
                        className="block px-2.5 py-1.5 rounded-lg text-xs hover:bg-blue-50/70 text-slate-700 hover:text-blue-700 transition-colors"
                      >
                        <div className="font-bold">{svc.name}</div>
                        <div className="text-[11px] text-slate-500 truncate">{svc.tagline}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/career"
              onClick={closeMenu}
              className={({ isActive }) =>
                `transition-colors py-1 ${
                  isActive ? 'text-blue-700 font-bold' : 'hover:text-blue-700'
                }`
              }
            >
              Career
            </NavLink>
          </nav>

          {/* Right Action: Contact Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-700"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl">
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg"
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            onClick={closeMenu}
            className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg"
          >
            Products
          </NavLink>
          <div className="pl-4 py-1 space-y-1 border-l-2 border-blue-200">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">IoT Solutions</div>
            {iotLinks.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.to}
                onClick={closeMenu}
                className="block text-xs font-medium text-slate-600 hover:text-blue-700 py-1"
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          <NavLink
            to="/services"
            onClick={closeMenu}
            className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg"
          >
            Services
          </NavLink>
          <NavLink
            to="/career"
            onClick={closeMenu}
            className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg"
          >
            Career
          </NavLink>
          <div className="pt-2 border-t border-slate-100">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="w-full py-2.5 text-center text-sm font-bold text-white bg-blue-600 rounded-lg block"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
