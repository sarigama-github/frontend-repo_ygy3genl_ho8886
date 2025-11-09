import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ShieldCheck } from 'lucide-react';

export default function SplineHero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12">
          <div className="relative z-10">
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
          </div>

          <div className="relative h-[420px] w-full rounded-2xl bg-white shadow-inner ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-300/20 via-fuchsia-300/10 to-cyan-300/20 blur-3xl" />
            <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
