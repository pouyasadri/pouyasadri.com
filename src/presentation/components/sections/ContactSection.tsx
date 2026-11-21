import type { HomePageContent } from "@/domain/entities/site";
import { Btn } from "@/presentation/components/ui/Btn";
import { ContactForm } from "@/presentation/components/sections/ContactForm";

type ContactSectionProps = {
  contact: HomePageContent["contact"];
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="contact" data-kind="contact" data-loops>
      <div className="contact-panel">
        <div className="contact-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={contact.background.src}
            alt={contact.background.alt}
            width={contact.background.width}
            height={contact.background.height}
            loading="lazy"
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="grain" aria-hidden="true" />
        </div>
        <div className="contact-in">
          <div className="contact-copy">
            <h2 className="title dot" data-rise>
              {contact.title}
            </h2>
            <p className="contact-lede">{contact.lede}</p>
            <ul className="contact-notes">
              {contact.notes.map((note) => (
                <li key={note.title}>
                  <strong>{note.title}</strong> {note.text}
                </li>
              ))}
            </ul>
            <div className="person">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="person-photo"
                src={contact.person.image.src}
                alt={contact.person.image.alt}
                width={contact.person.image.width}
                height={contact.person.image.height}
                loading="lazy"
              />
              <div className="person-body">
                <p className="person-role">
                  {contact.person.role} <span>{contact.person.roleMuted}</span>
                </p>
                <p className="person-name">{contact.person.name}</p>
                <Btn href={contact.person.cta.href} size="sm">
                  {contact.person.cta.label}
                </Btn>
              </div>
            </div>
          </div>
          <ContactForm
            formTitle={contact.formTitle}
            successMessage={contact.successMessage}
            privacy={contact.privacy}
          />
        </div>
      </div>
    </section>
  );
}
