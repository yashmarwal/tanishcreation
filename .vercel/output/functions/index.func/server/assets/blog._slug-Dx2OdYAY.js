import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center pt-20", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
  /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl text-primary", children: "Article not found" }),
  /* @__PURE__ */ jsx(Link, { to: "/blog", className: "mt-6 inline-block text-accent", children: "← Back to journal" })
] }) });
export {
  SplitNotFoundComponent as notFoundComponent
};
