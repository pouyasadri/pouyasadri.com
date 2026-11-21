import type { HomePageContent } from "@/domain/entities/site";

type JournalSectionProps = {
  journal: HomePageContent["journal"];
};

export function JournalSection({ journal }: JournalSectionProps) {
  return (
    <section id="journal" className="journal" data-kind="blog">
      <div className="sec-head wrap">
        <h2 className="h2">{journal.title}</h2>
        <div className="price-side">
          <p className="sec-lede">{journal.lede}</p>
          <a className="link link--under" href={journal.allHref}>
            {journal.allLabel}
          </a>
        </div>
      </div>
      <div className="posts wrap">
        {journal.posts.map((post) => (
          <a key={post.title} className="post" href={post.href}>
            <figure className="post-photo" data-inner>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image.src}
                alt={post.image.alt}
                width={post.image.width}
                height={post.image.height}
                loading="lazy"
              />
            </figure>
            <p className="post-date">{post.date}</p>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-text">{post.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
