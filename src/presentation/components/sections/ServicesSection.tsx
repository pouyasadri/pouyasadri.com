import type { HomePageContent } from "@/domain/entities/site";
import { Btn } from "@/presentation/components/ui/Btn";
import { IconPlus } from "@/presentation/components/ui/IconPlus";

type ServicesSectionProps = {
  services: HomePageContent["services"];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="services" data-kind="services">
      <div className="svc-track">
        <div className="svc-stage" data-flood>
          <div className="svc-layer svc-light">
            <h2 className="title dot">{services.title}</h2>
            <p className="svc-lede">{services.lede}</p>
          </div>
          <div className="svc-layer svc-dark" aria-hidden="true" />
        </div>
      </div>
      <div className="svc-body">
        <div className="svc-list" data-accordion>
          {services.items.map((item) => (
            <div
              key={item.name}
              className={`svc-item${item.defaultOpen ? " is-open" : ""}`}
              data-acc-item
            >
              <button
                className="svc-btn"
                type="button"
                aria-expanded={item.defaultOpen ? "true" : "false"}
                data-acc-btn
              >
                <span className="svc-name">{item.name}</span>
                <span className="icon-btn" aria-hidden="true">
                  <IconPlus />
                </span>
              </button>
              <div data-acc-panel>
                <div className="acc-in">
                  <div className="svc-grid">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="svc-img"
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.image.width}
                      height={item.image.height}
                      loading="lazy"
                    />
                    <p className="svc-text">{item.description}</p>
                    <ul className="tags">
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="svc-foot">
          <p>{services.foot}</p>
          <Btn href={services.cta.href} variant="light">
            {services.cta.label}
          </Btn>
        </div>
      </div>
    </section>
  );
}
