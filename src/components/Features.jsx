import React from 'react';
import { BarChart3, FileText, MessageSquare, Shield, Users } from 'lucide-react';

const featureList = [
  {
    title: 'Academic Tracking',
    description: 'Attendance, grades, assignments, and performance analytics with beautiful charts.',
    icon: BarChart3,
    anchor: '#academics',
  },
  {
    title: 'Administrative Tools',
    description: 'Manage users, classes, subjects, and generate CSV/PDF reports quickly.',
    icon: FileText,
    anchor: '#admin-tools',
  },
  {
    title: 'Communication & Messaging',
    description: 'Real-time messages between teachers, students, and parents with notifications.',
    icon: MessageSquare,
    anchor: '#communication',
  },
  {
    title: 'Secure Role-based Access',
    description: 'Granular permissions for Admin, Teacher, Student, and Parent roles.',
    icon: Shield,
    anchor: '#security',
  },
];

const Features = () => {
  return (
    <section id="features" className="border-t border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Everything schools need</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Clean dashboards, precise permissions, rich analytics, and seamless communication.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureList.map(({ title, description, icon: Icon, anchor }) => (
            <a key={title} href={anchor} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white dark:bg-indigo-500">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p>
            </a>
          ))}
        </div>

        <div id="academics" className="mt-16 grid items-start gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Academic Tracking</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Monitor attendance, grades, assignments, and class performance over time.</p>
            <div className="mt-4 h-40 w-full rounded-lg bg-gradient-to-br from-indigo-100 via-white to-blue-50 dark:from-indigo-950 dark:via-gray-900 dark:to-blue-950" />
          </div>
          <div id="admin-tools" className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Administrative Tools</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Create users, assign roles, manage classes and subjects, and export reports.</p>
            <div className="mt-4 h-40 w-full rounded-lg bg-gradient-to-br from-emerald-100 via-white to-teal-50 dark:from-emerald-950 dark:via-gray-900 dark:to-teal-950" />
          </div>
          <div id="communication" className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Communication</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Send announcements and messages with read receipts and notifications.</p>
            <div className="mt-4 h-40 w-full rounded-lg bg-gradient-to-br from-pink-100 via-white to-rose-50 dark:from-pink-950 dark:via-gray-900 dark:to-rose-950" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
