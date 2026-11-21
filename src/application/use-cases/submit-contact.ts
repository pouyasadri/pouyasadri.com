import { z } from "zod";
import type { ContactNotifier } from "@/application/ports/contact-notifier";

export const contactMessageSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  message: z.string().trim().max(5000).optional().default(""),
});

export type SubmitContactInput = z.infer<typeof contactMessageSchema>;

export function createSubmitContact(contactNotifier: ContactNotifier) {
  return async function submitContact(input: unknown) {
    const message = contactMessageSchema.parse(input);
    await contactNotifier.notify(message);
    return { ok: true as const };
  };
}
