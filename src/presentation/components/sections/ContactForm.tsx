"use client";

import { useState, type FormEvent } from "react";

type ContactFormProps = {
  formTitle: string;
  successMessage: string;
  privacy: string;
};

export function ContactForm({
  formTitle,
  successMessage,
  privacy,
}: ContactFormProps) {
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    setPending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message") ?? "",
        }),
      });

      if (!response.ok) {
        throw new Error("request failed");
      }

      setStatus(successMessage);
      form.reset();
    } catch {
      setStatus("Une erreur est survenue. Réessayez ou écrivez à info@pouyasadri.com.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <p className="form-title">{formTitle}</p>
      <label className="field">
        <span>Nom</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Camille Dupont"
          required
        />
      </label>
      <label className="field">
        <span>Email</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="camille@startup.fr"
          required
        />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Produit, délai, stack actuelle"
        />
      </label>
      <button className="btn" type="submit" disabled={pending}>
        {pending ? "Envoi…" : "Envoyer"}
      </button>
      {status ? (
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
      ) : null}
      <p className="form-small">{privacy}</p>
    </form>
  );
}
