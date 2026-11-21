import type { ReactNode } from "react";
import type { HomePageContent } from "@/domain/entities/site";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";

type SiteFooterProps = {
  brand: HomePageContent["brand"];
  footer: HomePageContent["footer"];
};

const socialIcons: Record<string, ReactNode> = {
  GitHub: <FaGithub aria-hidden />,
  LinkedIn: <FaLinkedin aria-hidden />,
  Medium: <FaMedium aria-hidden />,
};

export function SiteFooter({ brand, footer }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="foot-top wrap">
        <div className="foot-col">
          <p className="foot-h">{footer.writeLabel}</p>
          <a className="foot-big link" href={`mailto:${footer.email}`}>
            {footer.email}
          </a>
          <a className="link" href={footer.phoneHref}>
            {footer.phone}
          </a>
        </div>
        <div className="foot-col">
          <p className="foot-h">{footer.studioLabel}</p>
          {footer.studioLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <nav className="foot-col" aria-label="Pied">
          <p className="foot-h">{footer.pagesLabel}</p>
          {footer.pages.map((page) => (
            <a key={page.href} className="link" href={page.href}>
              {page.label}
            </a>
          ))}
        </nav>
        <div className="foot-col">
          <p className="foot-h">{footer.socialLabel}</p>
          {footer.social.map((item) => (
            <a
              key={item.label}
              className="link"
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="inline-flex items-center gap-2">
                {socialIcons[item.label]}
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="foot-mark-wrap">
        <p
          className="foot-mark"
          style={{ ["--len" as string]: String(brand.wordmarkLen) }}
        >
          {brand.wordmark}
          <span className="reg">®</span>
        </p>
      </div>
      <div className="foot-bottom wrap">
        <p>{footer.copyright}</p>
        <a className="link" href={footer.privacyHref}>
          {footer.privacyLabel}
        </a>
      </div>
    </footer>
  );
}
