import type { ContactNotifier } from "@/application/ports/contact-notifier";
import type { ContactMessage } from "@/domain/entities/site";

export class LogContactNotifier implements ContactNotifier {
  async notify(message: ContactMessage): Promise<void> {
    console.info("[contact]", {
      name: message.name,
      email: message.email,
      messageLength: message.message.length,
    });
  }
}
