import { createGetHomePage } from "@/application/use-cases/get-home-page";
import { createSubmitContact } from "@/application/use-cases/submit-contact";
import { LogContactNotifier } from "@/infrastructure/contact/log-contact-notifier";
import { StaticSiteContentRepository } from "@/infrastructure/content/static-content-repository";

const contentRepository = new StaticSiteContentRepository();
const contactNotifier = new LogContactNotifier();

export const getHomePage = createGetHomePage(contentRepository);
export const submitContact = createSubmitContact(contactNotifier);
