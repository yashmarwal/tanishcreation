import { motion } from "framer-motion";

const STATS = [
  { value: "2000+", label: "Unique Designs" },
  { value: "1000+", label: "Happy Clients" },
  { value: "65+", label: "Years of Heritage" },
  { value: "15,000m", label: "Daily Capacity" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Our Story</p>
          <h2 className="font-display text-4xl lg:text-6xl text-primary leading-tight text-balance">
            Three generations of <em className="text-accent">Jaipur</em> textile heritage
          </h2>
          <div className="mt-8 space-y-5 text-foreground/75 text-lg leading-relaxed">
            <p>
              Tanish Creation began in the printing lanes of Sanganer in 1959 — a region where every
              household once carried a wooden block and a dye-stained dupatta hung from every roof.
            </p>
            <p>
              Today we run one of Jaipur's most trusted screen printing facilities: a 2000+ design
              library, 15,000 metres of daily capacity, and a team that still hand-mixes every base
              colour the way our grandfather did.
            </p>
            <p>
              Boutiques, D2C brands, and wholesalers across India trust us because we treat{" "}
              <em>every</em> hundred-metre order like a heritage commission.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 lg:p-10 shadow-soft hover:shadow-warm transition-all group"
            >
              <div className="font-display text-4xl lg:text-6xl text-primary group-hover:text-accent transition-colors">
                {s.value}
              </div>
              <div className="mt-3 text-sm uppercase tracking-wider text-foreground/60">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
