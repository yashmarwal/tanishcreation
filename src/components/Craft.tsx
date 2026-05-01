import { motion } from "framer-motion";
import { Palette, Brush, Package, Layers } from "lucide-react";

const ITEMS = [
  {
    icon: Brush,
    title: "Screen Printing",
    desc: "Hand-pulled prints on cotton, linen, rayon and silk — the way Sanganer has done it for centuries.",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    desc: "Bring us a sketch, a mood, a Pinterest board. Our in-house studio turns it into a press-ready screen.",
  },
  {
    icon: Package,
    title: "Bulk Orders",
    desc: "From 100 metres for a boutique drop to 15,000 metres a day for D2C scale. Same craft, every order.",
  },
  {
    icon: Layers,
    title: "Fabric Sourcing",
    desc: "Cotton from Erode, linen from Coimbatore, rayon from Surat — we source the base, you choose the print.",
  },
];

export default function Craft() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Our Craft</p>
          <h2 className="font-display text-4xl lg:text-6xl text-primary leading-tight text-balance">
            Four services, one obsession with quality.
          </h2>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-7 border border-border hover:border-accent transition-all hover:-translate-y-1 shadow-soft"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-5">
                <item.icon size={22} />
              </div>
              <h3 className="font-display text-2xl text-primary mb-3">{item.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
