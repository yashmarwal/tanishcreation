import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CataloguePreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
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
            onUpdate: (self) => setExpanded(self.progress > 0.85),
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background min-h-screen">
      <div
        ref={cardRef}
        className="relative h-screen w-full overflow-hidden bg-gradient-warm flex items-center justify-center"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 pat-jaal" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground/80 mb-6">
            The Catalogue
          </p>
          <h2 className="font-display text-5xl lg:text-8xl text-accent-foreground leading-[0.95] text-balance">
            2000+ designs.
            <br />
            <em className="italic">One scroll away.</em>
          </h2>
          <p className="mt-8 text-lg text-accent-foreground/85 max-w-xl mx-auto">
            Floral, paisley, jaal, botanical, animal, minimal — explore our full archive in an
            immersive view.
          </p>
          <Link
            to="/catalogue"
            className={`mt-10 inline-flex items-center gap-3 bg-cream text-primary px-8 py-4 rounded-full font-medium shadow-warm transition-all hover:scale-105 ${expanded ? "opacity-100" : "opacity-90"}`}
          >
            Open Full Catalogue <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
