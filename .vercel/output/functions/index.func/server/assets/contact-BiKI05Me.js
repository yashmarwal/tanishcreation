import { jsx, jsxs } from "react/jsx-runtime";
import { P as PHONE_DISPLAY, E as EMAIL, I as INSTAGRAM, w as waLink } from "./router-CsQB7GoR.js";
import { Phone, MessageCircle, Mail, Instagram, MapPin } from "lucide-react";
import "@tanstack/react-router";
import "react";
import "lenis";
function Contact() {
  const items = [{
    I: Phone,
    k: "Call",
    v: PHONE_DISPLAY,
    href: `tel:+918302430391`
  }, {
    I: MessageCircle,
    k: "WhatsApp",
    v: PHONE_DISPLAY,
    href: waLink("Hi Tanish Creation!")
  }, {
    I: Mail,
    k: "Email",
    v: EMAIL,
    href: `mailto:${EMAIL}`
  }, {
    I: Instagram,
    k: "Instagram",
    v: "@tanishcreation.co",
    href: INSTAGRAM
  }, {
    I: MapPin,
    k: "Location",
    v: "Jaipur, Rajasthan, India"
  }];
  return /* @__PURE__ */ jsx("section", { className: "pt-32 lg:pt-44 pb-24 bg-gradient-cream", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 lg:px-10 text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Contact" }),
    /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl lg:text-7xl text-primary leading-[0.95] text-balance", children: [
      "Let's print something ",
      /* @__PURE__ */ jsx("em", { className: "text-accent", children: "beautiful" }),
      "."
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-foreground/70 max-w-xl mx-auto", children: "We reply fastest on WhatsApp. Quotes typically within 2 hours." }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left", children: items.map((it) => {
      const Inner = /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 hover:border-accent transition-all hover:-translate-y-1 shadow-soft h-full", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(it.I, { size: 18 }) }),
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-foreground/50", children: it.k }),
        /* @__PURE__ */ jsx("div", { className: "text-primary mt-1 break-all", children: it.v })
      ] });
      return it.href ? /* @__PURE__ */ jsx("a", { href: it.href, target: it.href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", children: Inner }, it.k) : /* @__PURE__ */ jsx("div", { children: Inner }, it.k);
    }) })
  ] }) });
}
export {
  Contact as component
};
