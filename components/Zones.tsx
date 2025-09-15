const zones = ["Paris (75)","Seine-et-Marne (77)","Yvelines (78)","Essonne (91)","Hauts-de-Seine (92)","Seine-Saint-Denis (93)","Val-de-Marne (94)","Val-d’Oise (95)"];
export default function Zones() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-6 text-2xl font-semibold">Nous intervenons dans toute l’Île-de-France</h2>
        <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {zones.map(z => <li key={z} className="rounded border bg-white p-3 text-sm">{z}</li>)}
        </ul>
      </div>
    </section>
  );
}
