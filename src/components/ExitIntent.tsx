import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("tc_exit")) {
        setShow(true);
        sessionStorage.setItem("tc_exit", "1");
      }
    };
    document.addEventListener("mouseleave", onLeave);
    return () => document.removeEventListener("mouseleave", onLeave);
  }, [dismissed]);

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-primary/70 backdrop-blur-sm flex items-center justify-center p-4 fade-up">
      <div className="bg-card rounded-3xl max-w-md w-full p-8 lg:p-10 shadow-warm relative">
        <button
          onClick={() => {
            setShow(false);
            setDismissed(true);
          }}
          className="absolute top-4 right-4 p-2"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Wait — visit us first</p>
        <h3 className="font-display text-3xl text-primary mt-3 leading-tight">
          See your fabric being printed in person.
        </h3>
        <p className="mt-4 text-foreground/70 text-sm">
          Walk our Sanganer floor, meet our printers, pick your base fabric on the spot. Free
          factory visits, scheduled around you.
        </p>
        <Link
          to="/factory-visit"
          onClick={() => setShow(false)}
          className="mt-6 inline-flex w-full justify-center bg-accent text-accent-foreground py-4 rounded-full font-medium hover:bg-accent/90"
        >
          Book a Factory Visit
        </Link>
      </div>
    </div>
  );
}
