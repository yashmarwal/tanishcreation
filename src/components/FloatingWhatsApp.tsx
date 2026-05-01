import { waLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi Tanish Creation! I'd like to know more about your fabrics.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-warm transition-transform hover:scale-110"
    >
      <MessageCircle size={26} />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping" />
    </a>
  );
}
