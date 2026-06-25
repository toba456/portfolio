"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const skillCategories = {
  frontend: [
    { name: "React JS", level: 95 },
    { name: "TypeScript", level: 88 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML & CSS", level: 95 },
    { name: "Vite", level: 85 },
  ],
  mobile: [
    { name: "React Native", level: 93 },
    { name: "Expo", level: 88 },
    { name: "React Navigation", level: 90 },
    { name: "Redux", level: 85 },
    { name: "GraphQL", level: 78 },
  ],
  backend: [
    { name: "Node.js", level: 72 },
    { name: "Express.js", level: 70 },
    { name: "Firebase", level: 75 },
    { name: "MongoDB", level: 68 },
    { name: "SQLite", level: 65 },
    { name: "REST APIs", level: 88 },
  ],
  ai: [
    { name: "Claude Code", level: 90 },
    { name: "Claude API", level: 85 },
    { name: "Gemini API", level: 80 },
    { name: "Cursor", level: 88 },
    { name: "AI-augmented workflows", level: 85 },
  ],
};

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-neutral-300">{name}</span>
        <span className="text-xs text-neutral-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, delay: 0.1 + index * 0.06, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[#f97316] to-[#fb923c]"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const t = useTranslations("skills");
  const categories = t.raw("categories") as Record<string, string>;

  return (
    <section id="skills" className="py-32 px-6">
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

        <div className="grid md:grid-cols-2 gap-6">
          {(Object.keys(skillCategories) as Array<keyof typeof skillCategories>).map(
            (category, catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.45, delay: catIndex * 0.08 }}
                className={`p-6 rounded-2xl border backdrop-blur-sm ${
                  category === "ai"
                    ? "border-[#f97316]/20 bg-[#f97316]/[0.04]"
                    : "border-white/[0.08] bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-2 mb-5">
                  {category === "ai" && <span className="text-lg">🤖</span>}
                  <h3
                    className={`font-semibold ${category === "ai" ? "text-[#fb923c]" : "text-white"}`}
                  >
                    {categories[category]}
                  </h3>
                </div>
                <div className="space-y-4">
                  {skillCategories[category].map((skill, i) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
