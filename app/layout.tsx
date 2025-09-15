import "./globals.css";
import type { Metadata } from "next";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "SOS Clinic du Pneu",
  description: "Dépannage & changement de pneus à domicile – Île-de-France, 24/7.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-dvh bg-white text-slate-900">
        {children}
        <FloatingActions
          phone="+33763720875"
          whatsapp="33763720875"
          snapchat="sosclinicdupneu"
          message="Bonjour, j’ai besoin d’un dépannage pneu svp."
        />
      </body>
    </html>
  );
}
