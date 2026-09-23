"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/ui/FadeIn";

type Job = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tags: string[];
};

function JobRow({ job, index }: { job: Job; index: number }) {
  return (
    <FadeIn
      y={20}
      delay={index * 0.05}
      className="flex flex-col gap-4 border-b border-mist/15 py-8 first:border-t sm:flex-row sm:gap-8 sm:py-10"
    >
      <span className="flex-shrink-0 text-sm font-medium uppercase tracking-widest text-mist/50 sm:w-40">
        {job.period}
      </span>
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-lg font-medium uppercase sm:text-xl">{job.role}</h3>
          <p className="text-sm text-mist/60">{job.company}</p>
        </div>
        <ul className="space-y-1.5">
          {job.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-mist/70">
              <span className="mt-1 flex-shrink-0 text-mist/40">›</span>
              {bullet}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-mist/20 px-2.5 py-1 text-xs text-mist/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Experience() {
  const t = useTranslations("experience");
  const jobs = t.raw("jobs") as Job[];

  return (
    <section id="experience" className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-4xl">
        <FadeIn as="h2" y={40}>
          <span
            className="hero-heading mb-16 block text-center font-black uppercase leading-none tracking-tight sm:mb-20"
            style={{ fontSize: "clamp(2.5rem, 9vw, 120px)" }}
          >
            {t("title")}
          </span>
        </FadeIn>

        <div>
          {jobs.map((job, i) => (
            <JobRow key={job.company} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
