import type { HomePageContent } from "@/domain/entities/site";

type WorkSectionProps = {
  work: HomePageContent["work"];
};

export function WorkSection({ work }: WorkSectionProps) {
  return (
    <section id="work" className="work" data-kind="projects">
      <div className="sec-head wrap">
        <h2 className="title dot">{work.title}</h2>
        <p className="sec-lede">{work.lede}</p>
      </div>
      <div className="work-grid wrap">
        {work.projects.map((project) => (
          <a
            key={project.name}
            className={`project${project.wide ? " project--wide" : ""}`}
            href={project.href}
          >
            <div className="project-media" data-mask>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                loading="lazy"
              />
            </div>
            <div className="project-meta">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-kind">{project.kind}</p>
              <p className="project-year">{project.year}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
