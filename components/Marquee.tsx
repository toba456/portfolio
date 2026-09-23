"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { marqueeRow1, marqueeRow2 } from "@/lib/content";

function Tile({ src, eager }: { src: string; eager?: boolean }) {
  return (
    <div className="relative h-[180px] w-[280px] flex-shrink-0 overflow-hidden rounded-2xl sm:h-[230px] sm:w-[360px] md:h-[270px] md:w-[420px]">
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        sizes="420px"
        loading={eager ? undefined : "lazy"}
        priority={eager}
      />
    </div>
  );
}

function Row({
  images,
  direction,
  eagerCount = 0,
}: {
  images: string[];
  direction: "left" | "right";
  eagerCount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const raw = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const offset = useTransform(raw, (v) => (direction === "left" ? -v : v));

  const tripled = [...images, ...images, ...images];

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        className="flex gap-3"
        style={{
          x: reducedMotion ? 0 : offset,
          willChange: "transform",
        }}
      >
        {tripled.map((src, i) => (
          <Tile key={i} src={src} eager={i < eagerCount} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="bg-ink pb-10 pt-24 sm:pt-32 md:pt-40">
      <div className="flex flex-col gap-3">
        <Row images={marqueeRow1} direction="right" eagerCount={2} />
        <Row images={marqueeRow2} direction="left" />
      </div>
    </section>
  );
}
