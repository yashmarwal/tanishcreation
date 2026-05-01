import { useEffect, useMemo, useRef, useState } from "react";
import { CATEGORIES, Category, generateDesigns, Design } from "@/lib/catalogue";
import { designInquiry, waLink } from "@/lib/whatsapp";
import { X } from "lucide-react";

export default function CatalogueGrid() {
  const allDesigns = useMemo(() => generateDesigns(110), []);
  const [filter, setFilter] = useState<Category | "All">("All");
  const [selected, setSelected] = useState<Design | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => (filter === "All" ? allDesigns : allDesigns.filter((d) => d.category === filter)),
    [filter, allDesigns],
  );

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <div className="bg-background">
      {/* Filters */}
      <div
        ref={filterRef}
        className="sticky top-16 lg:top-20 z-30 bg-background/90 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex gap-2 overflow-x-auto no-scrollbar">
          {(["All", ...CATEGORIES, "Custom"] as const).map((c) => (
            <button
              key={c}
              onClick={() => c !== "Custom" && setFilter(c as Category | "All")}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                c === "Custom"
                  ? "bg-accent text-accent-foreground border-accent hover:scale-105"
                  : filter === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground/70 border-border hover:border-accent"
              }`}
            >
              {c === "Custom" ? (
                <a
                  href={waLink("Hi Tanish Creation! I'd like a custom design.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  + Custom
                </a>
              ) : (
                c
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <p className="text-sm text-foreground/60 mb-6">
          Showing <span className="text-accent font-medium">{filtered.length}</span> of 2000+
          designs
          {filter !== "All" && (
            <>
              {" "}
              in <span className="text-primary">{filter}</span>
            </>
          )}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((d, idx) => (
            <div key={d.id} className="contents">
              <button
                onClick={() => setSelected(d)}
                className="group text-left bg-card border border-border rounded-2xl overflow-hidden hover:shadow-warm hover:-translate-y-1 transition-all"
              >
                <div
                  className={`aspect-square ${d.patternClass} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="p-4">
                  <h3 className="font-display text-lg text-primary truncate">{d.name}</h3>
                  <div className="mt-1 flex items-center justify-between text-xs">
                    <span className="text-foreground/60">Min {d.minMetres}m</span>
                    <span className="text-accent font-semibold">From ₹{d.pricePerMetre}/m</span>
                  </div>
                </div>
              </button>
              {(idx + 1) % 15 === 0 && (
                <a
                  href={waLink("Hi Tanish Creation! I'd like to discuss a custom design.")}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-warm text-accent-foreground rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform"
                >
                  <p className="font-display text-2xl leading-tight">Custom Design Available</p>
                  <span className="text-sm mt-4 underline underline-offset-4">
                    Start on WhatsApp →
                  </span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-center justify-center p-4 fade-up"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card rounded-3xl max-w-2xl w-full overflow-hidden shadow-warm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`aspect-[16/9] ${selected.patternClass} relative`}>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-card/90 rounded-full p-2 hover:bg-card"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">{selected.category}</p>
              <h3 className="font-display text-4xl text-primary mt-2">{selected.name}</h3>
              <p className="mt-4 text-foreground/70">
                Hand-pulled screen print on premium base fabric. Custom colourways available. Lead
                time 7–10 days for orders above 100 metres.
              </p>
              <dl className="mt-6 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <dt className="text-foreground/50 text-xs uppercase">Code</dt>
                  <dd className="font-mono text-primary">{selected.id}</dd>
                </div>
                <div>
                  <dt className="text-foreground/50 text-xs uppercase">Min Order</dt>
                  <dd className="text-primary">{selected.minMetres} m</dd>
                </div>
                <div>
                  <dt className="text-foreground/50 text-xs uppercase">Price</dt>
                  <dd className="text-accent font-semibold">₹{selected.pricePerMetre}/m</dd>
                </div>
              </dl>
              <a
                href={designInquiry(selected.name)}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full justify-center items-center gap-2 bg-accent text-accent-foreground px-6 py-4 rounded-full font-medium hover:bg-accent/90 transition-all"
              >
                Order on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
