"use client";

import { createElement, useLayoutEffect, useRef, useState, type ReactNode } from "react";

type FitTextProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "span";
  className?: string;
  containerClassName?: string;
  maxFontSize: number;
  minFontSize?: number;
};

/**
 * Scales a single-line, non-wrapping heading so it always fits its
 * container's width, instead of relying on hand-tuned vw/clamp values that
 * only happen to fit specific copy at specific breakpoints (and silently
 * overflow — and get clipped by an ancestor's overflow-clip — for anything
 * longer, like other locales).
 */
export default function FitText({
  children,
  as = "span",
  className,
  containerClassName,
  maxFontSize,
  minFontSize = 24,
}: FitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLElement>(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const fit = () => {
      const containerWidth = container.clientWidth;
      if (!containerWidth) return;
      text.style.fontSize = `${maxFontSize}px`;
      const naturalWidth = text.scrollWidth;
      if (!naturalWidth) return;
      const next = Math.min(
        maxFontSize,
        Math.max(minFontSize, (containerWidth / naturalWidth) * maxFontSize * 0.98)
      );
      // Apply directly: if `next` matches the current state, React bails
      // out of re-rendering, which would otherwise leave the probe
      // font-size (set above) stuck on the actual DOM node.
      text.style.fontSize = `${next}px`;
      setFontSize(next);
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(container);
    return () => observer.disconnect();
  }, [children, maxFontSize, minFontSize]);

  return (
    <div
      ref={containerRef}
      className={`w-full min-w-0 overflow-hidden text-center ${containerClassName ?? ""}`}
    >
      {createElement(
        as,
        {
          ref: textRef,
          className,
          style: { fontSize: `${fontSize}px`, whiteSpace: "nowrap", display: "inline-block" },
        },
        children
      )}
    </div>
  );
}
