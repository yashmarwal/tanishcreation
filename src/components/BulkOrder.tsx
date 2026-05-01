import { useState } from "react";
import { waLink } from "@/lib/whatsapp";

export default function BulkOrder() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    design: "",
    quantity: "",
    color: "",
    notes: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `📦 BULK ORDER REQUEST\n\nName: ${form.name}\nPhone: ${form.phone}\nCompany: ${form.company}\nDesign: ${form.design}\nQuantity: ${form.quantity} metres\nColor: ${form.color}\nNotes: ${form.notes}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Bulk Manufacturing</p>
          <h2 className="font-display text-4xl lg:text-7xl text-primary leading-[0.95] text-balance">
            Built for bulk.
            <br />
            <em className="text-accent">Priced for growth.</em>
          </h2>
          <div className="mt-10 space-y-5">
            {[
              ["Minimum order", "100 metres"],
              ["Starting price", "₹65 / metre"],
              ["Lead time", "7–10 days"],
              ["Capacity", "15,000 metres / day"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline justify-between border-b border-border pb-3"
              >
                <span className="text-sm uppercase tracking-wider text-foreground/60">{k}</span>
                <span className="font-display text-2xl text-primary">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={submit}
          className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-warm space-y-4"
        >
          <h3 className="font-display text-2xl text-primary mb-2">Get a Bulk Quote</h3>
          {[
            { k: "name", p: "Your name", req: true },
            { k: "phone", p: "Phone number", req: true },
            { k: "company", p: "Company / brand" },
            { k: "design", p: "Design name or code" },
          ].map((f) => (
            <input
              key={f.k}
              required={f.req}
              maxLength={120}
              placeholder={f.p}
              value={(form as Record<string, string>)[f.k]}
              onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
            />
          ))}
          <div className="grid grid-cols-2 gap-4">
            <input
              required
              maxLength={20}
              placeholder="Quantity (m)"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              className="bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
            />
            <input
              maxLength={50}
              placeholder="Preferred color"
              value={form.color}
              onChange={(e) => setForm({ ...form, color: e.target.value })}
              className="bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
            />
          </div>
          <textarea
            placeholder="Notes (optional)"
            maxLength={500}
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            rows={3}
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none resize-none"
          />
          <button
            type="submit"
            className="w-full bg-accent text-accent-foreground py-4 rounded-full font-medium hover:bg-accent/90 transition-all hover:scale-[1.01]"
          >
            Get Quote on WhatsApp →
          </button>
        </form>
      </div>
    </section>
  );
}
