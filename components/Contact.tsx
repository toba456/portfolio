"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/ui/FadeIn";
import FitText from "@/components/ui/FitText";
import { ContactButton, GhostButton } from "@/components/ui/Buttons";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
      <path
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <FadeIn as="h2" y={40}>
          <FitText
            as="span"
            maxFontSize={160}
            minFontSize={48}
            className="hero-heading font-black uppercase leading-none tracking-tight"
          >
            {t("title")}
          </FitText>
        </FadeIn>

        <FadeIn as="p" delay={0.1} y={20} className="max-w-md leading-relaxed text-mist/70">
          {t("subtitle")}
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <ContactButton href="mailto:tobiasmarroquin@gmail.com">
            {t("email_btn")}
          </ContactButton>
        </FadeIn>

        <FadeIn
          delay={0.3}
          y={20}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <GhostButton href="https://www.linkedin.com/in/tobias-marroquin/">
            <LinkedInIcon />
            {t("linkedin_btn")}
          </GhostButton>
          <GhostButton href="/Tobias-Marroquin-Resume.pdf" download>
            <DownloadIcon />
            {t("cv_btn")}
          </GhostButton>
        </FadeIn>

        <p className="pt-10 text-xs uppercase tracking-widest text-mist/60">
          © {new Date().getFullYear()} Tobias Marroquin
        </p>
      </div>
    </section>
  );
}
