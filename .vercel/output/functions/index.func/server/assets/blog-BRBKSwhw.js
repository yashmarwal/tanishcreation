import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const POSTS = [{
  slug: "art-of-screen-printing",
  title: "The Art of Screen Printing",
  excerpt: "How a 2000-year-old craft still beats digital printing on hand-feel and depth.",
  category: "Craft"
}, {
  slug: "why-jaipur-textile-capital",
  title: "Why Jaipur is India's Textile Capital",
  excerpt: "From Sanganer dye-pits to global D2C brands — the Jaipur story.",
  category: "Heritage"
}, {
  slug: "choosing-right-fabric",
  title: "Choosing the Right Fabric for Print",
  excerpt: "Cotton, rayon, linen, silk — a buyer's guide to fabric for screen printing.",
  category: "Guide"
}, {
  slug: "manufacturing-process",
  title: "Inside Our Manufacturing Process",
  excerpt: "From design approval to dispatch — a full walkthrough of how your order is made.",
  category: "Process"
}];
function BlogIndex() {
  return /* @__PURE__ */ jsx("section", { className: "pt-32 lg:pt-44 pb-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Journal" }),
    /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl lg:text-7xl text-primary leading-[0.95] text-balance max-w-3xl", children: "Notes from the print floor." }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid md:grid-cols-2 gap-6", children: POSTS.map((p, i) => /* @__PURE__ */ jsxs(Link, { to: "/blog/$slug", params: {
      slug: p.slug
    }, className: "group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-warm transition-all", children: [
      /* @__PURE__ */ jsx("div", { className: `aspect-[16/9] ${["pat-floral-1", "pat-paisley", "pat-leaf", "pat-jaal"][i % 4]} group-hover:scale-105 transition-transform duration-700` }),
      /* @__PURE__ */ jsxs("div", { className: "p-7", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-accent", children: p.category }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-primary mt-2 group-hover:text-accent transition-colors", children: p.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-foreground/70 text-sm", children: p.excerpt }),
        /* @__PURE__ */ jsx("span", { className: "mt-5 inline-block text-sm text-accent", children: "Read article →" })
      ] })
    ] }, p.slug)) })
  ] }) });
}
export {
  BlogIndex as component
};
