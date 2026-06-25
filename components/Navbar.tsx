"use client";

import { useTranslations } from "next-intl";
import { useTransition, useEffect, useState } from "react";
import { setLocale } from "@/app/actions";
import { useLocale } from "next-intl";

const navLinks = ["about", "experience", "projects", "skills", "contact"] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function toggleLocale() {
    const next = locale === "en" ? "es" : "en";
    startTransition(() => setLocale(next));
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-[rgba(10,10,10,0.8)] border-b border-white/[0.06]">
      <a href="#hero" className="font-bold text-lg tracking-tight text-white hover:opacity-80 transition-opacity">
        TM<span className="text-[#f97316]">.</span>
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((key) => (
          <a
            key={key}
            href={`#${key}`}
            className={`text-sm transition-colors duration-200 ${
              activeSection === key
                ? "text-[#f97316] font-medium"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {t(key)}
          </a>
        ))}
      </nav>

      <button
        onClick={toggleLocale}
        disabled={isPending}
        className="text-sm font-medium px-3 py-1.5 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-[#f97316]/50 transition-all duration-200 disabled:opacity-50"
      >
        {locale === "en" ? "ES" : "EN"}
      </button>
    </header>
  );
}
