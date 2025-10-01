import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Attorneys from "@/components/Attorneys";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Attorneys />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}