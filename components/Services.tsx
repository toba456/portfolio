"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/ui/FadeIn";

type ServiceItem = { name: string; description: string };

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as ServiceItem[];

  return (
    <section className="relative rounded-t-[40px] bg-paper px-5 py-20 text-ink sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn as="h2" y={40}>
        <span
          className="mb-16 block text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          {t("title")}
        </span>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {items.map((item, i) => (
          <FadeIn
            key={item.name}
            delay={i * 0.1}
            y={20}
            className="flex items-start gap-6 border-b border-black/15 py-8 first:border-t sm:py-10 md:py-12"
          >
            <span
              className="flex-shrink-0 font-black leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-2 pt-2">
              <h3
                className="font-medium uppercase"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {item.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed opacity-60"
                style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
              >
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
