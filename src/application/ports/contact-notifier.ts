import type { ContactMessage } from "@/domain/entities/site";

export interface ContactNotifier {
  notify(message: ContactMessage): Promise<void>;
}
