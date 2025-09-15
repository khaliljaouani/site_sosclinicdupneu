"use client";
import { useState } from "react";
import { motion } from "framer-motion";


export default function ContactForm() {
  const [state, setState] = useState<"idle"|"loading"|"sent"|"error">("idle");
  return (
    <form id="contact" className="grid gap-3" onSubmit={async (e) => {
      e.preventDefault();
      setState("loading");
      const form = e.currentTarget as HTMLFormElement;
      const data = Object.fromEntries(new FormData(form).entries());
      try {
        const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
        if (!res.ok) throw new Error();
        setState("sent"); form.reset();
      } catch { setState("error"); }
    }}>
      <input name="email" type="email" required placeholder="Adresse e-mail" className="rounded border p-3" />
      <input name="name" required placeholder="Nom" className="rounded border p-3" />
      <input name="phone" required placeholder="Téléphone" className="rounded border p-3" />
      <textarea name="message" required placeholder="Message" className="min-h-28 rounded border p-3"></textarea>
      <input name="hp_field" type="text" className="hidden" tabIndex={-1} autoComplete="off" />
      <button disabled={state==="loading"} className="rounded bg-black px-5 py-3 text-white">
        {state==="loading" ? "Envoi..." : "Envoyer"}
      </button>
      {state==="sent" && <p className="text-green-600 text-sm">Message envoyé, nous vous rappelons rapidement.</p>}
      {state==="error" && <p className="text-red-600 text-sm">Erreur d’envoi. Réessayez ou appelez-nous.</p>}
    </form>
  );
}
