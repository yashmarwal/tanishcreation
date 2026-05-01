import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import Matter from "matter-js";
import { A as About, C as Craft, P as Process } from "./Process-D1agzxvm.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { w as waLink } from "./router-CsQB7GoR.js";
import { F as FactoryVisitForm } from "./FactoryVisitForm-paZ2ulNC.js";
import "framer-motion";
import "lenis";
const SWATCHES = ["#C17D3C", "#E8D5B7", "#3D2B1F", "#A85C2C", "#D9B383", "#8B4A26"];
function Hero() {
  const sceneRef = useRef(null);
  useEffect(() => {
    if (!sceneRef.current) return;
    const el = sceneRef.current;
    const w = el.clientWidth;
    const h = el.clientHeight;
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Bodies = Matter.Bodies;
    const Composite = Matter.Composite;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;
    const engine = Engine.create();
    engine.gravity.y = 0.4;
    const render = Render.create({
      element: el,
      engine,
      options: {
        width: w,
        height: h,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio
      }
    });
    const opts = { isStatic: true, render: { visible: false } };
    Composite.add(engine.world, [
      Bodies.rectangle(w / 2, h + 30, w, 60, opts),
      Bodies.rectangle(-30, h / 2, 60, h, opts),
      Bodies.rectangle(w + 30, h / 2, 60, h, opts),
      Bodies.rectangle(w / 2, -30, w, 60, opts)
    ]);
    const pieces = [];
    const count = w < 768 ? 14 : 22;
    for (let i = 0; i < count; i++) {
      const color = SWATCHES[i % SWATCHES.length];
      const shape = i % 3 === 0 ? Bodies.circle(Math.random() * w, -Math.random() * 400, 18 + Math.random() * 20, {
        restitution: 0.5,
        friction: 0.05,
        render: { fillStyle: color }
      }) : Bodies.rectangle(
        Math.random() * w,
        -Math.random() * 600,
        30 + Math.random() * 50,
        20 + Math.random() * 30,
        {
          restitution: 0.4,
          friction: 0.08,
          angle: Math.random() * Math.PI,
          render: { fillStyle: color }
        }
      );
      pieces.push(shape);
    }
    Composite.add(engine.world, pieces);
    const mouse = Mouse.create(render.canvas);
    const mc = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } }
    });
    Composite.add(engine.world, mc);
    render.mouse = mouse;
    mouse.element.removeEventListener(
      "wheel",
      mouse.mousewheel
    );
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);
    const handleResize = () => {
      const nw = el.clientWidth;
      const nh = el.clientHeight;
      render.canvas.width = nw;
      render.canvas.height = nh;
      render.options.width = nw;
      render.options.height = nh;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen overflow-hidden bg-gradient-cream pt-20", children: [
    /* @__PURE__ */ jsx("div", { ref: sceneRef, className: "absolute inset-0 z-0 pointer-events-auto" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-32 pb-20 pointer-events-none", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl pointer-events-auto", children: [
      /* @__PURE__ */ jsxs("p", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent mb-6 fade-up", children: [
        /* @__PURE__ */ jsx("span", { className: "w-8 h-px bg-accent" }),
        " Jaipur • Since 1959"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-8xl text-primary leading-[0.95] text-balance fade-up", children: [
        "Where ",
        /* @__PURE__ */ jsx("em", { className: "text-accent not-italic", children: "Fabric" }),
        /* @__PURE__ */ jsx("br", {}),
        "Meets ",
        /* @__PURE__ */ jsx("span", { className: "italic", children: "Art" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg lg:text-xl text-foreground/75 max-w-xl fade-up", children: "Jaipur-based premium screen printing manufacturer. 2000+ designs, crafted by hand, delivered at scale to boutiques and brands worldwide." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-4 fade-up", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/catalogue",
            className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm font-medium hover:bg-primary/90 shadow-warm transition-all hover:scale-105",
            children: "View Catalogue →"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/factory-visit",
            className: "inline-flex items-center gap-2 border border-primary text-primary px-7 py-4 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all",
            children: "Visit Our Factory"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-xs uppercase tracking-[0.3em] text-foreground/40 animate-bounce", children: "Scroll" })
  ] });
}
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
function CataloguePreview() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    if (!sectionRef.current || !cardRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { scale: 0.85, borderRadius: "32px" },
        {
          scale: 1,
          borderRadius: "0px",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=80%",
            scrub: 1,
            pin: true,
            onUpdate: (self) => setExpanded(self.progress > 0.85)
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, className: "relative bg-background min-h-screen", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref: cardRef,
      className: "relative h-screen w-full overflow-hidden bg-gradient-warm flex items-center justify-center",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-30", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pat-jaal" }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center px-6 max-w-3xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent-foreground/80 mb-6", children: "The Catalogue" }),
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl lg:text-8xl text-accent-foreground leading-[0.95] text-balance", children: [
            "2000+ designs.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("em", { className: "italic", children: "One scroll away." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg text-accent-foreground/85 max-w-xl mx-auto", children: "Floral, paisley, jaal, botanical, animal, minimal — explore our full archive in an immersive view." }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/catalogue",
              className: `mt-10 inline-flex items-center gap-3 bg-cream text-primary px-8 py-4 rounded-full font-medium shadow-warm transition-all hover:scale-105 ${expanded ? "opacity-100" : "opacity-90"}`,
              children: [
                "Open Full Catalogue ",
                /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
              ]
            }
          )
        ] })
      ]
    }
  ) });
}
function BulkOrder() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    design: "",
    quantity: "",
    color: "",
    notes: ""
  });
  const submit = (e) => {
    e.preventDefault();
    const msg = `📦 BULK ORDER REQUEST

Name: ${form.name}
Phone: ${form.phone}
Company: ${form.company}
Design: ${form.design}
Quantity: ${form.quantity} metres
Color: ${form.color}
Notes: ${form.notes}`;
    window.open(waLink(msg), "_blank");
  };
  return /* @__PURE__ */ jsx("section", { className: "py-24 lg:py-32 bg-secondary/50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Bulk Manufacturing" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl lg:text-7xl text-primary leading-[0.95] text-balance", children: [
        "Built for bulk.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { className: "text-accent", children: "Priced for growth." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-5", children: [
        ["Minimum order", "100 metres"],
        ["Starting price", "₹65 / metre"],
        ["Lead time", "7–10 days"],
        ["Capacity", "15,000 metres / day"]
      ].map(([k, v]) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-baseline justify-between border-b border-border pb-3",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm uppercase tracking-wider text-foreground/60", children: k }),
            /* @__PURE__ */ jsx("span", { className: "font-display text-2xl text-primary", children: v })
          ]
        },
        k
      )) })
    ] }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: submit,
        className: "bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-warm space-y-4",
        children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-primary mb-2", children: "Get a Bulk Quote" }),
          [
            { k: "name", p: "Your name", req: true },
            { k: "phone", p: "Phone number", req: true },
            { k: "company", p: "Company / brand" },
            { k: "design", p: "Design name or code" }
          ].map((f) => /* @__PURE__ */ jsx(
            "input",
            {
              required: f.req,
              maxLength: 120,
              placeholder: f.p,
              value: form[f.k],
              onChange: (e) => setForm({ ...form, [f.k]: e.target.value }),
              className: "w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
            },
            f.k
          )),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                required: true,
                maxLength: 20,
                placeholder: "Quantity (m)",
                value: form.quantity,
                onChange: (e) => setForm({ ...form, quantity: e.target.value }),
                className: "bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                maxLength: 50,
                placeholder: "Preferred color",
                value: form.color,
                onChange: (e) => setForm({ ...form, color: e.target.value }),
                className: "bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              placeholder: "Notes (optional)",
              maxLength: 500,
              value: form.notes,
              onChange: (e) => setForm({ ...form, notes: e.target.value }),
              rows: 3,
              className: "w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none resize-none"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "w-full bg-accent text-accent-foreground py-4 rounded-full font-medium hover:bg-accent/90 transition-all hover:scale-[1.01]",
              children: "Get Quote on WhatsApp →"
            }
          )
        ]
      }
    )
  ] }) });
}
const REVIEWS = [
  {
    name: "Aanya Sharma",
    role: "Founder, Loom & Lily",
    text: "Tanish has been our printing partner for three drops now. The colour consistency across 800m runs is unreal."
  },
  {
    name: "Rohan Mehta",
    role: "Buyer, House of Khanak",
    text: "We get 100m sample runs treated with the same care as 5000m bulk. That's rare in Jaipur."
  },
  {
    name: "Priya Iyer",
    role: "D2C Brand Lead",
    text: "Their archive saved us months of design work. We picked 12 jaals and went straight to production."
  },
  {
    name: "Vikram Singh",
    role: "Wholesaler, Kolkata",
    text: "Lead times are honest. 8 days quoted, 8 days delivered. Every. Single. Time."
  },
  {
    name: "Meera Joshi",
    role: "Studio Director",
    text: "Custom colourways nailed on the first strike-off. Their colour mixer is a wizard."
  },
  {
    name: "Arjun Kapoor",
    role: "Boutique Owner, Mumbai",
    text: "The hand-feel of their cotton prints is in another league. My customers ask where it's printed."
  }
];
function Testimonials() {
  const loop = [...REVIEWS, ...REVIEWS];
  return /* @__PURE__ */ jsxs("section", { className: "py-24 lg:py-32 bg-background overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 mb-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Trusted by brands" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl lg:text-6xl text-primary text-balance", children: "What our partners say." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "flex gap-6 marquee w-max", children: loop.map((r, i) => /* @__PURE__ */ jsxs(
      "figure",
      {
        className: "w-[340px] sm:w-[420px] shrink-0 bg-card border border-border rounded-3xl p-8 shadow-soft",
        children: [
          /* @__PURE__ */ jsxs("blockquote", { className: "font-display text-xl text-primary leading-snug", children: [
            "“",
            r.text,
            "”"
          ] }),
          /* @__PURE__ */ jsxs("figcaption", { className: "mt-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center font-display text-lg", children: r.name[0] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-primary", children: r.name }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-foreground/60", children: r.role })
            ] })
          ] })
        ]
      },
      i
    )) }) })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Craft, {}),
    /* @__PURE__ */ jsx(CataloguePreview, {}),
    /* @__PURE__ */ jsx(Process, {}),
    /* @__PURE__ */ jsx(BulkOrder, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx("section", { className: "py-24 lg:py-32 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Factory Visit" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl lg:text-6xl text-primary leading-tight text-balance", children: "Come see how your fabric is made." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-foreground/70 text-lg max-w-md", children: "Walk our Sanganer floor, meet the printers behind your order, and pick your base fabric on the spot. Visits are free and scheduled around you." })
      ] }),
      /* @__PURE__ */ jsx(FactoryVisitForm, {})
    ] }) })
  ] });
}
export {
  Index as component
};
