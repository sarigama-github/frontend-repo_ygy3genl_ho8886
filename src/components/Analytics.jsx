import React, { useMemo, useRef, useState } from 'react';
import { BarChart3, LineChart as LineChartIcon, PieChart as PieChartIcon, Download, FileDown, RefreshCw } from 'lucide-react';

// Utility: CSV export
function downloadCSV(filename, rows) {
  const csvContent = rows.map(r => r.map(v => (typeof v === 'string' && v.includes(',') ? `"${v.replace(/"/g, '""')}"` : v)).join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Simple SVG Line Chart
function LineChart({ data, width = 600, height = 240, color = '#6366f1', labels = [] }) {
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const w = width - padding.left - padding.right;
  const h = height - padding.top - padding.bottom;
  const maxY = Math.max(...data, 1);
  const points = data.map((d, i) => [ (i / (data.length - 1 || 1)) * w, h - (d / maxY) * h ]);
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');

  return (
    <svg width={width} height={height} className="max-w-full">
      <g transform={`translate(${padding.left},${padding.top})`}>
        {/* Axes */}
        <line x1={0} y1={0} x2={0} y2={h} stroke="#e5e7eb" />
        <line x1={0} y1={h} x2={w} y2={h} stroke="#e5e7eb" />
        {/* Path */}
        <path d={path} fill="none" stroke={color} strokeWidth={2.5} />
        {/* Dots */}
        {points.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={3.5} fill={color} />
        ))}
        {/* X labels */}
        {labels.length === data.length && labels.map((t, i) => (
          <text key={t + i} x={(i / (labels.length - 1 || 1)) * w} y={h + 20} className="text-[10px] fill-gray-500" textAnchor="middle">{t}</text>
        ))}
      </g>
    </svg>
  );
}

