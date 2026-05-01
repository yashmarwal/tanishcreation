import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useMemo, useState, useRef, useEffect } from "react";
import { w as waLink, d as designInquiry } from "./router-CsQB7GoR.js";
import { X } from "lucide-react";
import "@tanstack/react-router";
import "lenis";
const CATEGORIES = [
  "Floral",
  "Botanical & Leaf",
  "Paisley",
  "Animal & Heritage",
  "Festive Jaal",
  "Minimal Linear"
];
const CATEGORY_COUNTS = {
  Floral: 500,
  "Botanical & Leaf": 400,
  Paisley: 300,
  "Animal & Heritage": 200,
  "Festive Jaal": 300,
  "Minimal Linear": 200
};
const PATTERN_CLASS = {
  Floral: "pat-floral-1",
  "Botanical & Leaf": "pat-leaf",
  Paisley: "pat-paisley",
  "Animal & Heritage": "pat-animal",
  "Festive Jaal": "pat-jaal",
  "Minimal Linear": "pat-minimal"
};
const NAMES = {
  Floral: [
    "Rose Cluster",
    "Marigold Bloom",
    "Hibiscus Drift",
    "Lotus Pond",
    "Wild Daisy",
    "Champa Flow",
    "Mogra Spray",
    "Peony Glow",
    "Tulip Whisper",
    "Jasmine Vine"
  ],
  "Botanical & Leaf": [
    "Monstera Drop",
    "Banyan Shade",
    "Neem Leaf",
    "Fern Cascade",
    "Banana Frond",
    "Tulsi Sprig",
    "Areca Palm",
    "Curry Leaf",
    "Eucalyptus Mist",
    "Bay Branch"
  ],
  Paisley: [
    "Ambi Jaal",
    "Kairi Bloom",
    "Mango Curl",
    "Royal Paisley",
    "Boteh Classic",
    "Persian Mango",
    "Mughal Ambi",
    "Twin Paisley",
    "Heritage Boteh",
    "Paisley Storm"
  ],
  "Animal & Heritage": [
    "Peacock Court",
    "Elephant Procession",
    "Tiger Stripe",
    "Deer Glade",
    "Camel March",
    "Horse Stride",
    "Sparrow Flight",
    "Lion Crest",
    "Crane Sky",
    "Royal Beast"
  ],
  "Festive Jaal": [
    "Diwali Glow",
    "Holi Splash",
    "Sangeet Shimmer",
    "Mehendi Trail",
    "Festive Web",
    "Utsav Lattice",
    "Banaras Jaal",
    "Wedding Bloom",
    "Jharokha Jaal",
    "Mela Net"
  ],
  "Minimal Linear": [
    "Thread Line",
    "Dot Grid",
    "Quiet Stripe",
    "Geo Whisper",
    "Calm Plaid",
    "Minimal Mesh",
    "Soft Stitch",
    "Linear Hush",
    "Pin Stripe",
    "Modern Weft"
  ]
};
function generateDesigns(total = 110) {
  const designs = [];
  const totalSpec = Object.values(CATEGORY_COUNTS).reduce((a, b) => a + b, 0);
  const perCat = {};
  let assigned = 0;
  CATEGORIES.forEach((c, i) => {
    if (i === CATEGORIES.length - 1) {
      perCat[c] = total - assigned;
    } else {
      perCat[c] = Math.round(CATEGORY_COUNTS[c] / totalSpec * total);
      assigned += perCat[c];
    }
  });
  let id = 1;
  for (const cat of CATEGORIES) {
    const count = perCat[cat];
    const names = NAMES[cat];
    for (let i = 0; i < count; i++) {
      const base = names[i % names.length];
      const variant = Math.floor(i / names.length) + 1;
      designs.push({
        id: `D${String(id).padStart(4, "0")}`,
        name: variant > 1 ? `${base} ${variant}` : base,
        category: cat,
        patternClass: PATTERN_CLASS[cat],
        pricePerMetre: 65 + id * 7 % 35,
        minMetres: 100
      });
      id++;
    }
  }
  return designs;
}
function CatalogueGrid() {
  const allDesigns = useMemo(() => generateDesigns(110), []);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const filterRef = useRef(null);
  const filtered = useMemo(
    () => filter === "All" ? allDesigns : allDesigns.filter((d) => d.category === filter),
    [filter, allDesigns]
  );
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: filterRef,
        className: "sticky top-16 lg:top-20 z-30 bg-background/90 backdrop-blur-md border-b border-border",
        children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 py-4 flex gap-2 overflow-x-auto no-scrollbar", children: ["All", ...CATEGORIES, "Custom"].map((c) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => c !== "Custom" && setFilter(c),
            className: `whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-all ${c === "Custom" ? "bg-accent text-accent-foreground border-accent hover:scale-105" : filter === c ? "bg-primary text-primary-foreground border-primary" : "bg-card text-foreground/70 border-border hover:border-accent"}`,
            children: c === "Custom" ? /* @__PURE__ */ jsx(
              "a",
              {
                href: waLink("Hi Tanish Creation! I'd like a custom design."),
                target: "_blank",
                rel: "noreferrer",
                children: "+ Custom"
              }
            ) : c
          },
          c
        )) })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 py-10", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-foreground/60 mb-6", children: [
        "Showing ",
        /* @__PURE__ */ jsx("span", { className: "text-accent font-medium", children: filtered.length }),
        " of 2000+ designs",
        filter !== "All" && /* @__PURE__ */ jsxs(Fragment, { children: [
          " ",
          "in ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: filter })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4", children: filtered.map((d, idx) => /* @__PURE__ */ jsxs("div", { className: "contents", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setSelected(d),
            className: "group text-left bg-card border border-border rounded-2xl overflow-hidden hover:shadow-warm hover:-translate-y-1 transition-all",
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `aspect-square ${d.patternClass} group-hover:scale-105 transition-transform duration-500`
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-primary truncate", children: d.name }),
                /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center justify-between text-xs", children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-foreground/60", children: [
                    "Min ",
                    d.minMetres,
                    "m"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "text-accent font-semibold", children: [
                    "From ₹",
                    d.pricePerMetre,
                    "/m"
                  ] })
                ] })
              ] })
            ]
          }
        ),
        (idx + 1) % 15 === 0 && /* @__PURE__ */ jsxs(
          "a",
          {
            href: waLink("Hi Tanish Creation! I'd like to discuss a custom design."),
            target: "_blank",
            rel: "noreferrer",
            className: "bg-gradient-warm text-accent-foreground rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform",
            children: [
              /* @__PURE__ */ jsx("p", { className: "font-display text-2xl leading-tight", children: "Custom Design Available" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm mt-4 underline underline-offset-4", children: "Start on WhatsApp →" })
            ]
          }
        )
      ] }, d.id)) })
    ] }),
    selected && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-center justify-center p-4 fade-up",
        onClick: () => setSelected(null),
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-card rounded-3xl max-w-2xl w-full overflow-hidden shadow-warm",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx("div", { className: `aspect-[16/9] ${selected.patternClass} relative`, children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setSelected(null),
                  className: "absolute top-4 right-4 bg-card/90 rounded-full p-2 hover:bg-card",
                  "aria-label": "Close",
                  children: /* @__PURE__ */ jsx(X, { size: 18 })
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: selected.category }),
                /* @__PURE__ */ jsx("h3", { className: "font-display text-4xl text-primary mt-2", children: selected.name }),
                /* @__PURE__ */ jsx("p", { className: "mt-4 text-foreground/70", children: "Hand-pulled screen print on premium base fabric. Custom colourways available. Lead time 7–10 days for orders above 100 metres." }),
                /* @__PURE__ */ jsxs("dl", { className: "mt-6 grid grid-cols-3 gap-4 text-sm", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("dt", { className: "text-foreground/50 text-xs uppercase", children: "Code" }),
                    /* @__PURE__ */ jsx("dd", { className: "font-mono text-primary", children: selected.id })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("dt", { className: "text-foreground/50 text-xs uppercase", children: "Min Order" }),
                    /* @__PURE__ */ jsxs("dd", { className: "text-primary", children: [
                      selected.minMetres,
                      " m"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("dt", { className: "text-foreground/50 text-xs uppercase", children: "Price" }),
                    /* @__PURE__ */ jsxs("dd", { className: "text-accent font-semibold", children: [
                      "₹",
                      selected.pricePerMetre,
                      "/m"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: designInquiry(selected.name),
                    target: "_blank",
                    rel: "noreferrer",
                    className: "mt-8 inline-flex w-full justify-center items-center gap-2 bg-accent text-accent-foreground px-6 py-4 rounded-full font-medium hover:bg-accent/90 transition-all",
                    children: "Order on WhatsApp →"
                  }
                )
              ] })
            ]
          }
        )
      }
    )
  ] });
}
function CataloguePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "pt-32 lg:pt-40 pb-12 bg-gradient-cream", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "The Archive" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl lg:text-7xl text-primary leading-[0.95] text-balance", children: [
        "2000+ designs. ",
        /* @__PURE__ */ jsx("em", { className: "text-accent", children: "One archive." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-foreground/70 max-w-2xl", children: "Filter by category, click any design for details, and order on WhatsApp. Custom designs available — every fifteenth tile is a fresh canvas." })
    ] }) }),
    /* @__PURE__ */ jsx(CatalogueGrid, {})
  ] });
}
export {
  CataloguePage as component
};
