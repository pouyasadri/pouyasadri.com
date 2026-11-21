import type { HomePageContent } from "@/domain/entities/site";

type ReviewsSectionProps = {
  reviews: HomePageContent["reviews"];
};

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="reviews" data-kind="reviews">
      <div className="rev-head wrap">
        <h2 className="title dot">{reviews.title}</h2>
        <div className="rev-score">
          <p className="score">
            <span className="score-num">{reviews.score}</span>
            <span className="score-of">{reviews.scoreOf}</span>
          </p>
          <p className="score-text">{reviews.scoreText}</p>
          <a className="link link--under" href={reviews.leaveReviewHref}>
            {reviews.leaveReviewLabel}
          </a>
        </div>
      </div>
      <div className="marquee" data-marquee>
        <ul className="marquee-track">
          {reviews.items.map((item) => (
            <li key={`${item.name}-${item.role}`} className="review">
              <p className="review-text">{item.text}</p>
              <div className="review-by">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="review-face"
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  loading="lazy"
                />
                <p className="review-name">
                  {item.name}
                  <span>{item.role}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
