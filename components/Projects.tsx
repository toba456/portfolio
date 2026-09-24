"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { GhostButton } from "@/components/ui/Buttons";
import { stackedProjects, type StackedProject } from "@/lib/content";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
  total,
}: {
  project: StackedProject;
  index: number;
  total: number;
}) {
  const t = useTranslations("projects");
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={container} className="sticky min-h-[85vh]" style={{ top: `${96 + index * 28}px` }}>
      <motion.div
        style={{ scale }}
        className="relative rounded-[40px] border-2 border-mist bg-ink p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="mb-4 flex flex-wrap items-center gap-4 sm:mb-6">
          <span
            className="font-black leading-none"
            style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-1 flex-col gap-1">
            <span className="text-xs font-medium uppercase tracking-widest text-mist/60">
              {t(`labels.${project.kind}`)}
            </span>
            <h3 className="text-lg font-medium uppercase sm:text-2xl md:text-3xl">
              {t(`items.${project.id}.name`)}
            </h3>
          </div>
          {project.liveUrl && (
            <GhostButton href={project.liveUrl} className="text-xs sm:text-sm">
              {t("labels.live")}
            </GhostButton>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-mist p-3 text-mist transition-colors hover:bg-mist/10"
              aria-label={t("labels.code")}
            >
              <GitHubIcon />
            </a>
          )}
        </div>

        <p className="mb-4 max-w-2xl text-sm text-mist/70 sm:mb-6 sm:text-base">
          {t(`items.${project.id}.description`)}
        </p>

        {project.imageLayout === "mobile" ? (
          <div className="grid grid-cols-3 gap-3">
            {project.images.map((img, i) => (
              <div
                key={img.src}
                className="relative w-full overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
                style={{ aspectRatio: `${img.width} / ${img.height}` }}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 20vw, 33vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <div
              className="relative w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ aspectRatio: `${project.images[0].width} / ${project.images[0].height}` }}
            >
              <Image
                src={project.images[0].src}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 768px) 56rem, 100vw"
                priority
              />
            </div>
            <div className="flex gap-3">
              {[project.images[1], project.images[2]].map((img) => (
                <div
                  key={img.src}
                  className="relative w-1/2 overflow-hidden rounded-[32px] sm:rounded-[40px] md:rounded-[50px]"
                  style={{ aspectRatio: `${img.width} / ${img.height}` }}
                >
                  <Image src={img.src} alt="" fill className="object-cover" sizes="(min-width: 768px) 28rem, 50vw" />
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section
      id="projects"
      className="relative -mt-10 rounded-t-[40px] bg-ink px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ zIndex: 10 }}
    >
      <FadeIn as="h2" y={40}>
        <span
          className="hero-heading mb-16 block text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          {t("title")}
        </span>
      </FadeIn>

      <div className="mx-auto max-w-4xl">
        {stackedProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} total={stackedProjects.length} />
        ))}
      </div>
    </section>
  );
}
