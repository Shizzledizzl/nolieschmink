"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { PortfolioItem, PortfolioItemKind } from "@/lib/portfolio-types";

const CATEGORIES = [
  { id: "prinsessen", label: "Prinsessen & Fantasie" },
  { id: "helden", label: "Helden & Figuren" },
  { id: "dieren", label: "Dieren" },
  { id: "bloemen", label: "Bloemen en glitters" },
  { id: "thema", label: "Thema" },
  { id: "armdesigns", label: "Arm Designs" },
];

const KINDS: { id: PortfolioItemKind; label: string }[] = [
  { id: "oefengezicht", label: "Schmink menu (oefengezicht)" },
  { id: "arm", label: "Arm design" },
  { id: "gezicht", label: "Portfolio (echte foto)" },
];

type AdminPortalProps = {
  initialAuthed: boolean;
};

export function AdminPortal({ initialAuthed }: AdminPortalProps) {
  const [authed, setAuthed] = useState(initialAuthed);
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(initialAuthed);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [alt, setAlt] = useState("");
  const [category, setCategory] = useState("dieren");
  const [kind, setKind] = useState<PortfolioItemKind>("oefengezicht");
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const loadItems = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/portfolio");
      if (res.status === 401) {
        setAuthed(false);
        return;
      }
      const data = (await res.json()) as { items: PortfolioItem[] };
      setItems(data.items);
    } catch {
      setError("Kon foto's niet laden.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authed) loadItems();
  }, [authed]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) {
      setError("Onjuiste inloggegevens.");
      return;
    }
    setAuthed(true);
    setPassword("");
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setItems([]);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Weet je zeker dat je deze foto wilt verwijderen?")) return;
    setError("");
    const res = await fetch("/api/admin/portfolio", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) {
      setError("Verwijderen mislukt.");
      return;
    }
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Kies een foto om te uploaden.");
      return;
    }
    setSubmitting(true);
    setError("");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("alt", alt);
    formData.append("category", category);
    formData.append("kind", kind);
    formData.append("file", file);

    const res = await fetch("/api/admin/portfolio", {
      method: "POST",
      body: formData,
    });
    const data = (await res.json()) as { item?: PortfolioItem; error?: string };
    setSubmitting(false);

    if (!res.ok) {
      setError(data.error ?? "Upload mislukt.");
      return;
    }

    if (data.item) {
      setItems((current) => [...current, data.item!]);
    }
    setTitle("");
    setAlt("");
    setFile(null);
    const input = document.getElementById("admin-file") as HTMLInputElement | null;
    if (input) input.value = "";
  };

  if (!authed) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-4 py-16">
        <form
          onSubmit={handleLogin}
          className="w-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-lavender/40"
        >
          <h1 className="font-display text-2xl font-semibold text-purple-deep">
            Admin
          </h1>
          <p className="mt-2 text-sm text-ink-muted">
            Log in om foto&apos;s te beheren.
          </p>
          {error && (
            <p className="mt-4 rounded-xl bg-peach/30 px-3 py-2 text-sm text-ink" role="alert">
              {error}
            </p>
          )}
          <label className="mt-6 block text-sm font-medium text-ink">
            Gebruikersnaam
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-lavender/50 px-4 py-2.5"
              autoComplete="username"
              required
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-ink">
            Wachtwoord
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-lavender/50 px-4 py-2.5"
              autoComplete="current-password"
              required
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-purple-soft py-3 font-semibold text-white hover:bg-purple-deep"
          >
            Inloggen
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold text-purple-deep">
            Foto&apos;s beheren
          </h1>
          <p className="mt-1 text-sm text-ink-muted">
            Voeg foto&apos;s toe of verwijder ze. Wijzigingen zijn direct zichtbaar op de site.
          </p>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="rounded-full border border-lavender/50 px-4 py-2 text-sm font-semibold text-purple-deep hover:bg-lavender/20"
        >
          Uitloggen
        </button>
      </div>

      {error && (
        <p className="mt-4 rounded-xl bg-peach/30 px-4 py-3 text-sm text-ink" role="alert">
          {error}
        </p>
      )}

      <form
        onSubmit={handleAdd}
        className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-lavender/40 sm:p-8"
      >
        <h2 className="font-display text-xl font-semibold text-ink">
          Nieuwe foto toevoegen
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-ink">
            Titel
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-lavender/50 px-4 py-2.5"
              required
            />
          </label>
          <label className="block text-sm font-medium text-ink">
            Categorie
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-lavender/50 px-4 py-2.5"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-medium text-ink sm:col-span-2">
            Beschrijving (alt-tekst)
            <input
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-lavender/50 px-4 py-2.5"
              required
            />
          </label>
          <label className="block text-sm font-medium text-ink">
            Waar komt deze foto?
            <select
              value={kind}
              onChange={(e) => setKind(e.target.value as PortfolioItemKind)}
              className="mt-1.5 w-full rounded-xl border border-lavender/50 px-4 py-2.5"
            >
              {KINDS.map((entry) => (
                <option key={entry.id} value={entry.id}>
                  {entry.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-medium text-ink">
            Foto
            <input
              id="admin-file"
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className="mt-1.5 w-full rounded-xl border border-lavender/50 px-4 py-2.5 file:mr-3 file:rounded-lg file:border-0 file:bg-lavender/30 file:px-3 file:py-1.5"
              required
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="mt-5 rounded-full bg-purple-soft px-6 py-3 font-semibold text-white hover:bg-purple-deep disabled:opacity-60"
        >
          {submitting ? "Bezig met uploaden…" : "Foto toevoegen"}
        </button>
      </form>

      <div className="mt-10">
        <h2 className="font-display text-xl font-semibold text-ink">
          Alle foto&apos;s ({items.length})
        </h2>
        {loading ? (
          <p className="mt-4 text-ink-muted">Laden…</p>
        ) : (
          <ul className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-lavender/30"
              >
                <div className="relative aspect-square bg-surface-alt">
                  {item.src ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="200px"
                      unoptimized={item.src.startsWith("http")}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-ink-muted">
                      Binnenkort
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <p className="font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-xs text-ink-muted">{item.category}</p>
                  {!item.comingSoon && item.src && (
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="mt-3 w-full rounded-xl bg-peach/40 py-2 text-sm font-semibold text-ink hover:bg-peach/60"
                    >
                      Verwijderen
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
