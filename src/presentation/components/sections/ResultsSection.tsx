import type { HomePageContent } from "@/domain/entities/site";
import { Btn } from "@/presentation/components/ui/Btn";

type ResultsSectionProps = {
  results: HomePageContent["results"];
};

export function ResultsSection({ results }: ResultsSectionProps) {
  return (
    <section id="results" className="results" data-kind="results">
      <div className="sec-head wrap">
        <h2 className="h2">{results.title}</h2>
        <p className="sec-lede">{results.lede}</p>
      </div>
      <div className="bento wrap" data-fixed="4">
        <article className="tile tile-case">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="tile-photo"
            src={results.caseImage.src}
            alt={results.caseImage.alt}
            width={results.caseImage.width}
            height={results.caseImage.height}
            loading="lazy"
            data-speed=".05"
          />
          <div className="tile-case-in">
            <p className="tile-label">{results.caseLabel}</p>
            <p className="tile-brand">{results.caseBrand}</p>
            <p className="tile-sub">{results.caseSub}</p>
            <Btn href={results.caseCta.href} variant="light" size="sm">
              {results.caseCta.label}
            </Btn>
          </div>
        </article>
        <article className="tile tile-figs">
          {results.figs.map((fig) => (
            <div key={fig.label} className="fig">
              <p className="fig-num">{fig.num}</p>
              <p className="fig-label">{fig.label}</p>
            </div>
          ))}
          <blockquote className="tile-quote">
            <p>{results.quote}</p>
            <footer>{results.quoteFooter}</footer>
          </blockquote>
        </article>
        <article className="tile tile-ring" data-chart="ring">
          <div className="ring-box">
            <svg className="ring" viewBox="0 0 120 120" aria-hidden="true">
              <circle className="ring-bg" cx="60" cy="60" r="52" pathLength="100" />
              <circle className="ring-fg" cx="60" cy="60" r="52" pathLength="100" />
            </svg>
            <p className="ring-num">{results.ringValue}</p>
          </div>
          <p className="tile-title">{results.ringTitle}</p>
          <p className="tile-text">{results.ringText}</p>
        </article>
        <article className="tile tile-bars">
          <div>
            <p className="fig-num">{results.barsTitle}</p>
            <p className="fig-label">{results.barsLabel}</p>
          </div>
          <ul className="bars" data-chart="bars">
            {results.bars.map((bar) => (
              <li key={bar.label}>
                <span className="bar-val">{bar.value}</span>
                <span className="bar" />
                <span className="bar-label">{bar.label}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
