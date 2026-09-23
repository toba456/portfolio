"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import ProfileImage from "@/components/ProfileImage";
import FadeIn from "@/components/ui/FadeIn";
import FitText from "@/components/ui/FitText";
import Magnet from "@/components/ui/Magnet";
import { ContactButton } from "@/components/ui/Buttons";

const navLinks = ["about", "experience", "projects", "skills", "contact"] as const;

export default function Hero() {
  const t = useTranslations("hero");
  const tNav = useTranslations("nav");
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

  return (
    <section id="hero" className="relative flex h-screen flex-col overflow-x-clip">
      <FadeIn
        as="nav"
        y={-20}
        immediate
        className="relative z-20 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 pt-6 md:px-10 md:pt-8"
      >
        {navLinks.map((key) => (
          <a
            key={key}
            href={`#${key}`}
            className={`text-sm font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem] ${
              activeSection === key ? "text-white" : "text-mist"
            }`}
          >
            {tNav(key)}
          </a>
        ))}
      </FadeIn>

      <div className="relative flex min-h-0 flex-1 flex-col justify-center">
        <FadeIn delay={0.15} y={40} immediate>
          <FitText
            as="h1"
            maxFontSize={170}
            minFontSize={32}
            className="hero-heading font-black uppercase leading-none tracking-tight"
          >
            {t("heading")}
          </FitText>
        </FadeIn>

        <div className="relative z-10 mx-auto -mt-[8vh] sm:-mt-[clamp(0px,calc(300px-30vh),200px)] md:-mt-[clamp(0px,calc(429px-40vh),250px)]">
          <Magnet padding={150} strength={3}>
            <FadeIn delay={0.6} y={30} immediate>
              <div
                className="relative"
                style={{
                  height: "clamp(260px, min(70vw, 60vh), 760px)",
                  aspectRatio: "1185 / 1692",
                }}
              >
                <ProfileImage />
              </div>
            </FadeIn>
          </Magnet>
        </div>
      </div>

      <div className="relative z-20 flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          immediate
          className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-mist sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
        >
          {t("tagline")}
        </FadeIn>
        <FadeIn delay={0.5} y={20} immediate>
          <ContactButton>{t("contact_cta")}</ContactButton>
        </FadeIn>
      </div>
    </section>
  );
}
