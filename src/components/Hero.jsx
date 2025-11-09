import React from 'react';
import { Rocket, ShieldCheck, MessageSquareMore, LineChart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:pb-24 sm:pt-28 lg:grid lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-32">
        <div className="z-10 col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300">
            <ShieldCheck size={14} /> Secure, role-based access
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            A Modern Student Management System for Smarter Schools
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-gray-600 dark:text-gray-300">
            Track attendance, grades, assignments, and communicate seamlessly between teachers, students, and parents.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#preview"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white shadow transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              <Rocket size={18} /> Try Demo
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-800 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Get Started
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <LineChart className="text-indigo-600 dark:text-indigo-400" />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Analytics & Reports</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <MessageSquareMore className="text-indigo-600 dark:text-indigo-400" />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Messaging & Alerts</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <ShieldCheck className="text-indigo-600 dark:text-indigo-400" />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Secure Access</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <Rocket className="text-indigo-600 dark:text-indigo-400" />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Fast Onboarding</p>
            </div>
          </div>
        </div>

        <div className="relative col-span-6 mt-12 hidden h-[420px] items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 via-white to-blue-50 shadow-inner dark:from-indigo-950 dark:via-gray-900 dark:to-blue-950 sm:block lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-300/20 via-fuchsia-300/10 to-cyan-300/20 blur-3xl filter pointer-events-none" />
          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-indigo-500/20 blur-2xl" />
          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
          <div className="relative z-10 flex flex-col items-center p-8 text-center">
            <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur dark:bg-gray-800/60 dark:text-gray-200">Dashboard Preview</span>
            <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-gray-100">Role-based Dashboards</h3>
            <p className="mt-2 max-w-sm text-sm text-gray-600 dark:text-gray-300">Admin, Teacher, Student, and Parent views with tailored insights and quick actions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
