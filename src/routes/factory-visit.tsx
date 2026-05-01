import { createFileRoute } from "@tanstack/react-router";
import FactoryVisitForm from "@/components/FactoryVisitForm";
import { MapPin, Clock, Users } from "lucide-react";

export const Route = createFileRoute("/factory-visit")({
  head: () => ({
    meta: [
      { title: "Factory Visit — See Our Sanganer Print Floor | Tanish Creation" },
      {
        name: "description",
        content:
          "Book a free factory visit at our Jaipur screen printing facility. Walk the floor, meet our printers, choose your base fabric.",
      },
      { property: "og:title", content: "Visit Our Jaipur Print Factory" },
      {
        property: "og:description",
        content: "Book a free visit to our Sanganer screen printing floor.",
      },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <section className="pt-32 lg:pt-44 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Factory Visit</p>
          <h1 className="font-display text-5xl lg:text-7xl text-primary leading-[0.95] text-balance">
            See your fabric, <em className="text-accent">before</em> it's yours.
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-md">
            A factory visit is the fastest way to understand how Sanganer screen printing actually
            works — and to see whether we're the right partner for you.
          </p>
          <ul className="mt-10 space-y-5">
            {[
              { I: MapPin, k: "Location", v: "Sanganer, Jaipur, Rajasthan" },
              { I: Clock, k: "Visit hours", v: "Mon–Sat, 10am – 5pm" },
              { I: Users, k: "Group size", v: "Up to 20 visitors per slot" },
            ].map(({ I, k, v }) => (
              <li key={k} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
                  <I size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-foreground/50">{k}</div>
                  <div className="text-primary text-lg">{v}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <FactoryVisitForm />
      </div>
    </section>
  );
}
