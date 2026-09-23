"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Fragment, useRef } from "react";

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const total = text.length;
  const words = text.split(" ").reduce<{ word: string; start: number }[]>((acc, word) => {
    const prev = acc[acc.length - 1];
    const start = prev ? prev.start + prev.word.length + 1 : 0;
    acc.push({ word, start });
    return acc;
  }, []);

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map(({ word, start }, w) => (
        <Fragment key={w}>
          <span aria-hidden className="inline-block whitespace-nowrap">
            {word.split("").map((char, c) => {
              const i = start + c;
              return (
                <Char
                  key={c}
                  char={char}
                  progress={scrollYProgress}
                  range={[i / total, (i + 1) / total]}
                />
              );
            })}
          </span>{" "}
        </Fragment>
      ))}
    </p>
  );
}
