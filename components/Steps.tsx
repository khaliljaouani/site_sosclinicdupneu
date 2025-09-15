export default function Steps() {
  const steps = [
    { n: 1, t: "Prise de contact", d: "Nous évaluons la situation et planifions l’intervention." },
    { n: 2, t: "Intervention sur place", d: "Diagnostic puis réparation ou remplacement immédiat." },
    { n: 3, t: "Suivi & garantie", d: "Conseils d’entretien et garantie sur l’intervention." }
  ];
  return (
    <section id="etapes" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-6 text-2xl font-semibold">C’est rapide et facile</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(s => (
            <div key={s.n} className="rounded-lg border bg-white p-6">
              <div className="text-4xl font-bold">{s.n}</div>
              <h3 className="mt-2 font-medium">{s.t}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
