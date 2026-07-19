"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, isPlaceholder, siteContent } from "@/data/siteContent";

export function WhatsAppFloat() {
  const number = siteContent.contact.whatsappNumber;
  if (isPlaceholder(number) || !number.replace(/\D/g, "")) {
    // Toon knop toch met placeholder-nummer zodat de UI zichtbaar is;
    // link werkt pas na invullen van een echt nummer.
  }

  const href = getWhatsAppUrl();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-105 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6"
      aria-label="Chat via WhatsApp – opent in een nieuw venster"
    >
      <MessageCircle className="h-7 w-7" aria-hidden strokeWidth={2} />
    </a>
  );
}
