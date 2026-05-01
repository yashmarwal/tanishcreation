import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    n: "01",
    title: "Design Approval",
    desc: "You share the artwork or pick from our archive. Our studio prepares a digital strike-off for sign-off.",
  },
  {
    n: "02",
    title: "Screen Preparation",
    desc: "Each colour gets its own hand-coated screen, exposed and washed to micron precision.",
  },
  {
    n: "03",
    title: "Color Mixing",
    desc: "Pigments are hand-mixed against your reference. We log every formula for repeat orders.",
  },
  {
    n: "04",
    title: "Printing",
    desc: "Tables of up to 60 metres get pulled by hand, layer by layer, colour by colour.",
  },
  {
    n: "05",
    title: "Quality Check",
    desc: "Every roll is inspected against the approved strike-off before it ships.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;
    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const distance = track.scrollWidth - window.innerWidth + 80;
      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-primary text-primary-foreground overflow-hidden"
    >
      <div className="h-screen flex flex-col justify-center">
        <div className="px-6 lg:px-10 max-w-7xl mx-auto w-full mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">The Process</p>
          <h2 className="font-display text-4xl lg:text-6xl text-balance">
            Five steps from your <em className="text-accent">brief</em> to your{" "}
            <em className="italic">box</em>.
          </h2>
        </div>
        <div ref={trackRef} className="flex gap-6 px-6 lg:px-10 pl-[10vw]">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="shrink-0 w-[80vw] sm:w-[55vw] lg:w-[40vw] bg-primary-foreground/5 border border-primary-foreground/15 rounded-3xl p-10"
            >
              <div className="font-display text-7xl text-accent">{s.n}</div>
              <h3 className="font-display text-3xl mt-4">{s.title}</h3>
              <p className="mt-4 text-primary-foreground/75 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
