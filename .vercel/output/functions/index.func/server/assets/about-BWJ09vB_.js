import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as About, C as Craft, P as Process } from "./Process-D1agzxvm.js";
import "framer-motion";
import "lucide-react";
import "react";
import "gsap";
import "gsap/ScrollTrigger";
function AboutPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "pt-32 lg:pt-44 pb-16 bg-gradient-cream", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 lg:px-10 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Our Story" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl lg:text-8xl text-primary leading-[0.95] text-balance", children: [
        "Heritage you can ",
        /* @__PURE__ */ jsx("em", { className: "text-accent", children: "feel" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-foreground/70 max-w-2xl mx-auto", children: "From a single block-printing table in Sanganer to one of Jaipur's most trusted screen printing facilities — this is who we are." })
    ] }) }),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Craft, {}),
    /* @__PURE__ */ jsx(Process, {})
  ] });
}
export {
  AboutPage as component
};
