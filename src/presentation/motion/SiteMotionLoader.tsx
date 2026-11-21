"use client";

import dynamic from "next/dynamic";

const SiteMotion = dynamic(
  () =>
    import("@/presentation/motion/SiteMotion").then((mod) => mod.SiteMotion),
  { ssr: false },
);

export function SiteMotionLoader() {
  return <SiteMotion />;
}
