"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
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

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm"
          >
            <p className="text-neutral-300 leading-relaxed">{t("bio")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="p-6 rounded-2xl border border-[#f97316]/20 bg-[#f97316]/[0.05] backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f97316]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#f97316]/20 flex items-center justify-center text-lg">
                🤖
              </div>
              <h3 className="font-semibold text-white">{t("ai_title")}</h3>
            </div>
            <p className="text-neutral-300 leading-relaxed relative z-10">{t("ai_bio")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
