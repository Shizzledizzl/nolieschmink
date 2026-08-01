import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <WorkPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
