import type { HomePageContent } from "@/domain/entities/site";
import { IconPlus } from "@/presentation/components/ui/IconPlus";

type FaqSectionProps = {
  faq: HomePageContent["faq"];
};

export function FaqSection({ faq }: FaqSectionProps) {
  return (
    <section id="faq" className="faq" data-kind="faq">
      <div className="faq-grid wrap">
        <div className="faq-side">
          <h2 className="title dot">{faq.title}</h2>
          <p className="sec-lede">{faq.lede}</p>
        </div>
        <div className="faq-list" data-accordion data-clip>
          {faq.items.map((item) => (
            <div key={item.question} className="faq-item" data-acc-item>
              <button
                className="faq-btn"
                type="button"
                aria-expanded="false"
                data-acc-btn
              >
                <span>{item.question}</span>
                <span className="icon-btn" aria-hidden="true">
                  <IconPlus />
                </span>
              </button>
              <div data-acc-panel>
                <div className="acc-in">
                  <p className="faq-a">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
