import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter, useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { X, Menu, Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import Lenis from "lenis";
const appCss = "/assets/styles-d0HUbjC5.css";
const WHATSAPP_NUMBER = "918302430391";
const PHONE_DISPLAY = "+91 83024 30391";
const EMAIL = "tanishcreation16@gmail.com";
const INSTAGRAM = "https://www.instagram.com/tanishcreation.co";
const GST = "08JVCPD4798C1ZD";
function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function designInquiry(designName) {
  return waLink(`Hi Tanish Creation! I'm interested in ordering ${designName} fabric.`);
}
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/blog", label: "Blog" },
  { to: "/factory-visit", label: "Factory Visit" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "max-w-7xl mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-baseline gap-2 group", children: [
            /* @__PURE__ */ jsx("span", { className: "font-display text-2xl lg:text-3xl font-semibold text-primary tracking-tight", children: "Tanish" }),
            /* @__PURE__ */ jsx("span", { className: "font-display text-lg text-accent italic", children: "Creation" })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "hidden lg:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              className: "text-sm font-medium text-foreground/80 hover:text-accent transition-colors",
              activeProps: { className: "text-accent" },
              activeOptions: { exact: l.to === "/" },
              children: l.label
            }
          ) }, l.to)) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: waLink("Hi Tanish Creation! I'd like to know more about your fabrics."),
                target: "_blank",
                rel: "noreferrer",
                className: "hidden sm:inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-accent/90 shadow-soft transition-all hover:scale-105",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-green-400 animate-pulse" }),
                  "WhatsApp"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "lg:hidden p-2 text-primary",
                onClick: () => setOpen(!open),
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "lg:hidden bg-background border-t border-border", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col px-6 py-4 gap-3", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to: l.to,
            onClick: () => setOpen(false),
            className: "block py-2 text-foreground hover:text-accent",
            children: l.label
          }
        ) }, l.to)) }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-primary text-primary-foreground mt-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "font-display text-3xl font-semibold", children: "Tanish" }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl italic text-accent", children: "Creation" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 font-display italic text-2xl text-secondary text-balance", children: "Printing Stories on Every Fabric" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm text-primary-foreground/70 max-w-md", children: "Jaipur-based premium screen printing manufacturer. Heritage craft, modern scale, trusted by boutiques and D2C brands across India." }),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 text-xs text-primary-foreground/60", children: [
          "GST: ",
          /* @__PURE__ */ jsx("span", { className: "font-mono text-accent", children: GST })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-lg mb-4 text-accent", children: "Explore" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-primary-foreground/80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-accent", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/catalogue", className: "hover:text-accent", children: "Catalogue" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Journal" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/factory-visit", className: "hover:text-accent", children: "Factory Visit" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-accent", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-lg mb-4 text-accent", children: "Reach Us" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-primary-foreground/80", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { size: 14, className: "mt-1" }),
            /* @__PURE__ */ jsx("a", { href: waLink("Hello!"), className: "hover:text-accent", children: PHONE_DISPLAY })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { size: 14, className: "mt-1" }),
            /* @__PURE__ */ jsx("a", { href: `mailto:${EMAIL}`, className: "hover:text-accent break-all", children: EMAIL })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 14, className: "mt-1" }),
            "Jaipur, Rajasthan, India"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Instagram, { size: 14, className: "mt-1" }),
            /* @__PURE__ */ jsx("a", { href: INSTAGRAM, target: "_blank", rel: "noreferrer", className: "hover:text-accent", children: "@tanishcreation.co" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-primary-foreground/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/60", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Tanish Creation. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Crafted in Jaipur • 65+ Years of Heritage" })
    ] }) })
  ] });
}
function FloatingWhatsApp() {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: waLink("Hi Tanish Creation! I'd like to know more about your fabrics."),
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-warm transition-transform hover:scale-110",
      children: [
        /* @__PURE__ */ jsx(MessageCircle, { size: 26 }),
        /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping" })
      ]
    }
  );
}
function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf = 0;
    const tick = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
