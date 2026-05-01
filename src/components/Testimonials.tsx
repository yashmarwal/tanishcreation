const REVIEWS = [
  {
    name: "Aanya Sharma",
    role: "Founder, Loom & Lily",
    text: "Tanish has been our printing partner for three drops now. The colour consistency across 800m runs is unreal.",
  },
  {
    name: "Rohan Mehta",
    role: "Buyer, House of Khanak",
    text: "We get 100m sample runs treated with the same care as 5000m bulk. That's rare in Jaipur.",
  },
  {
    name: "Priya Iyer",
    role: "D2C Brand Lead",
    text: "Their archive saved us months of design work. We picked 12 jaals and went straight to production.",
  },
  {
    name: "Vikram Singh",
    role: "Wholesaler, Kolkata",
    text: "Lead times are honest. 8 days quoted, 8 days delivered. Every. Single. Time.",
  },
  {
    name: "Meera Joshi",
    role: "Studio Director",
    text: "Custom colourways nailed on the first strike-off. Their colour mixer is a wizard.",
  },
  {
    name: "Arjun Kapoor",
    role: "Boutique Owner, Mumbai",
    text: "The hand-feel of their cotton prints is in another league. My customers ask where it's printed.",
  },
];

export default function Testimonials() {
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Trusted by brands</p>
        <h2 className="font-display text-4xl lg:text-6xl text-primary text-balance">
          What our partners say.
        </h2>
      </div>
      <div className="relative">
        <div className="flex gap-6 marquee w-max">
          {loop.map((r, i) => (
            <figure
              key={i}
              className="w-[340px] sm:w-[420px] shrink-0 bg-card border border-border rounded-3xl p-8 shadow-soft"
            >
              <blockquote className="font-display text-xl text-primary leading-snug">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center font-display text-lg">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-primary">{r.name}</div>
                  <div className="text-xs text-foreground/60">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
