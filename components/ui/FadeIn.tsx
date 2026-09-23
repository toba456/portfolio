"use client";

import { motion } from "framer-motion";
import { createElement, useEffect, useState, type CSSProperties, type ReactNode } from "react";

const motionElements = {
  div: motion.div,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  li: motion.li,
  span: motion.span,
  nav: motion.nav,
};

const plainElements = {
  div: "div",
  p: "p",
  h1: "h1",
  h2: "h2",
  li: "li",
  span: "span",
  nav: "nav",
} as const;

type FadeInProps = {
  children: ReactNode;
  as?: keyof typeof motionElements;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  /** Animate on mount instead of on scroll-into-view. Use for above-the-fold
   * content, where whileInView's IntersectionObserver can fail to fire since
   * the element is already in the viewport when it first mounts. */
  immediate?: boolean;
};

export default function FadeIn({
  children,
  as = "div",
  className,
  style,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  immediate = false,
}: FadeInProps) {
  if (immediate) {
    return (
      <ImmediateFadeIn as={as} className={className} style={style} delay={delay} duration={duration} x={x} y={y}>
        {children}
      </ImmediateFadeIn>
    );
  }

  const Component = motionElements[as];

  return (
    <Component
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Component>
  );
}

/**
 * Mount-triggered fade-in for above-the-fold content, done with a plain CSS
 * transition instead of Framer Motion's `animate` prop. Framer Motion's own
 * mount-triggered animation can intermittently get stuck at its `initial`
 * value — observed even outside of React Strict Mode's dev-only
 * double-invoke of effects — so above-the-fold content (which must be
 * visible reliably, not just "usually") avoids it entirely here.
 */
function ImmediateFadeIn({
  as,
  className,
  style,
  delay,
  duration,
  x,
  y,
  children,
}: {
  as: keyof typeof plainElements;
  className?: string;
  style?: CSSProperties;
  delay: number;
  duration: number;
  x: number;
  y: number;
  children: ReactNode;
}) {
  const Tag = plainElements[as];
  const [shown, setShown] = useState(false);

  // useEffect already runs in a separate commit after the browser paints
  // the initial (hidden) state, so the CSS transition below animates
  // without needing a requestAnimationFrame — which browsers throttle
  // indefinitely for background/hidden tabs.
  useEffect(() => {
    setShown(true);
  }, []);

  const combinedStyle: CSSProperties = {
    ...style,
    opacity: shown ? 1 : 0,
    transform: shown ? "none" : `translate(${x}px, ${y}px)`,
    transition: `opacity ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s, transform ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`,
  };

  return createElement(Tag, { className, style: combinedStyle }, children);
}
