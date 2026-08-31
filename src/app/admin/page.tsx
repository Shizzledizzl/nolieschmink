import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdminPortal } from "@/components/admin/AdminPortal";
import { isAdminAuthenticated } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const authed = await isAdminAuthenticated();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface-alt/40">
        <AdminPortal initialAuthed={authed} />
      </main>
      <Footer />
    </>
  );
}
