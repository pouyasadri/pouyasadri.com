import type { HomePageContent } from "@/domain/entities/site";
import { Btn } from "@/presentation/components/ui/Btn";

type HeroSectionProps = {
  brand: HomePageContent["brand"];
  hero: HomePageContent["hero"];
};

export function HeroSection({ brand, hero }: HeroSectionProps) {
  return (
    <section id="hero" className="hero" data-kind="hero" data-loops>
      <div className="hero-frame">
        <div className="hero-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.background.src}
            alt={hero.background.alt}
            width={hero.background.width}
            height={hero.background.height}
            fetchPriority="high"
          />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
      </div>
      <div className="hero-inner">
        <div className="hero-top">
          <p
            className="wordmark"
            data-flight-from
            style={{ ["--len" as string]: String(brand.wordmarkLen) }}
          >
            {brand.wordmark}
            <span className="reg">®</span>
          </p>
          <p className="hero-studio">{hero.studioLabel}</p>
        </div>
        <div className="hero-marks" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="hero-bottom">
          <h1 className="hero-lede">
            {hero.lede} <span>{hero.ledeMuted}</span>
          </h1>
          <ul className="hero-list">
            {hero.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="person">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="person-photo"
              src={hero.person.image.src}
              alt={hero.person.image.alt}
              width={hero.person.image.width}
              height={hero.person.image.height}
            />
            <div className="person-body">
              <p className="person-role">
                {hero.person.role} <span>{hero.person.roleMuted}</span>
              </p>
              <p className="person-name">{hero.person.name}</p>
              <Btn href={hero.person.cta.href} size="sm">
                {hero.person.cta.label}
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