// Simple SVG Bar Chart
function BarChart({ data, categories, width = 600, height = 240, colors }) {
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const w = width - padding.left - padding.right;
  const h = height - padding.top - padding.bottom;
  const maxY = Math.max(...data, 1);
  const barWidth = w / data.length - 8;
  return (
    <svg width={width} height={height} className="max-w-full">
      <g transform={`translate(${padding.left},${padding.top})`}>
        <line x1={0} y1={0} x2={0} y2={h} stroke="#e5e7eb" />
        <line x1={0} y1={h} x2={w} y2={h} stroke="#e5e7eb" />
        {data.map((d, i) => {
          const x = i * (barWidth + 8) + 4;
          const bh = (d / maxY) * h;
          return (
            <g key={categories[i]}>
              <rect x={x} y={h - bh} width={barWidth} height={bh} fill={colors?.[i % (colors.length || 1)] || '#6366f1'} rx={6} />
              <text x={x + barWidth / 2} y={h + 18} className="text-[10px] fill-gray-500" textAnchor="middle">{categories[i]}</text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

// Simple SVG Pie Chart
function PieChart({ data, labels, width = 260, height = 260, colors }) {
  const total = data.reduce((a, b) => a + b, 0) || 1;
  const radius = Math.min(width, height) / 2;
  let cumulative = 0;

  const arcs = data.map((value, i) => {
    const startAngle = (cumulative / total) * Math.PI * 2;
    cumulative += value;
    const endAngle = (cumulative / total) * Math.PI * 2;

    const x1 = radius + radius * Math.cos(startAngle);
    const y1 = radius + radius * Math.sin(startAngle);
    const x2 = radius + radius * Math.cos(endAngle);
    const y2 = radius + radius * Math.sin(endAngle);
    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

    const d = `M ${radius} ${radius} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

    return (
      <path key={i} d={d} fill={colors?.[i % (colors.length || 1)] || '#6366f1'} />
    );
  });

  return (
    <svg width={width} height={height} className="max-w-full">
      {arcs}
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        <circle r={radius * 0.55} fill="white" className="dark:fill-gray-900" />
      </g>
    </svg>
  );
}

// Stacked Bar Chart
function StackedBarChart({ series, categories, width = 680, height = 260, colors }) {
  // series: [{ name: 'Assignments', data: [...] }, ...]
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const w = width - padding.left - padding.right;
  const h = height - padding.top - padding.bottom;
  const totals = categories.map((_, idx) => series.reduce((sum, s) => sum + (s.data[idx] || 0), 0));
  const maxY = Math.max(...totals, 1);
  const barWidth = w / categories.length - 12;

  return (
    <svg width={width} height={height} className="max-w-full">
      <g transform={`translate(${padding.left},${padding.top})`}>
        <line x1={0} y1={0} x2={0} y2={h} stroke="#e5e7eb" />
        <line x1={0} y1={h} x2={w} y2={h} stroke="#e5e7eb" />
        {categories.map((cat, i) => {
          const x = i * (barWidth + 12) + 6;
          let yOffset = h;
          return (
            <g key={cat}>
              {series.map((s, sIdx) => {
                const value = s.data[i] || 0;
                const segHeight = (value / maxY) * h;
                yOffset -= segHeight;
                return (
                  <rect key={s.name} x={x} y={yOffset} width={barWidth} height={segHeight} fill={colors?.[sIdx % (colors.length || 1)] || '#6366f1'} />
                );
              })}
              <text x={x + barWidth / 2} y={h + 18} className="text-[10px] fill-gray-500" textAnchor="middle">{cat}</text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

const defaultPalette = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4'];

const initialData = {
  months: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
  attendance: [92, 90, 94, 91, 93, 95, 94, 96, 97],
  grades: { labels: ['A', 'B', 'C', 'D', 'F'], values: [42, 58, 34, 12, 4] },
  classes: ['Math', 'Science', 'History', 'English', 'Art'],
  performance: [
    { name: 'Assignments', data: [30, 28, 25, 22, 18] },
    { name: 'Quizzes', data: [20, 22, 18, 16, 10] },
    { name: 'Exams', data: [15, 18, 14, 12, 8] },
  ],
};

export default function Analytics() {
  const [data, setData] = useState(initialData);
  const reportRef = useRef(null);
  const csvRows = useMemo(() => {
    const rows = [];
    rows.push(['Report', 'Student Management System Analytics']);
    rows.push([]);
    rows.push(['Attendance Trends']);
    rows.push(['Month', 'Attendance %']);
    data.months.forEach((m, i) => rows.push([m, data.attendance[i]]));
    rows.push([]);
    rows.push(['Grade Distribution']);
    rows.push(['Grade', 'Count']);
    data.grades.labels.forEach((g, i) => rows.push([g, data.grades.values[i]]));
    rows.push([]);
    rows.push(['Class Performance (Assignments/Quizzes/Exams)']);
    rows.push(['Class', 'Assignments', 'Quizzes', 'Exams']);
    data.classes.forEach((c, i) => rows.push([
      c,
      data.performance[0].data[i] || 0,
      data.performance[1].data[i] || 0,
      data.performance[2].data[i] || 0,
    ]));
    return rows;
  }, [data]);

  function handleExportCSV() {
    downloadCSV('sms-report.csv', csvRows);
  }

  function handlePrintPDF() {
    // Opens the browser print dialog; users can save as PDF
    const el = reportRef.current;
    if (!el) return window.print();
    const originalTitle = document.title;
    document.title = 'SMS Report';
    window.print();
    document.title = originalTitle;
  }

  function loadDemoData() {
    // Seeder-like demo data for roles (used to vary charts slightly)
    const seed = Math.random();
    const jitter = (base, amt = 3) => Math.max(0, Math.round(base + (Math.random() - 0.5) * amt));
    const attendance = initialData.attendance.map(v => jitter(v, 4));
    const grades = initialData.grades.values.map(v => jitter(v, 8));
    const perf = initialData.performance.map(s => ({ ...s, data: s.data.map(v => jitter(v, 6)) }));
    setData({ ...initialData, attendance, grades: { ...initialData.grades, values: grades }, performance: perf });
  }

  return (
    <section id="analytics" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Analytics & Reports</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-300">Interactive visuals for attendance, grades, and class performance. Export as CSV or PDF.</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={loadDemoData} className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
              <RefreshCw size={16} /> Load Demo Data
            </button>
            <button onClick={handleExportCSV} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500">
              <Download size={16} /> Export CSV
            </button>
            <button onClick={handlePrintPDF} className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-3 py-2 text-sm text-white shadow-sm hover:bg-gray-800 dark:bg-gray-700">
              <FileDown size={16} /> Print PDF
            </button>
          </div>
        </div>

        <div ref={reportRef} className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 print:bg-white">
          {/* Attendance Line */}
          <div className="col-span-12 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900 lg:col-span-7">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"><LineChartIcon size={16} /></span>
              <h3 className="font-semibold">Attendance Trends</h3>
            </div>
            <div className="mt-4 overflow-x-auto">
              <LineChart data={data.attendance} labels={data.months} width={680} height={260} color="#6366f1" />
            </div>
          </div>

          {/* Grade Distribution */}
          <div className="col-span-12 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900 lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"><PieChartIcon size={16} /></span>
              <h3 className="font-semibold">Grade Distribution</h3>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <PieChart data={data.grades.values} labels={data.grades.labels} colors={defaultPalette} />
              <BarChart data={data.grades.values} categories={data.grades.labels} width={320} height={260} colors={defaultPalette} />
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
              {data.grades.labels.map((l, i) => (
                <span key={l} className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: defaultPalette[i % defaultPalette.length] }} /> {l}
                </span>
              ))}
            </div>
          </div>

          {/* Class Performance Stacked Bars */}
          <div className="col-span-12 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300"><BarChart3 size={16} /></span>
              <h3 className="font-semibold">Class Performance Summary</h3>
            </div>
            <div className="mt-4 overflow-x-auto">
              <StackedBarChart series={data.performance} categories={data.classes} width={980} height={280} colors={defaultPalette} />
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-600 dark:text-gray-300">
              {data.performance.map((s, i) => (
                <span key={s.name} className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: defaultPalette[i % defaultPalette.length] }} /> {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
