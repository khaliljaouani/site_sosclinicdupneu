import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import Zones from "@/components/Zones";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Barre de navigation */}
      <Header />

      {/* Section Hero avec vidéo et overlay */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Vidéo en arrière-plan */}
        <HeroVideo />

        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Texte par-dessus la vidéo */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-4xl font-extrabold md:text-6xl">
            SOS Clinic du Pneu
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Dépannage et changement de pneus <strong>24/7</strong> en Île-de-France — rapide et pro.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="tel:+33763720875" className="rounded-lg bg-red-600 px-6 py-3 font-semibold hover:bg-red-700 transition">
              📞 07 63 72 08 75
            </a>
            <a href="https://wa.me/33763720875" className="rounded-lg border border-white/50 px-6 py-3 hover:bg-white/10 transition">
              WhatsApp
            </a>
            <a href="#contact" className="rounded-lg border border-white/50 px-6 py-3 hover:bg-white/10 transition">
              Demander un dépannage
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <Services />

      {/* Étapes */}
      <Steps />

      {/* Témoignages */}
      <Testimonials />

      {/* Zones d’intervention */}
      <Zones />

      {/* Formulaire de contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="mb-6 text-3xl font-bold">Nous contacter</h2>
        <ContactForm />
      </section>

      {/* Pied de page */}
      <Footer />
    </>
  );
}
