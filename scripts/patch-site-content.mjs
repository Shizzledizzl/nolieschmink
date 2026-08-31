import fs from "fs";

let c = fs.readFileSync("src/data/siteContent.ts", "utf8");

if (!c.includes("import portfolioItems")) {
  c = c.replace(
    "export const siteContent",
    `import portfolioItems from "./portfolio-items.json";
import type { PortfolioItem, PortfolioItemKind } from "@/lib/portfolio-types";

export type { PortfolioItem, PortfolioItemKind };

export const siteContent`
  );
}

c = c.replace(
  /    items: \[[\s\S]*?    \],\r?\n  \},\r?\n\r?\n  \/\*\*\r?\n   \* MIJN WERK/,
  `    items: portfolioItems as PortfolioItem[],
  },

  /**
   * MIJN WERK`
);

fs.writeFileSync("src/data/siteContent.ts", c);
console.log("Patched siteContent.ts");
