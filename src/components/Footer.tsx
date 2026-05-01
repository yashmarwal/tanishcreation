import { Link } from "@tanstack/react-router";
import { EMAIL, GST, INSTAGRAM, PHONE_DISPLAY, waLink } from "@/lib/whatsapp";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl font-semibold">Tanish</span>
            <span className="font-display text-xl italic text-accent">Creation</span>
          </div>
          <p className="mt-4 font-display italic text-2xl text-secondary text-balance">
            Printing Stories on Every Fabric
          </p>
          <p className="mt-6 text-sm text-primary-foreground/70 max-w-md">
            Jaipur-based premium screen printing manufacturer. Heritage craft, modern scale, trusted
            by boutiques and D2C brands across India.
          </p>
          <p className="mt-6 text-xs text-primary-foreground/60">
            GST: <span className="font-mono text-accent">{GST}</span>
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-accent">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>
              <Link to="/about" className="hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link to="/catalogue" className="hover:text-accent">
                Catalogue
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-accent">
                Journal
              </Link>
            </li>
            <li>
              <Link to="/factory-visit" className="hover:text-accent">
                Factory Visit
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-accent">Reach Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-1" />
              <a href={waLink("Hello!")} className="hover:text-accent">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-1" />
              <a href={`mailto:${EMAIL}`} className="hover:text-accent break-all">
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-1" />
              Jaipur, Rajasthan, India
            </li>
            <li className="flex items-start gap-2">
              <Instagram size={14} className="mt-1" />
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-accent">
                @tanishcreation.co
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Tanish Creation. All rights reserved.</p>
          <p>Crafted in Jaipur • 65+ Years of Heritage</p>
        </div>
      </div>
    </footer>
  );
}
