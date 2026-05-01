import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Brush, Palette, Package, Layers } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const STATS = [
  { value: "2000+", label: "Unique Designs" },
  { value: "1000+", label: "Happy Clients" },
  { value: "65+", label: "Years of Heritage" },
  { value: "15,000m", label: "Daily Capacity" }
];
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "relative py-24 lg:py-32 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.7 },
        children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Our Story" }),
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl lg:text-6xl text-primary leading-tight text-balance", children: [
            "Three generations of ",
            /* @__PURE__ */ jsx("em", { className: "text-accent", children: "Jaipur" }),
            " textile heritage"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-5 text-foreground/75 text-lg leading-relaxed", children: [
            /* @__PURE__ */ jsx("p", { children: "Tanish Creation began in the printing lanes of Sanganer in 1959 — a region where every household once carried a wooden block and a dye-stained dupatta hung from every roof." }),
            /* @__PURE__ */ jsx("p", { children: "Today we run one of Jaipur's most trusted screen printing facilities: a 2000+ design library, 15,000 metres of daily capacity, and a team that still hand-mixes every base colour the way our grandfather did." }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Boutiques, D2C brands, and wholesalers across India trust us because we treat",
              " ",
              /* @__PURE__ */ jsx("em", { children: "every" }),
              " hundred-metre order like a heritage commission."
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 lg:gap-6", children: STATS.map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.1 },
        className: "bg-card border border-border rounded-2xl p-6 lg:p-10 shadow-soft hover:shadow-warm transition-all group",
        children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-4xl lg:text-6xl text-primary group-hover:text-accent transition-colors", children: s.value }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 text-sm uppercase tracking-wider text-foreground/60", children: s.label })
        ]
      },
      s.label
    )) })
  ] }) });
}
const ITEMS = [
  {
    icon: Brush,
    title: "Screen Printing",
    desc: "Hand-pulled prints on cotton, linen, rayon and silk — the way Sanganer has done it for centuries."
  },
  {
    icon: Palette,
    title: "Custom Designs",
    desc: "Bring us a sketch, a mood, a Pinterest board. Our in-house studio turns it into a press-ready screen."
  },
  {
    icon: Package,
    title: "Bulk Orders",
    desc: "From 100 metres for a boutique drop to 15,000 metres a day for D2C scale. Same craft, every order."
  },
  {
    icon: Layers,
    title: "Fabric Sourcing",
    desc: "Cotton from Erode, linen from Coimbatore, rayon from Surat — we source the base, you choose the print."
  }
];
function Craft() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 lg:py-32 bg-secondary/40", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Our Craft" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl lg:text-6xl text-primary leading-tight text-balance", children: "Four services, one obsession with quality." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: ITEMS.map((item, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.08 },
        className: "bg-card rounded-2xl p-7 border border-border hover:border-accent transition-all hover:-translate-y-1 shadow-soft",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-5", children: /* @__PURE__ */ jsx(item.icon, { size: 22 }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-primary mb-3", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/70 leading-relaxed", children: item.desc })
        ]
      },
      item.title
    )) })
  ] }) });
}
if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const STEPS = [
  {
    n: "01",
    title: "Design Approval",
    desc: "You share the artwork or pick from our archive. Our studio prepares a digital strike-off for sign-off."
  },
  {
    n: "02",
    title: "Screen Preparation",
    desc: "Each colour gets its own hand-coated screen, exposed and washed to micron precision."
  },
  {
    n: "03",
    title: "Color Mixing",
    desc: "Pigments are hand-mixed against your reference. We log every formula for repeat orders."
  },
  {
    n: "04",
    title: "Printing",
    desc: "Tables of up to 60 metres get pulled by hand, layer by layer, colour by colour."
  },
  {
    n: "05",
    title: "Quality Check",
    desc: "Every roll is inspected against the approved strike-off before it ships."
  }
];
function Process() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const distance = track.scrollWidth - window.innerWidth + 80;
      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsx(
    "section",
    {
      ref: sectionRef,
      className: "relative bg-primary text-primary-foreground overflow-hidden",
      children: /* @__PURE__ */ jsxs("div", { className: "h-screen flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "px-6 lg:px-10 max-w-7xl mx-auto w-full mb-10", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "The Process" }),
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl lg:text-6xl text-balance", children: [
            "Five steps from your ",
            /* @__PURE__ */ jsx("em", { className: "text-accent", children: "brief" }),
            " to your",
            " ",
            /* @__PURE__ */ jsx("em", { className: "italic", children: "box" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { ref: trackRef, className: "flex gap-6 px-6 lg:px-10 pl-[10vw]", children: STEPS.map((s) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "shrink-0 w-[80vw] sm:w-[55vw] lg:w-[40vw] bg-primary-foreground/5 border border-primary-foreground/15 rounded-3xl p-10",
            children: [
              /* @__PURE__ */ jsx("div", { className: "font-display text-7xl text-accent", children: s.n }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl mt-4", children: s.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-4 text-primary-foreground/75 leading-relaxed", children: s.desc })
            ]
          },
          s.n
        )) })
      ] })
    }
  );
}
export {
  About as A,
  Craft as C,
  Process as P
};
