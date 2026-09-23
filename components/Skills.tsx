"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/ui/FadeIn";
import { skillCategories } from "@/lib/content";

export default function Skills() {
  const t = useTranslations("skills");
  const categories = t.raw("categories") as Record<string, string>;

  return (
    <section id="skills" className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-4xl">
        <FadeIn as="h2" y={40}>
          <span
            className="hero-heading mb-16 block text-center font-black uppercase leading-none tracking-tight sm:mb-20"
            style={{ fontSize: "clamp(2.5rem, 9vw, 120px)" }}
          >
            {t("title")}
          </span>
        </FadeIn>

        <div className="grid gap-10 sm:grid-cols-2">
          {(Object.keys(skillCategories) as Array<keyof typeof skillCategories>).map(
            (category, i) => (
              <FadeIn key={category} y={20} delay={i * 0.08}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-mist/60">
                  {categories[category]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories[category].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-mist/20 px-3 py-1.5 text-sm text-mist/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </FadeIn>
            )
          )}
        </div>
      </div>
    </section>
  );
}
