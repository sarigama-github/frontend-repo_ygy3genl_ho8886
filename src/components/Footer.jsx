import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Flames SMS</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">A modern Student Management System for smarter schools.</p>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><Mail size={16} /> support@flamessms.app</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> 123 Education Ave, Suite 100</li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">Follow</h5>
            <div className="mt-3 flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <a href="#" aria-label="Twitter" className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-800"><Twitter size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-800"><Linkedin size={18} /></a>
              <a href="#" aria-label="Facebook" className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-800"><Facebook size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400 md:flex-row">
          <p>© {new Date().getFullYear()} Flames SMS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Privacy</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Terms</a>
            <a href="#" className="hover:text-indigo-600 dark:hover=text-indigo-400">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
