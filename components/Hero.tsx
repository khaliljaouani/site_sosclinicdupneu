export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-brand text-white">
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
          SOS Clinic du Pneu
        </h1>
        <p className="mt-4 text-lg text-white/90">
          Dépannage et changement de pneus <strong>24/7</strong> en Île-de-France
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="tel:+33763720875" className="btn-primary">📞 07 63 72 08 75</a>
          <a href="https://wa.me/33763720875" className="rounded-lg border border-white/50 px-6 py-3 transition hover:bg-white/10">WhatsApp</a>
          <a href="#contact" className="rounded-lg border border-white/50 px-6 py-3 transition hover:bg-white/10">Demander un dépannage</a>
        </div>
      </div>
    </section>
  );
}
