import { createFileRoute } from "@tanstack/react-router";
import CatalogueGrid from "@/components/CatalogueGrid";

export const Route = createFileRoute("/catalogue")({
  head: () => ({
    meta: [
      { title: "Catalogue — 2000+ Screen Print Fabric Designs | Tanish Creation" },
      {
        name: "description",
        content:
          "Browse 2000+ screen printed fabric designs across floral, paisley, jaal, botanical, animal and minimal categories. Bulk orders from 100m at ₹65/m.",
      },
      { property: "og:title", content: "Catalogue — 2000+ Designs | Tanish Creation" },
      {
        property: "og:description",
        content: "Browse our full design archive. Floral, paisley, jaal, and more.",
      },
    ],
  }),
  component: CataloguePage,
});

function CataloguePage() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-12 bg-gradient-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">The Archive</p>
          <h1 className="font-display text-5xl lg:text-7xl text-primary leading-[0.95] text-balance">
            2000+ designs. <em className="text-accent">One archive.</em>
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl">
            Filter by category, click any design for details, and order on WhatsApp. Custom designs
            available — every fifteenth tile is a fresh canvas.
          </p>
        </div>
      </section>
      <CatalogueGrid />
    </>
  );
}
