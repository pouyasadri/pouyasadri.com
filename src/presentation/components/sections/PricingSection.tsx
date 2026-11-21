import type { HomePageContent } from "@/domain/entities/site";
import { Btn } from "@/presentation/components/ui/Btn";

type PricingSectionProps = {
  pricing: HomePageContent["pricing"];
};

export function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section id="pricing" className="pricing" data-kind="pricing">
      <div className="sec-head wrap">
        <h2 className="title dot">{pricing.title}</h2>
        <div className="price-side">
          <p className="sec-lede">{pricing.lede}</p>
          <div className="switch" role="group" aria-label="Facturation" data-switch>
            <button
              className="switch-opt"
              type="button"
              aria-pressed="true"
              data-mode="project"
            >
              {pricing.projectMode}
            </button>
            <button
              className="switch-opt"
              type="button"
              aria-pressed="false"
              data-mode="month"
            >
              {pricing.monthMode}
            </button>
          </div>
        </div>
      </div>
      <div className="plans wrap" data-unfold>
        {pricing.plans.map((plan) => (
          <article
            key={plan.name}
            className={`plan${plan.featured ? " plan--main" : ""}`}
          >
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-for">{plan.description}</p>
            <p className="plan-price">
              <span
                className="price"
                data-project={plan.projectPrice}
                data-month={plan.monthPrice}
              >
                {plan.projectPrice}
              </span>
              <span
                className="per"
                data-project={plan.projectPer}
                data-month={plan.monthPer}
              >
                {plan.projectPer}
              </span>
            </p>
            <ul className="plan-list">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Btn href="#contact" variant={plan.featured ? "light" : "default"}>
              Demander
            </Btn>
          </article>
        ))}
      </div>
      <div className="price-note wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="price-face"
          src={pricing.noteImage.src}
          alt={pricing.noteImage.alt}
          width={pricing.noteImage.width}
          height={pricing.noteImage.height}
          loading="lazy"
        />
        <p>{pricing.note}</p>
        <a className="link link--under" href={pricing.noteCta.href}>
          {pricing.noteCta.label}
        </a>
      </div>
    </section>
  );
}
