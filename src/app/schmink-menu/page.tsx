import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SchminkMenu } from "@/components/sections/SchminkMenu";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Schmink menu",
  description: `${siteContent.schminkMenu.subtitle} Kies je favoriete schmink bij ${siteContent.business.name}.`,
  alternates: { canonical: "/schmink-menu" },
};

export default function SchminkMenuPage() {
  return (
    <>
      <Header />
      <main>
        <SchminkMenu />
      </main>
      <Footer />
    </>
  );
}
