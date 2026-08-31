import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Tarief",
  description: siteContent.seo.pages.tarief,
  alternates: { canonical: "/tarief" },
};

export default function TariefPage() {
  return (
    <>
      <Header />
      <main>
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
