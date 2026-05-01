import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SmoothScroll from "@/components/SmoothScroll";
import ExitIntent from "@/components/ExitIntent";

const SITE_URL = "https://tanishcreation.lovable.app";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tanish Creation",
  description:
    "Premium screen printing fabric manufacturer based in Jaipur, India. 2000+ designs, bulk orders from 100 metres.",
  url: SITE_URL,
  telephone: "+91-83024-30391",
  email: "tanishcreation16@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  sameAs: ["https://www.instagram.com/tanishcreation.co"],
  priceRange: "₹₹",
  foundingDate: "1959",
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl text-primary">Design not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tanish Creation | Screen Printing Manufacturer Jaipur" },
      {
        name: "description",
        content:
          "Jaipur-based premium screen printing fabric manufacturer. 2000+ designs, bulk orders from 100m, ₹65/m. 65+ years of heritage.",
      },
      {
        name: "keywords",
        content:
          "screen printing Jaipur, fabric printing manufacturer India, bulk fabric printing, Sanganer prints, screen print fabric supplier",
      },
      { name: "author", content: "Tanish Creation" },
      { property: "og:title", content: "Tanish Creation | Screen Printing Manufacturer Jaipur" },
      {
        property: "og:description",
        content: "Premium screen printed fabrics from Jaipur. 2000+ designs, bulk from 100 metres.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(JSON_LD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ExitIntent />
    </>
  );
}
