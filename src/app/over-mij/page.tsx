import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About } from "@/components/sections/About";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Over mij",
  description: `${siteContent.about.title} – ${siteContent.business.name}, schminkster in ${siteContent.business.serviceArea}.`,
  alternates: { canonical: "/over-mij" },
};

export default function OverMijPage() {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
