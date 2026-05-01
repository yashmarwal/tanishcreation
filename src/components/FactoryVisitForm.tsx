import { useState } from "react";
import { waLink } from "@/lib/whatsapp";

export default function FactoryVisitForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    date: "",
    visitors: "1",
    message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `🏭 FACTORY VISIT REQUEST\n\nName: ${form.name}\nPhone: ${form.phone}\nCompany: ${form.company}\nDate: ${form.date}\nVisitors: ${form.visitors}\nMessage: ${form.message}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <form
      onSubmit={submit}
      className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-warm space-y-4"
    >
      <h3 className="font-display text-2xl text-primary">Plan your visit</h3>
      <input
        required
        maxLength={120}
        placeholder="Your name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
      />
      <div className="grid grid-cols-2 gap-4">
        <input
          required
          maxLength={20}
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
        />
        <input
          maxLength={120}
          placeholder="Company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          required
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
        />
        <input
          required
          type="number"
          min={1}
          max={20}
          value={form.visitors}
          onChange={(e) => setForm({ ...form, visitors: e.target.value })}
          placeholder="Visitors"
          className="bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
        />
      </div>
      <textarea
        maxLength={500}
        rows={3}
        placeholder="Anything specific you'd like to see?"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none resize-none"
      />
      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium hover:bg-primary/90 transition-all"
      >
        Confirm via WhatsApp →
      </button>
    </form>
  );
}
