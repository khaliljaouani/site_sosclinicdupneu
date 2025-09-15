"use client";

export default function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Vidéo de fond */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/poster.jpg"
      />
      {/* Overlay assombrissant */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenu */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl font-extrabold md:text-6xl">SOS Clinic du Pneu</h1>
        <p className="mt-4 max-w-xl text-lg text-white/90">
          Dépannage & changement de pneus 24/7 en Île-de-France — rapide et pro.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="tel:+33600000000" className="btn-primary">📞 07 63 72 08 75</a>
          <a href="#contact" className="rounded-lg border border-white/50 px-6 py-3 transition hover:bg-white/10">
            Demander un dépannage
          </a>
        </div>
      </div>
    </section>
  );
}
