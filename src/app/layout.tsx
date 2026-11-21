import type { Metadata } from "next";
import Script from "next/script";
import { Host_Grotesk } from "next/font/google";
import { SiteMotionLoader } from "@/presentation/motion/SiteMotionLoader";
import "@/presentation/styles/design.css";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pouya Sadri — plateformes produit",
  description:
    "Freelance full-stack à Strasbourg. Plateformes Next.js / NestJS, Go et MCP. Techstars, Digi Conception, ReboTurn.",
};

const motionBootScript = `(function(){var d=document.documentElement;if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('motion');}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${hostGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={`${hostGrotesk.className} min-h-full`}>
        <Script
          id="motion-boot"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: motionBootScript }}
        />
        {children}
        <SiteMotionLoader />
      </body>
    </html>
  );
}
