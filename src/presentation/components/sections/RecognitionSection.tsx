import type { HomePageContent } from "@/domain/entities/site";

type RecognitionSectionProps = {
  recognition: HomePageContent["recognition"];
};

export function RecognitionSection({ recognition }: RecognitionSectionProps) {
  return (
    <section id="recognition" className="recognition" data-kind="awards">
      <div className="rec-grid wrap">
        <div className="rec-head">
          <h2 className="h2">{recognition.title}</h2>
          <p className="sec-lede">{recognition.lede}</p>
        </div>
        <ul className="rec-list" data-draw>
          {recognition.items.map((item) => (
            <li key={`${item.year}-${item.award}`} className="rec-row">
              <span className="rec-year">{item.year}</span>
              <span className="rec-award">{item.award}</span>
              <span className="rec-by">{item.by}</span>
              <span className="rec-work">{item.work}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
