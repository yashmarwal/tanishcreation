import { jsx, jsxs } from "react/jsx-runtime";
import { F as FactoryVisitForm } from "./FactoryVisitForm-paZ2ulNC.js";
import { MapPin, Clock, Users } from "lucide-react";
import "react";
import "./router-CsQB7GoR.js";
import "@tanstack/react-router";
import "lenis";
function VisitPage() {
  return /* @__PURE__ */ jsx("section", { className: "pt-32 lg:pt-44 pb-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Factory Visit" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl lg:text-7xl text-primary leading-[0.95] text-balance", children: [
        "See your fabric, ",
        /* @__PURE__ */ jsx("em", { className: "text-accent", children: "before" }),
        " it's yours."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-foreground/70 max-w-md", children: "A factory visit is the fastest way to understand how Sanganer screen printing actually works — and to see whether we're the right partner for you." }),
      /* @__PURE__ */ jsx("ul", { className: "mt-10 space-y-5", children: [{
        I: MapPin,
        k: "Location",
        v: "Sanganer, Jaipur, Rajasthan"
      }, {
        I: Clock,
        k: "Visit hours",
        v: "Mon–Sat, 10am – 5pm"
      }, {
        I: Users,
        k: "Group size",
        v: "Up to 20 visitors per slot"
      }].map(({
        I,
        k,
        v
      }) => /* @__PURE__ */ jsxs("li", { className: "flex gap-4 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(I, { size: 18 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-foreground/50", children: k }),
          /* @__PURE__ */ jsx("div", { className: "text-primary text-lg", children: v })
        ] })
      ] }, k)) })
    ] }),
    /* @__PURE__ */ jsx(FactoryVisitForm, {})
  ] }) });
}
export {
  VisitPage as component
};
