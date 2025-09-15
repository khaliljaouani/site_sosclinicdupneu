const testimonials = [
  { name: "Gregory M.", text: "Service efficace, rapide et organisé. Bravo." },
  { name: "Tania L.", text: "Rdv pris le jour même, travail soigné. Je recommande." },
  { name: "Hilaire S.", text: "Très pro et rapide. Intervention parfaite !" },
  { name: "Pierre L.", text: "Ponctualité, efficacité. Réparation à bon prix." }
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-6 text-2xl font-semibold">Témoignages</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map(t => (
          <blockquote key={t.name} className="rounded-lg border p-6">
            <p className="text-sm text-slate-700">“{t.text}”</p>
            <footer className="mt-3 text-xs text-slate-500">— {t.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
