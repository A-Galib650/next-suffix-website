import React from 'react';
import { Link } from 'react-router-dom';

export const AsthaPolicyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Privacy Policy for Astha</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Privacy Policy for Astha
          </h1>
          <p className="text-xs text-slate-400">
            Last updated: August 01, 2022
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-slate-700 text-sm leading-relaxed">
        <p>
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-200">
          Interpretation and Definitions
        </h2>

        <h3 className="text-base font-bold text-slate-800">Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>

        <h3 className="text-base font-bold text-slate-800">Definitions</h3>
        <ul className="space-y-3 list-disc pl-5 text-xs text-slate-600">
          <li>
            <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
          </li>
          <li>
            <strong>Application</strong> means the software program provided by the Company downloaded by You on any electronic device, named Astha.
          </li>
          <li>
            <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Suffix IT Ltd., Cha-70, 70/A, Rupayan Millennium Square (9A), Progoti Sharoni, North Badda, Gulshan, Dhaka-1212, Bangladesh.
          </li>
          <li>
            <strong>Country</strong> refers to: Bangladesh.
          </li>
          <li>
            <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-200">
          Contacting Us
        </h2>
        <p>
          If you have any questions about this Privacy Policy, You can contact us by email: <a href="mailto:info@suffixit.com" className="text-blue-700 font-bold hover:underline">info@suffixit.com</a> or at our registered address: Cha-70, 70/A, Rupayan Millennium Square (9A), Progoti Sharoni, North Badda, Gulshan, Dhaka-1212, Bangladesh.
        </p>
      </section>
    </div>
  );
};
