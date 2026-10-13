/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SeoStructuredData } from './components/SeoStructuredData';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CareerPage } from './pages/CareerPage';
import { CareerDetailPage } from './pages/CareerDetailPage';
import { ProductsIndexPage } from './pages/ProductsIndexPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { TopCompaniesPage } from './pages/TopCompaniesPage';
import { AsthaPolicyPage } from './pages/AsthaPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top upon navigation
function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnRoute />
      <SeoStructuredData />

      <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/career-detail/:id" element={<CareerDetailPage />} />

            {/* Product Routes */}
            <Route path="/products" element={<ProductsIndexPage />} />
            <Route path="/product/:slug" element={<ProductDetailPage />} />

            {/* Service Routes */}
            <Route path="/services" element={<ServicesIndexPage />} />
            <Route path="/service/:slug" element={<ServiceDetailPage />} />

            {/* Industry Ranking Route */}
            <Route
              path="/top-10-software-company-in-bangladesh"
              element={<TopCompaniesPage />}
            />

            {/* Privacy Policy */}
            <Route path="/astha-policy" element={<AsthaPolicyPage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
