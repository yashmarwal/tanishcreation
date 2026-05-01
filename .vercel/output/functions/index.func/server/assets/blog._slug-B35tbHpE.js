import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { R as Route, a as POSTS } from "./router-CsQB7GoR.js";
import "react";
import "lucide-react";
import "lenis";
function BlogPost() {
  const {
    post
  } = Route.useLoaderData();
  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
  return /* @__PURE__ */ jsxs("article", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs("header", { className: `relative pt-32 lg:pt-44 pb-20 ${post.pattern} overflow-hidden`, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/70 backdrop-blur-[2px]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-3xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: post.category }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl lg:text-7xl text-primary leading-[1] text-balance", children: post.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-foreground/75", children: post.excerpt })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-6 lg:px-10 py-16", children: [
      /* @__PURE__ */ jsx("div", { className: "prose-lg space-y-6 text-lg text-foreground/85 leading-relaxed", children: post.body.map((para, i) => /* @__PURE__ */ jsx("p", { className: i === 0 ? "first-letter:font-display first-letter:text-6xl first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:leading-none" : "", children: para }, i)) }),
      /* @__PURE__ */ jsx("hr", { className: "my-16 border-border" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-6", children: "Keep reading" }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-5", children: others.map((p) => /* @__PURE__ */ jsxs(Link, { to: "/blog/$slug", params: {
          slug: p.slug
        }, className: "group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-warm transition-all", children: [
          /* @__PURE__ */ jsx("div", { className: `aspect-[16/9] ${p.pattern}` }),
          /* @__PURE__ */ jsx("div", { className: "p-5", children: /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-primary group-hover:text-accent transition-colors", children: p.title }) })
        ] }, p.slug)) })
      ] })
    ] })
  ] });
}
export {
  BlogPost as component
};
