import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, LayoutDashboard, Users, BookOpen, MessageCircle } from 'lucide-react';

const slides = [
  {
    title: 'Admin Dashboard',
    description: 'Overview cards, attendance line chart, grade distribution, and announcements.',
    icon: LayoutDashboard,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Teacher Dashboard',
    description: 'My classes, quick attendance, grade entry, and assignments management.',
    icon: BookOpen,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Student Dashboard',
    description: 'Attendance %, grade summary, upcoming assignments, and messages.',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Parent Dashboard',
    description: "Children's performance cards, attendance summaries, and announcements.",
    icon: MessageCircle,
    color: 'from-rose-500 to-pink-500',
  },
];

const PreviewCarousel = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    <section id="preview" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Dashboard Previews</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Glance at each role-specific dashboard before trying the demo.</p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900`}>
            <div className={`h-48 bg-gradient-to-r ${current.color}`} />
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white dark:bg-gray-800">
                  <current.icon size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{current.title}</h3>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{current.description}</p>
            </div>
          </div>

          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-2 text-gray-700 shadow hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
          >
            <ChevronLeft />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-2 text-gray-700 shadow hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
          >
            <ChevronRight />
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-700'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewCarousel;
