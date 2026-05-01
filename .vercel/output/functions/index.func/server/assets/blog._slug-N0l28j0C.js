import { jsx, jsxs } from "react/jsx-runtime";
const SplitErrorComponent = ({
  error,
  reset
}) => /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center pt-20", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
  /* @__PURE__ */ jsx("p", { className: "text-destructive", children: error.message }),
  /* @__PURE__ */ jsx("button", { onClick: reset, className: "mt-4 text-accent", children: "Try again" })
] }) });
export {
  SplitErrorComponent as errorComponent
};
