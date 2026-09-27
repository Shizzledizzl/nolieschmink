import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlitterTattoos } from "@/components/sections/GlitterTattoos";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Glitter tattoos",
  description: siteContent.seo.pages.glitterTattoos,
  alternates: { canonical: "/glitter-tattoos" },
};

export default function GlitterTattoosPage() {
  return (
    <>
      <Header />
      <main>
        <GlitterTattoos />
      </main>
      <Footer />
    </>
  );
}
