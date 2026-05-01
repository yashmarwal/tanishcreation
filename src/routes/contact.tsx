import { createFileRoute } from "@tanstack/react-router";
import { EMAIL, INSTAGRAM, PHONE_DISPLAY, waLink } from "@/lib/whatsapp";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tanish Creation — Jaipur Screen Printing Manufacturer" },
      {
        name: "description",
        content:
          "Reach our Jaipur team for bulk fabric printing, custom designs, or a factory visit. Call, email, or WhatsApp us.",
      },
      { property: "og:title", content: "Contact Tanish Creation" },
      { property: "og:description", content: "Reach our Jaipur team for bulk fabric printing." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { I: Phone, k: "Call", v: PHONE_DISPLAY, href: `tel:+918302430391` },
    { I: MessageCircle, k: "WhatsApp", v: PHONE_DISPLAY, href: waLink("Hi Tanish Creation!") },
    { I: Mail, k: "Email", v: EMAIL, href: `mailto:${EMAIL}` },
    { I: Instagram, k: "Instagram", v: "@tanishcreation.co", href: INSTAGRAM },
    { I: MapPin, k: "Location", v: "Jaipur, Rajasthan, India" },
  ];
  return (
    <section className="pt-32 lg:pt-44 pb-24 bg-gradient-cream">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Contact</p>
        <h1 className="font-display text-5xl lg:text-7xl text-primary leading-[0.95] text-balance">
          Let's print something <em className="text-accent">beautiful</em>.
        </h1>
        <p className="mt-6 text-lg text-foreground/70 max-w-xl mx-auto">
          We reply fastest on WhatsApp. Quotes typically within 2 hours.
        </p>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {items.map((it) => {
            const Inner = (
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent transition-all hover:-translate-y-1 shadow-soft h-full">
                <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4">
                  <it.I size={18} />
                </div>
                <div className="text-xs uppercase tracking-wider text-foreground/50">{it.k}</div>
                <div className="text-primary mt-1 break-all">{it.v}</div>
              </div>
            );
            return it.href ? (
              <a
                key={it.k}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {Inner}
              </a>
            ) : (
              <div key={it.k}>{Inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
