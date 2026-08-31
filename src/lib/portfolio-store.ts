import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { put, head } from "@vercel/blob";
import type { PortfolioItem } from "@/lib/portfolio-types";
import seedItems from "@/data/portfolio-items.json";

const LOCAL_ITEMS_PATH = path.join(
  process.cwd(),
  "src/data/portfolio-items.json"
);
const LOCAL_UPLOADS_DIR = path.join(process.cwd(), "public/images/uploads");
const BLOB_JSON_PATH = "portfolio/portfolio-items.json";

function isBlobStorageEnabled(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

export async function readPortfolioItems(): Promise<PortfolioItem[]> {
  if (isBlobStorageEnabled()) {
    try {
      const meta = await head(BLOB_JSON_PATH);
      const response = await fetch(meta.url, { cache: "no-store" });
      if (response.ok) {
        return (await response.json()) as PortfolioItem[];
      }
    } catch {
      // Fallback naar seed bij eerste gebruik
    }
  }

  try {
    const raw = await readFile(LOCAL_ITEMS_PATH, "utf8");
    return JSON.parse(raw) as PortfolioItem[];
  } catch {
    return seedItems as PortfolioItem[];
  }
}

export async function writePortfolioItems(items: PortfolioItem[]): Promise<void> {
  const json = JSON.stringify(items, null, 2);

  if (isBlobStorageEnabled()) {
    await put(BLOB_JSON_PATH, json, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    });
  }

  await writeFile(LOCAL_ITEMS_PATH, json, "utf8");
}

export async function uploadPortfolioImage(
  file: File
): Promise<{ src: string; storage: "blob" | "local" }> {
  const ext = path.extname(file.name).toLowerCase() || ".jpg";
  const safeName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;

  if (isBlobStorageEnabled()) {
    const blob = await put(`portfolio/uploads/${safeName}`, file, {
      access: "public",
      addRandomSuffix: false,
    });
    return { src: blob.url, storage: "blob" };
  }

  await mkdir(LOCAL_UPLOADS_DIR, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(LOCAL_UPLOADS_DIR, safeName);
  await writeFile(filePath, buffer);
  return { src: `/images/uploads/${safeName}`, storage: "local" };
}

export function slugifyId(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}
