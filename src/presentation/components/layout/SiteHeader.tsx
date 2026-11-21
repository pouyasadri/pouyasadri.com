import type { HomePageContent } from "@/domain/entities/site";
import { Btn } from "@/presentation/components/ui/Btn";

type SiteHeaderProps = {
  brand: HomePageContent["brand"];
  nav: HomePageContent["nav"];
  cta: HomePageContent["headerCta"];
};

export function SiteHeader({ brand, nav, cta }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a className="logo" href="#hero" data-flight-to>
        {brand.wordmark}
        <span className="reg">®</span>
      </a>
      <nav className="nav" id="site-nav" aria-label="Navigation">
        {nav.map((item) => (
          <a key={item.href} className="link" href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-end">
        <Btn href={cta.href} size="sm">
          {cta.label}
        </Btn>
        <button
          className="menu-btn"
          type="button"
          aria-expanded="false"
          aria-controls="site-nav"
        >
          <span className="menu-lines" aria-hidden="true" />
          <span className="sr">Menu</span>
        </button>
      </div>
    </header>
  );
}
