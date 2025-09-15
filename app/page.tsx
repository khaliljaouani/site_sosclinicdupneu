import HeroVideo from "@/components/HeroVideo";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import Zones from "@/components/Zones";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <HeroVideo />
      <Services />
      <Steps />
      <Testimonials />
      <Zones />
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="mb-6 text-3xl font-bold">Nous contacter</h2>
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
