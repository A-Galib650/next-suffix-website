import React, { useState } from 'react';
import { ArrowRight, Layers, CheckCircle2, ChevronRight, Activity, Terminal } from 'lucide-react';
import { productsData, ProductItem } from '../data/products';

interface ProductsShowcaseProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({ onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Enterprise ERP',
    'Telecom & Billing',
    'Industrial IoT',
    'Operational Software',
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-bold tracking-wider uppercase text-blue-700">
            Proprietary Software Systems
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Battle-Tested Enterprise Platforms Built for Industrial Scale
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Every product is engineered with modular architecture, strict data integrity, and high-throughput transaction pipelines to solve real operational bottlenecks.
          </p>
        </div>

        {/* Category Filter Tabs (Functional Button Segmented Control) */}
        <div className="mt-8 flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-xl max-w-fit">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Featured Showcase Card (Rupantor ERP) if 'All' or 'Enterprise ERP' */}
        {(selectedCategory === 'All' || selectedCategory === 'Enterprise ERP') && (
          <div className="mt-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white overflow-hidden border border-slate-800 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-12">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
                  <span>Flagship Platform</span>
                  <span aria-hidden="true">·</span>
                  <span>Rupantor ERP Suite</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Unified ERP for Manufacturing, Supply Chain & Financial Governance
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Rupantor ERP bridges information silos across corporate departments. Built with modular scalability, it offers real-time inventory tracking, multi-tier procurement approvals, automated ledger postings, and executive Business Intelligence dashboards.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>GAAP & IFRS Compliant General Ledger</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Multi-Warehouse Stock Centralization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Bill of Materials (BOM) Production Routing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Granular Role-Based Access Control (RBAC)</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onSelectProduct(productsData[0])}
                    className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <span>Inspect ERP Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <div className="text-xs font-mono tabular-nums text-slate-400">
                    38% Reduction in Procurement Cycles
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-slate-800 shadow-md">
                  <img
                    src="/src/assets/images/product_erp_suite_1791863691094.jpg"
                    alt="Rupantor ERP Platform Showcase"
                    className="w-full h-64 sm:h-72 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Unboxed Metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>{product.category}</span>
                    <span className="font-mono text-blue-700 font-semibold">
                      v{product.id}.0
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  {/* Modules preview */}
                  <div className="pt-2 border-t border-slate-200/80 space-y-1.5">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Core Modules
                    </div>
                    {product.modules.slice(0, 3).map((mod, i) => (
                      <div key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">·</span>
                        <span className="line-clamp-1">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div className="text-[11px] font-medium text-slate-500">
                    {product.specs.deployment}
                  </div>
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="text-xs font-bold text-blue-700 group-hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Specs</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
