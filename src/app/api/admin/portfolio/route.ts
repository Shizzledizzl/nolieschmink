import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import {
  readPortfolioItems,
  writePortfolioItems,
  uploadPortfolioImage,
  slugifyId,
} from "@/lib/portfolio-store";
import type { PortfolioItem, PortfolioItemKind } from "@/lib/portfolio-types";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Niet ingelogd." }, { status: 401 });
  }

  const items = await readPortfolioItems();
  return NextResponse.json({ items });
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Niet ingelogd." }, { status: 401 });
  }

  const formData = await request.formData();
  const title = String(formData.get("title") ?? "").trim();
  const alt = String(formData.get("alt") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const kind = String(formData.get("kind") ?? "oefengezicht") as PortfolioItemKind;
  const file = formData.get("file");

  if (!title || !alt || !category) {
    return NextResponse.json(
      { error: "Titel, beschrijving en categorie zijn verplicht." },
      { status: 400 }
    );
  }

  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "Kies een foto." }, { status: 400 });
  }

  const items = await readPortfolioItems();
  let id = slugifyId(title);
  if (items.some((item) => item.id === id)) {
    id = `${id}-${Date.now().toString(36)}`;
  }

  const uploaded = await uploadPortfolioImage(file);
  const newItem: PortfolioItem = {
    id,
    title,
    alt,
    category,
    kind,
    src: uploaded.src,
  };

  items.push(newItem);
  await writePortfolioItems(items);

  return NextResponse.json({ item: newItem });
}

export async function DELETE(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Niet ingelogd." }, { status: 401 });
  }

  const { id } = (await request.json()) as { id?: string };
  if (!id) {
    return NextResponse.json({ error: "Geen item-id opgegeven." }, { status: 400 });
  }

  const items = await readPortfolioItems();
  const next = items.filter((item) => item.id !== id);

  if (next.length === items.length) {
    return NextResponse.json({ error: "Item niet gevonden." }, { status: 404 });
  }

  await writePortfolioItems(next);
  return NextResponse.json({ ok: true });
}
