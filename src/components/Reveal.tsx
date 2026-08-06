"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type RevealProps = {
  /** Optional so Reveal can also wrap a single bare element, like a divider. */
  children?: ReactNode;
  className?: string;
  /** Extra delay in ms, useful for staggering a list of items. */
  delay?: number;
};

/**
 * Fades and lifts its children into place the first time they scroll
 * into view. Kept as a thin wrapper (rather than baking this into every
 * section) so any element can opt into the same entrance animation.
 */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
