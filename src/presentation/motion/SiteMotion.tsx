"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { initSiteMotion } from "@/presentation/motion/site-motion-engine";

/**
 * Boot GSAP/Lenis only after the window has loaded and two animation frames
 * have passed. Streaming hydration can still be finishing when this client
 * chunk mounts; mutating the DOM earlier causes hydration mismatches.
 */
function afterHydration(run: () => void): () => void {
  let cancelled = false;
  let raf1 = 0;
  let raf2 = 0;
  let timeoutId = 0;

  const start = () => {
    raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(() => {
        // One more macrotask so React can flush any remaining hydration work.
        timeoutId = window.setTimeout(() => {
          if (!cancelled) run();
        }, 0);
      });
    });
  };

  if (document.readyState === "complete") {
    start();
  } else {
    window.addEventListener("load", start, { once: true });
  }

  return () => {
    cancelled = true;
    window.removeEventListener("load", start);
    if (raf1) cancelAnimationFrame(raf1);
    if (raf2) cancelAnimationFrame(raf2);
    if (timeoutId) clearTimeout(timeoutId);
  };
}

export function SiteMotion() {
  useEffect(() => {
    const root = document.documentElement;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("motion");
    } else {
      root.classList.remove("motion");
    }

    let cleanupMotion: (() => void) | undefined;

    const cancelDefer = afterHydration(() => {
      cleanupMotion?.();
      cleanupMotion = initSiteMotion(gsap, ScrollTrigger, Lenis) || undefined;
    });

    return () => {
      cancelDefer();
      cleanupMotion?.();
    };
  }, []);

  return null;
}
