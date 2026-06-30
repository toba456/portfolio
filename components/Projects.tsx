"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type Project = {
  name: string;
  description: string;
  tags: string[];
  repo: string;
  liveUrl?: string;
  isWorkProject?: boolean;
  featured: boolean;
};

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const t = useTranslations("projects");
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className={`group relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 flex flex-col ${
        project.featured
          ? "border-[#f97316]/25 bg-[#f97316]/[0.04] hover:border-[#f97316]/50 hover:bg-[#f97316]/[0.08]"
          : "border-white/[0.08] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.05]"
      }`}
    >
      {project.featured && (
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#f97316]/10 rounded-full blur-3xl pointer-events-none" />
      )}
      <div className="flex items-start justify-between mb-3 relative z-10">
        <h3 className="font-semibold text-white text-lg">{project.name}</h3>
        <div className="flex items-center gap-2 flex-shrink-0 ml-4">
          {project.isWorkProject && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-[#f97316]/20 border border-[#f97316]/30 text-[#fb923c] font-medium">
              {t("work_project")}
            </span>
          )}
          {project.featured && !project.isWorkProject && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-[#f97316]/20 border border-[#f97316]/30 text-[#fb923c] font-medium">
              ★ Featured
            </span>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/[0.08] transition-all"
              title="Ver sitio en vivo"
            >
              <ExternalLinkIcon />
            </a>
          )}
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/[0.08] transition-all"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <p className="text-sm text-neutral-400 leading-relaxed mb-5 relative z-10 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 relative z-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function WorkProjectCard() {
  const t = useTranslations("projects");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.45, delay: 0 }}
      className="group relative p-6 rounded-2xl border border-[#f97316]/25 bg-[#f97316]/[0.04] hover:border-[#f97316]/50 hover:bg-[#f97316]/[0.08] backdrop-blur-sm transition-all duration-300 flex flex-col"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#f97316]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="flex items-start justify-between mb-3 relative z-10">
        <h3 className="font-semibold text-white text-lg">La Anónima — Retail App</h3>
        <div className="flex items-center gap-2 flex-shrink-0 ml-4">
          <span className="text-xs px-2.5 py-1 rounded-full bg-[#f97316]/20 border border-[#f97316]/30 text-[#fb923c] font-medium">
            {t("work_project")}
          </span>
          <a
            href="https://play.google.com/store/apps/details?id=com.mobilenik.laanonimaplus&hl=es_AR"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/[0.08] transition-all"
            title="Ver en Google Play"
          >
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
      <p className="text-sm text-neutral-400 leading-relaxed mb-5 relative z-10 flex-1">
        {t("anonima_description")}
      </p>
      <div className="flex flex-wrap gap-2 relative z-10">
        {["React Native", "TypeScript", "Redux", "GraphQL", "Expo", "Zod", "React Nav"].map(
          (tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-neutral-400"
            >
              {tag}
            </span>
          )
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const t = useTranslations("projects");
  const projects = t.raw("items") as Project[];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
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
        <div className="grid md:grid-cols-2 gap-5">
          <WorkProjectCard />
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
