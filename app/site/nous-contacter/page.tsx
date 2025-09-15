import ContactForm from "@/components/ContactForm";
export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Nous contacter</h1>
      <p className="mt-2 text-slate-700">Réponse rapide, 24/7.</p>
      <div className="mt-6"><ContactForm /></div>
    </div>
  );
}
