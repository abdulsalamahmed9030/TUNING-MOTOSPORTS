import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-base text-dark-base-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-display font-black text-sm">TF</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg">TUNING</span>
                <span className="font-display font-bold text-lg text-accent">FACTORY</span>
              </div>
            </div>
            <p className="text-sm text-dark-base-foreground/60 leading-relaxed">
              Calgary's premier automotive performance shop. Quality parts, expert service, serious results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Shop Parts", to: "/shop" },
                { label: "Our Services", to: "/services" },
                { label: "Book a Service", to: "/book" },
                { label: "About Us", to: "/about" },
                { label: "FAQ", to: "/faq" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-dark-base-foreground/60 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {["Performance Tuning", "ECU Remapping", "Dyno Tuning", "Suspension", "Brake Upgrades", "Custom Builds"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-dark-base-foreground/60 hover:text-accent transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-dark-base-foreground/60">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:403-993-6742" className="hover:text-accent transition-colors">403-993-6742</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-dark-base-foreground/60">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:general@tuningfactory.ca" className="hover:text-accent transition-colors">general@tuningfactory.ca</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-dark-base-foreground/60">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>Calgary, Alberta, Canada</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-base-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-base-foreground/40">
            © {new Date().getFullYear()} TuningFactory.ca. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-dark-base-foreground/40 hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-dark-base-foreground/40 hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
