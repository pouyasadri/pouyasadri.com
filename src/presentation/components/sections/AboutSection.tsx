import type { HomePageContent } from "@/domain/entities/site";
import { Btn } from "@/presentation/components/ui/Btn";

type AboutSectionProps = {
  about: HomePageContent["about"];
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="about" data-kind="manifesto">
      <div className="about-grid wrap">
        <figure className="about-photo" data-speed=".08">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={about.image.src}
            alt={about.image.alt}
            width={about.image.width}
            height={about.image.height}
            loading="lazy"
          />
        </figure>
        <div className="about-copy">
          <h2 className="about-text" data-ink>
            {about.text}
          </h2>
          <div className="about-foot">
            <p className="about-sign">
              {about.signName}
              <span>{about.signRole}</span>
            </p>
            <Btn href={about.cta.href}>{about.cta.label}</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}
