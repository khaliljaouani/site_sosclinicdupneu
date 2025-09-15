import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-4">
        <div className="space-y-2">
          <div className="font-semibold">SOS Clinic Du Pneu</div>
          <a className="text-sm" href="tel:+33763720875">07 63 72 08 75</a><br/>
          <a className="text-sm" href="https://wa.me/33763720875">WhatsApp</a>
        </div>
        <div>
          <div className="font-semibold">Liens utiles</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/zone-intervention">Zone d’intervention</Link></li>
            <li><Link href="/a-propos">À propos</Link></li>
            <li><Link href="/mentions-legales">Mentions légales</Link></li>
            <li><Link href="/nous-contacter">Nous contacter</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="font-semibold">Demander un dépannage</div>
          <p className="mt-2 text-sm text-slate-600">Disponible 24/7 en Île-de-France.</p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-slate-500">
        COPYRIGHT © {new Date().getFullYear()} SOS Clinic Du Pneu
      </div>
    </footer>
  );
}
