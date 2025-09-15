"use client";                    // 👉 doit être la toute première ligne
import { motion } from "framer-motion"; // 👉 juste après

export default function Services() {
  const items = [
    { title: "Dépannage à domicile", desc: "Intervention rapide, réparation ou remplacement immédiat." },
    { title: "Montage & équilibrage", desc: "Équipement mobile professionnel pour un service soigné." },
    { title: "Gestion de flotte", desc: "Solutions sur mesure pour les pros et utilitaires." },
  ];

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center text-3xl font-bold tracking-tight"
      >
        Nos Services
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            className="card-hover"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-red-600">{it.title}</h3>
            <p className="mt-3 text-sm text-slate-700">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
