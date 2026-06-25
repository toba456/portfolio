"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type Job = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tags: string[];
};

function JobCard({ job, index }: { job: Job; index: number }) {
  const isFirst = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.08]" />
      <div
        className={`absolute left-[-4px] top-1.5 w-2 h-2 rounded-full ${
          isFirst ? "bg-[#f97316] shadow-[0_0_8px_rgba(249,115,22,0.8)]" : "bg-neutral-600"
        }`}
      />

      <div
        className={`p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:border-[#f97316]/30 hover:bg-white/[0.05] ${
          isFirst
            ? "border-[#f97316]/20 bg-[#f97316]/[0.04]"
            : "border-white/[0.06] bg-white/[0.02]"
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
          <div>
            <h3 className="font-semibold text-white">{job.role}</h3>
            <p className={`text-sm font-medium ${isFirst ? "text-[#f97316]" : "text-neutral-400"}`}>
              {job.company}
            </p>
          </div>
          <span className="text-xs text-neutral-500 bg-white/[0.05] px-3 py-1 rounded-full border border-white/[0.06] whitespace-nowrap self-start sm:self-center">
            {job.period}
          </span>
        </div>

        <ul className="space-y-1.5 mb-4">
          {job.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-neutral-400 leading-relaxed">
              <span className="text-[#f97316] mt-1 flex-shrink-0">›</span>
              {bullet}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const t = useTranslations("experience");
  const jobs = t.raw("jobs") as Job[];

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold text-[#f97316] uppercase tracking-widest mb-4"
        >
          {t("label")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          {t("title")}
        </motion.h2>

        <div>
          {jobs.map((job, i) => (
            <JobCard key={job.company} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
