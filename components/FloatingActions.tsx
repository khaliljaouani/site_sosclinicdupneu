"use client";
import { motion } from "framer-motion";


type Props = {
  phone?: string;          // ex: "+33689143671"
  whatsapp?: string;       // ex: "33689143671" (sans +, format international)
  snapchat?: string;       // ex: "ton_snap"
  message?: string;        // message WhatsApp pré-rempli
};

export default function FloatingActions({
  phone = "+33763720875",
  whatsapp = "33763720875",
  snapchat = "sosclinicdupneu",
  message = "Bonjour, j’ai besoin d’un dépannage pneu svp."
}: Props) {
  // URLs
  const telHref = `tel:${phone}`;
  const waHref = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
  // Snapchat: deep link app (iOS/Android) + fallback web
  const snapApp = `snapchat://add/${snapchat}`;
  const snapWeb = `https://www.snapchat.com/add/${snapchat}`;

  return (
    <div className="fixed right-4 top-1/2 z-[60] -translate-y-1/2 space-y-3">
      {/* Appel */}
      <a
        href={telHref}
        aria-label="Appeler"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg ring-1 ring-black/10 transition hover:scale-105 hover:shadow-xl"
      >
        {/* icône téléphone */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="transition group-hover:scale-110">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.15a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92Z" fill="currentColor"/>
        </svg>
      </a>

      {/* WhatsApp */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-1 ring-black/10 transition hover:scale-105 hover:shadow-xl"
      >
        {/* icône WhatsApp */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="transition group-hover:scale-110">
          <path d="M20 3.9A10 10 0 0 0 4.1 19.8L3 23l3.3-1.1A10 10 0 1 0 20 3.9Z" fill="currentColor" opacity=".2"/>
          <path d="M12 2a10 10 0 0 0-8.9 14.5L2 22l5.6-1.1A10 10 0 1 0 12 2Zm5.6 14.3c-.2.6-1 1-1.6 1.1-.4 0-.9.1-1.5-.1a12.8 12.8 0 0 1-5.4-3.1 10.1 10.1 0 0 1-2.2-3.3c-.2-.5-.2-1 0-1.5.1-.3.5-.7 1-1 .2-.1.5-.1.7 0h.5c.1 0 .3.2.4.5.1.3.6 1.5.6 1.6.1.2 0 .4-.1.5l-.4.5c-.2.2-.2.4 0 .7.5.8 1.1 1.5 1.9 2.1.6.4 1 .6 1.1.4l.6-.7c.1-.2.3-.2.5-.1.2.1 1.2.5 1.6.6l.5.1c.2 0 .4 0 .6.3.2.2.2.8.1 1.1Z" fill="currentColor"/>
        </svg>
      </a>

      {/* Snapchat */}
      <a
        href={snapApp}
        onClick={(e) => {
          // fallback web si l'app n’ouvre pas
          setTimeout(() => {
            if (document.visibilityState === "visible") window.open(snapWeb, "_blank");
          }, 600);
        }}
        aria-label="Snapchat"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFC00] text-black shadow-lg ring-1 ring-black/10 transition hover:scale-105 hover:shadow-xl"
      >
        {/* fantôme Snapchat simple */}
        <svg width="22" height="22" viewBox="0 0 24 24" className="transition group-hover:scale-110">
          <path d="M12 3c3 0 5 2.2 5 5.2v.3c0 .5.3 1 .8 1.2.9.4 1.7 1.2 1.7 2.3 0 1.1-1 1.7-2 1.9-.2 0-.3.3-.2.5.3.7 1.3.9 1.8 1 .3 0 .6.3.6.6 0 .6-.8 1.1-1.7 1.1-.6 0-1.2-.1-1.7-.4-.2-.1-.5 0-.6.2-.7 1.2-2.1 2-3.7 2s-3-.8-3.7-2c-.1-.2-.4-.3-.6-.2-.5.3-1.1.4-1.7.4-.9 0-1.7-.5-1.7-1.1 0-.3.3-.6.6-.6.5-.1 1.5-.3 1.8-1 0-.2 0-.5-.2-.5-1-.2-2-.8-2-1.9 0-1.1.8-1.9 1.7-2.3.5-.2.8-.7.8-1.2v-.3C7 5.2 9 3 12 3Z" fill="currentColor"/>
        </svg>
      </a>
    </div>
  );
}