function ExitIntent() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    if (dismissed) return;
    const onLeave = (e) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("tc_exit")) {
        setShow(true);
        sessionStorage.setItem("tc_exit", "1");
      }
    };
    document.addEventListener("mouseleave", onLeave);
    return () => document.removeEventListener("mouseleave", onLeave);
  }, [dismissed]);
  if (!show) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[60] bg-primary/70 backdrop-blur-sm flex items-center justify-center p-4 fade-up", children: /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-3xl max-w-md w-full p-8 lg:p-10 shadow-warm relative", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          setShow(false);
          setDismissed(true);
        },
        className: "absolute top-4 right-4 p-2",
        "aria-label": "Close",
        children: /* @__PURE__ */ jsx(X, { size: 18 })
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Wait — visit us first" }),
    /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl text-primary mt-3 leading-tight", children: "See your fabric being printed in person." }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-foreground/70 text-sm", children: "Walk our Sanganer floor, meet our printers, pick your base fabric on the spot. Free factory visits, scheduled around you." }),
    /* @__PURE__ */ jsx(
      Link,
      {
        to: "/factory-visit",
        onClick: () => setShow(false),
        className: "mt-6 inline-flex w-full justify-center bg-accent text-accent-foreground py-4 rounded-full font-medium hover:bg-accent/90",
        children: "Book a Factory Visit"
      }
    )
  ] }) });
}
const SITE_URL = "https://tanishcreation.lovable.app";
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tanish Creation",
  description: "Premium screen printing fabric manufacturer based in Jaipur, India. 2000+ designs, bulk orders from 100 metres.",
  url: SITE_URL,
  telephone: "+91-83024-30391",
  email: "tanishcreation16@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN"
  },
  sameAs: ["https://www.instagram.com/tanishcreation.co"],
  priceRange: "₹₹",
  foundingDate: "1959"
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-8xl text-primary", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-2xl text-primary", children: "Design not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90",
        children: "Back home"
      }
    ) })
  ] }) });
}
const Route$7 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tanish Creation | Screen Printing Manufacturer Jaipur" },
      {
        name: "description",
        content: "Jaipur-based premium screen printing fabric manufacturer. 2000+ designs, bulk orders from 100m, ₹65/m. 65+ years of heritage."
      },
      {
        name: "keywords",
        content: "screen printing Jaipur, fabric printing manufacturer India, bulk fabric printing, Sanganer prints, screen print fabric supplier"
      },
      { name: "author", content: "Tanish Creation" },
      { property: "og:title", content: "Tanish Creation | Screen Printing Manufacturer Jaipur" },
      {
        property: "og:description",
        content: "Premium screen printed fabrics from Jaipur. 2000+ designs, bulk from 100 metres."
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(JSON_LD)
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SmoothScroll, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingWhatsApp, {}),
    /* @__PURE__ */ jsx(ExitIntent, {})
  ] });
}
const $$splitComponentImporter$6 = () => import("./factory-visit-CrvwYHyG.js");
const Route$6 = createFileRoute("/factory-visit")({
  head: () => ({
    meta: [{
      title: "Factory Visit — See Our Sanganer Print Floor | Tanish Creation"
    }, {
      name: "description",
      content: "Book a free factory visit at our Jaipur screen printing facility. Walk the floor, meet our printers, choose your base fabric."
    }, {
      property: "og:title",
      content: "Visit Our Jaipur Print Factory"
    }, {
      property: "og:description",
      content: "Book a free visit to our Sanganer screen printing floor."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-BiKI05Me.js");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Tanish Creation — Jaipur Screen Printing Manufacturer"
    }, {
      name: "description",
      content: "Reach our Jaipur team for bulk fabric printing, custom designs, or a factory visit. Call, email, or WhatsApp us."
    }, {
      property: "og:title",
      content: "Contact Tanish Creation"
    }, {
      property: "og:description",
      content: "Reach our Jaipur team for bulk fabric printing."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./catalogue-Bedjrsug.js");
const Route$4 = createFileRoute("/catalogue")({
  head: () => ({
    meta: [{
      title: "Catalogue — 2000+ Screen Print Fabric Designs | Tanish Creation"
    }, {
      name: "description",
      content: "Browse 2000+ screen printed fabric designs across floral, paisley, jaal, botanical, animal and minimal categories. Bulk orders from 100m at ₹65/m."
    }, {
      property: "og:title",
      content: "Catalogue — 2000+ Designs | Tanish Creation"
    }, {
      property: "og:description",
      content: "Browse our full design archive. Floral, paisley, jaal, and more."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./blog-BRBKSwhw.js");
const Route$3 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "Journal — Stories from a Jaipur Print House | Tanish Creation"
    }, {
      name: "description",
      content: "Notes on screen printing, fabric, Sanganer heritage, and bulk manufacturing from Tanish Creation."
    }, {
      property: "og:title",
      content: "The Tanish Creation Journal"
    }, {
      property: "og:description",
      content: "Notes on screen printing, fabric, and Sanganer heritage."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-BWJ09vB_.js");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Tanish Creation — 65 Years of Jaipur Screen Printing"
    }, {
      name: "description",
      content: "Three generations of Sanganer screen printing heritage. Meet the team, the craft, and the values behind Tanish Creation."
    }, {
      property: "og:title",
      content: "About Tanish Creation"
    }, {
      property: "og:description",
      content: "Three generations of Sanganer screen printing heritage in Jaipur."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-Bz1W7rxm.js");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const POSTS = [
  {
    slug: "art-of-screen-printing",
    title: "The Art of Screen Printing",
    excerpt: "How a 2000-year-old craft still beats digital printing on hand-feel and depth.",
    category: "Craft",
    pattern: "pat-floral-1",
    keywords: "screen printing Jaipur, hand screen printing, fabric printing manufacturer India",
    body: [
      "Screen printing is one of the oldest surface-design techniques humans ever invented. The earliest documented examples date back to the Song dynasty in China, but the craft as we practise it in Sanganer, Jaipur, has been refined over five centuries — block to block, screen to screen, generation to generation.",
      "At its heart, the process is deceptively simple: a fine mesh screen is stretched over a frame, areas are blocked off, and pigment is pulled across the open mesh onto fabric below. Each colour gets its own screen. Each screen gets its own pull. A six-colour print isn't six steps — it's six small acts of hand-craft, repeated metre after metre.",
      "What digital printing can't match is the way ink sits on the cloth. A digitally printed fabric carries pigment that has been atomised onto the surface; the dye sits on top, slightly stiff, slightly flat. A hand-pulled screen print pushes pigment into the weave. The result has depth, hand-feel, and a faint topography you can read with your fingertips.",
      "There's also the question of colour. Our colour mixer hand-mixes every base shade against a reference swatch — sometimes a fabric snip, sometimes a paint chip, sometimes a photograph. Digital printers approximate; we match. Repeat orders months later use the same logged formula, so a brand's signature pink stays a signature.",
      "Of course, screen printing has limits. Photo-real gradients are difficult. Tiny fonts can break. And every additional colour adds a screen, a setup, and a pull. But for designs built around clean shapes, layered patterns, and rich solid colours — the floral jaals, the paisley fields, the bold stripes our clients order by the thousand metres — nothing else comes close.",
      "When a boutique buyer asks us why their cotton kurta drape feels different from a fast-fashion equivalent, the answer is in the print. Screen printing isn't slower because we're stuck in the past. It's slower because the result is worth the time."
    ]
  },
  {
    slug: "why-jaipur-textile-capital",
    title: "Why Jaipur is India's Textile Capital",
    excerpt: "From Sanganer dye-pits to global D2C brands — the Jaipur story.",
    category: "Heritage",
    pattern: "pat-paisley",
    keywords: "Jaipur textile manufacturer, Sanganer screen printing, fabric printing manufacturer India",
    body: [
      "Walk through Sanganer at six in the morning and you'll smell it before you see it: indigo, alum, and the faint mineral tang of well water. Twelve kilometres south of Jaipur city, Sanganer has been a printing town since the 16th century — and today it produces a quantifiable share of India's hand-printed fabric.",
      "The reason isn't accident. Three things converge in Jaipur that don't converge anywhere else in India: a 400-year continuous craft tradition, abundant soft groundwater perfect for dyeing, and a dense ecosystem of suppliers — block carvers, screen makers, dye chemists, fabric merchants — packed inside a few square kilometres.",
      "The royal patronage of the Kachhwaha rulers seeded the craft. Their courts wanted hand-printed cotton for tents, canopies, and clothing, and they imported skilled chhipa printers from Sindh in the 1600s to settle in Sanganer and Bagru. Those printer families never left.",
      "By the 19th century, Jaipur prints were exported to Europe under the name 'Indiennes' and copied by mills from Marseille to Manchester. The originals, though, kept their advantage: water that didn't dull the dye, a dry climate that let prints cure outdoors, and craftsmen who knew their formulas better than the chemists copying them.",
      "Today, Jaipur supplies fabric to virtually every major Indian D2C apparel brand, hundreds of boutique designers, and exports to buyers in the US, UK, Japan and Australia. The infrastructure has scaled — facilities like ours run 15,000 metres a day — but the craft logic is unchanged. Mix the colour by hand, pull each screen by hand, inspect each roll by hand.",
      "When a buyer in Mumbai or Brooklyn picks up a fabric and asks 'where's this from?' — the honest answer is: a town outside Jaipur where someone's grandfather probably printed for someone else's grandfather. That continuity is the moat. It's also the reason we'll never move."
    ]
  },
  {
    slug: "choosing-right-fabric",
    title: "Choosing the Right Fabric for Print",
    excerpt: "Cotton, rayon, linen, silk — a buyer's guide to fabric for screen printing.",
    category: "Guide",
    pattern: "pat-leaf",
    keywords: "bulk fabric printing, screen print fabric, fabric printing manufacturer India",
    body: [
      "Fabric is half the print. The same screen and the same pigment will give you four completely different results on cotton, rayon, linen, and silk — and the difference matters more than most first-time buyers realise. Here's how we guide our clients.",
      "Cotton is the safe default. It absorbs pigment evenly, holds colour for years, and washes well. Within cotton, weave matters: a 60-count cambric prints crisp lines and is ideal for sharp graphic prints; a 40-count poplin gives slightly softer edges and a fuller hand. For wholesale boutique runs, cambric and poplin together cover most use-cases.",
      "Rayon (viscose) is fluid, drapey, and prints with a slightly higher saturation than cotton because the fibre is smoother. The trade-off is that rayon shrinks more aggressively and demands a more careful curing step. For flowing dresses, scarves and dupattas where drape matters more than structure, rayon is unbeatable.",
      "Linen is the prestige base — but it's also the most demanding. Its natural slubs absorb pigment unevenly, which is either a feature or a bug depending on the print. Bold, large-scale prints sing on linen. Fine-line prints can look broken. We always recommend a strike-off on linen before committing to a bulk run.",
      "Silk — habotai, crepe, georgette — gives the deepest, most luminous colour of any base, but the screens have to be lighter, the pigment thinner, and the pulls gentler. It's the right choice for premium scarves, special-occasion saris, and luxury bridal fabric. It's the wrong choice for a 1000-metre boutique drop unless your price point supports it.",
      "Our usual advice for a first-time client: order strike-offs on two or three bases before deciding. A 1-metre sample on each fabric costs almost nothing and removes 90% of the guesswork. After that, your bulk order behaves exactly the way you expected."
    ]
  },
  {
    slug: "manufacturing-process",
    title: "Inside Our Manufacturing Process",
    excerpt: "From design approval to dispatch — a full walkthrough of how your order is made.",
    category: "Process",
    pattern: "pat-jaal",
    keywords: "bulk fabric printing, screen printing Jaipur, fabric manufacturer process",
    body: [
      "Most clients see the catalogue and the invoice. The middle — the actual manufacturing — is invisible. We think it shouldn't be. Here's exactly what happens between the moment you confirm an order and the moment your fabric ships.",
      "Step one is design approval. You either pick a design from our 2000-strong archive or send us your own artwork. Our studio prepares a digital strike-off — a printed proof on your chosen base fabric — and ships it to you within 3-4 days. Nothing moves to bulk until you sign off.",
      "Step two is screen preparation. Each colour in your design gets its own screen: a fine polyester mesh stretched over an aluminium frame, hand-coated with a light-sensitive emulsion, exposed under your artwork on a UV table, and washed out so that pigment passes only through the design areas. A six-colour print needs six screens, and each screen takes about an hour to prepare.",
      "Step three is colour mixing. Our master colourist works against your reference — a fabric snip, a Pantone code, sometimes just a photo. Every formula is logged in a hand-written ledger so that repeat orders three months later use the exact same shade. Consistency across runs is one of our most-requested features.",
      "Step four is the print itself. Long printing tables — some up to 60 metres — are laid with the base fabric and lightly tacked down. Each screen is positioned by hand, pigment is poured at the top, and a squeegee pulls it across the screen in a single firm stroke. The screen lifts; the printer steps one repeat-length forward; the pull repeats. Six colours means six passes down the table.",
      "Step five is curing and quality. The printed fabric cures naturally in our drying yards (or, for some pigments, through a heated curing chamber) before going through a roll-by-roll quality inspection. Defects are flagged, the roll is reprinted if needed, and only then does it ship.",
      "From design approval to dispatch, the typical timeline is 7–10 days for orders above 100 metres. Larger orders take longer only because the printing itself takes longer — every other step scales with our capacity."
    ]
  }
];
const getPost = (slug) => POSTS.find((p) => p.slug === slug);
const $$splitComponentImporter = () => import("./blog._slug-B35tbHpE.js");
const $$splitErrorComponentImporter = () => import("./blog._slug-N0l28j0C.js");
const $$splitNotFoundComponentImporter = () => import("./blog._slug-Dx2OdYAY.js");
const Route = createFileRoute("/blog/$slug")({
  loader: ({
    params
  }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return {
      post
    };
  },
  head: ({
    loaderData
  }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [{
          title: "Article — Tanish Creation"
        }]
      };
    }
    return {
      meta: [{
        title: `${post.title} — Tanish Creation Journal`
      }, {
        name: "description",
        content: post.excerpt
      }, {
        name: "keywords",
        content: post.keywords
      }, {
        property: "og:title",
        content: post.title
      }, {
        property: "og:description",
        content: post.excerpt
      }, {
        property: "og:type",
        content: "article"
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const FactoryVisitRoute = Route$6.update({
  id: "/factory-visit",
  path: "/factory-visit",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const CatalogueRoute = Route$4.update({
  id: "/catalogue",
  path: "/catalogue",
  getParentRoute: () => Route$7
});
const BlogRoute = Route$3.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const BlogSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => BlogRoute
});
const BlogRouteChildren = {
  BlogSlugRoute
};
const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute: BlogRouteWithChildren,
  CatalogueRoute,
  ContactRoute,
  FactoryVisitRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  EMAIL as E,
  INSTAGRAM as I,
  PHONE_DISPLAY as P,
  Route as R,
  POSTS as a,
  designInquiry as d,
  router as r,
  waLink as w
};
