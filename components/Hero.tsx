import HeroVideo from "@/components/HeroVideo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Vidéo de fond */}
      <HeroVideo />

      {/* Voile sombre par dessus la vidéo */}
      <div className="absolute inset-0 z-10 bg-black/45" />

      {/* Bloc texte */}
      <div className="relative z-20 flex min-h-[80vh] items-center">
        <div className="mx-auto max-w-6xl w-full px-4">
          <div className="max-w-3xl rounded-2xl bg-black/55 backdrop-blur-sm px-6 py-8 md:px-10 md:py-12 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              SOS Clinic du Pneu
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/95">
              Dépannage et changement de pneus <strong>24/7</strong> en Île-de-France — rapide et pro.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+33763720875"
                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-medium shadow-lg hover:bg-red-700 transition"
              >
                📞 07 63 72 08 75
              </a>
              <a
                href="https://wa.me/33763720875"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/60 px-6 py-3 font-medium hover:bg-white/10 transition"
              >
                WhatsApp
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/60 px-6 py-3 font-medium hover:bg-white/10 transition"
              >
                Demander un dépannage
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
