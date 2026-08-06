"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element has scrolled into the viewport, once.
 * Used to drive scroll-reveal animations. Respects the user's
 * `prefers-reduced-motion` setting by marking content visible
 * immediately, without waiting on an intersection.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
