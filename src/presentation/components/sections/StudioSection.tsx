import type { HomePageContent } from "@/domain/entities/site";
import { Btn } from "@/presentation/components/ui/Btn";

type StudioSectionProps = {
  studio: HomePageContent["studio"];
};

export function StudioSection({ studio }: StudioSectionProps) {
  return (
    <section id="studio" className="studio" data-kind="gallery">
      <div className="studio-inner">
        <div className="studio-copy-wrap">
          <div className="studio-copy">
            <h2 className="h2">{studio.title}</h2>
            <p>{studio.text}</p>
            <Btn href={studio.cta.href}>{studio.cta.label}</Btn>
          </div>
        </div>
        <div className="collage" data-fixed="5">
          {studio.shots.map((shot) => (
            <figure
              key={shot.className}
              className={`shot ${shot.className}`}
              data-speed={shot.speed}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shot.image.src}
                alt={shot.image.alt}
                width={shot.image.width}
                height={shot.image.height}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
