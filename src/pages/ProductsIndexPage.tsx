import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { productsData } from '../data/products';

export const ProductsIndexPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = [
    'All',
    'Enterprise ERP',
    'Telecom & Billing',
    'Industrial IoT',
    'Operational Software',
  ];

  const filtered =
    selectedCat === 'All'
      ? productsData
      : productsData.filter((p) => p.category === selectedCat);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Products</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Enterprise Software Catalog
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal">
            Scalable, battle-tested software products powering ERP, telecoms, industrial automation, and retail operations.
          </p>
        </div>
      </section>

      {/* Main Catalog */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/70 rounded-xl max-w-fit mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((prod) => (
              <div
                key={prod.id}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>{prod.category}</span>
                    <span className="font-mono text-blue-700 font-semibold">Production Ready</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    <Link to={`/product/${prod.slug}`}>{prod.name}</Link>
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Highlighted Subsystems
                    </div>
                    {prod.modules.slice(0, 3).map((mod, i) => (
                      <div key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">·</span>
                        <span className="truncate">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">{prod.specs.deployment}</span>
                  <Link
                    to={`/product/${prod.slug}`}
                    className="text-xs font-bold text-blue-700 group-hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>View Product Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
