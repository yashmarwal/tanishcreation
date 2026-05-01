import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Craft from "@/components/Craft";
import CataloguePreview from "@/components/CataloguePreview";
import Process from "@/components/Process";
import BulkOrder from "@/components/BulkOrder";
import Testimonials from "@/components/Testimonials";
import FactoryVisitForm from "@/components/FactoryVisitForm";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Craft />
      <CataloguePreview />
      <Process />
      <BulkOrder />
      <Testimonials />

      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Factory Visit</p>
            <h2 className="font-display text-4xl lg:text-6xl text-primary leading-tight text-balance">
              Come see how your fabric is made.
            </h2>
            <p className="mt-6 text-foreground/70 text-lg max-w-md">
              Walk our Sanganer floor, meet the printers behind your order, and pick your base
              fabric on the spot. Visits are free and scheduled around you.
            </p>
          </div>
          <FactoryVisitForm />
        </div>
      </section>
    </>
  );
}
