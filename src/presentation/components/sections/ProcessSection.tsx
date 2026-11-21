import type { HomePageContent } from "@/domain/entities/site";

type ProcessSectionProps = {
  process: HomePageContent["process"];
};

export function ProcessSection({ process }: ProcessSectionProps) {
  return (
    <section id="process" className="process" data-kind="process">
      <div className="split-track">
        <div className="split" data-split>
          <h2 className="title dot split-title">{process.splitTitle}</h2>
          <figure className="split-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={process.splitImage.src}
              alt={process.splitImage.alt}
              width={process.splitImage.width}
              height={process.splitImage.height}
              loading="lazy"
            />
            <figcaption className="split-cap">{process.splitCap}</figcaption>
          </figure>
        </div>
      </div>
      <div className="steps wrap">
        <div className="sec-head">
          <h3 className="h2">{process.title}</h3>
          <p className="sec-lede">{process.lede}</p>
        </div>
        <div className="steps-track">
          <span className="steps-line" aria-hidden="true" />
          <ol className="step-list">
            {process.steps.map((step) => (
              <li key={step.title} className="step">
                <span className="step-node" aria-hidden="true" />
                <p className="step-when">{step.when}</p>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
