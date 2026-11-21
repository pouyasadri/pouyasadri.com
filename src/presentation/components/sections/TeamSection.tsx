import type { HomePageContent } from "@/domain/entities/site";

type TeamSectionProps = {
  team: HomePageContent["team"];
};

export function TeamSection({ team }: TeamSectionProps) {
  return (
    <section id="team" className="team" data-kind="team">
      <div className="sec-head wrap">
        <h2 className="h2">{team.title}</h2>
        <div className="price-side">
          <p className="sec-lede">{team.lede}</p>
          <a className="link link--under" href={team.joinHref}>
            {team.joinLabel}
          </a>
        </div>
      </div>
      <ul className="people wrap" data-fan>
        {team.members.map((member) => (
          <li key={member.name} className="member">
            <figure className="member-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.image.src}
                alt={member.image.alt}
                width={member.image.width}
                height={member.image.height}
                loading="lazy"
              />
            </figure>
            <p className="member-name">{member.name}</p>
            <p className="member-role">{member.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
