import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-slate-50 text-center">
      <div className="max-w-md space-y-5">
        <div className="text-6xl font-extrabold text-blue-700 font-mono">
          404
        </div>
        <h1 className="text-2xl font-bold text-slate-900">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          The requested system route does not exist or has been relocated.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
