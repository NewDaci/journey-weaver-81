import { Link } from "react-router-dom";
import { Plane, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Destinations", href: "#destinations" },
  { name: "Tour Packages", href: "#packages" },
  { name: "Contact", href: "#contact" },
];

const destinations = [
  { name: "Maldives", href: "#" },
  { name: "Switzerland", href: "#" },
  { name: "Dubai", href: "#" },
  { name: "Bali", href: "#" },
  { name: "Greece", href: "#" },
  { name: "Paris", href: "#" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Youtube", icon: Youtube, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-primary-foreground/80">
                Get exclusive travel deals and updates straight to your inbox
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 min-w-[280px]"
              />
              <Button variant="sunset" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Plane className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-display text-2xl font-bold">Wanderlust</span>
              </Link>
              <p className="text-primary-foreground/70 mb-6">
                Your trusted travel partner for unforgettable adventures around the world. Creating memories since 2010.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Destinations */}
            <div>
              <h4 className="font-display text-xl font-semibold mb-6">Top Destinations</h4>
              <ul className="space-y-3">
                {destinations.map((dest) => (
                  <li key={dest.name}>
                    <a
                      href={dest.href}
                      className="text-primary-foreground/70 hover:text-primary transition-colors"
                    >
                      {dest.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-xl font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary mt-1 shrink-0" />
                  <span className="text-primary-foreground/70">
                    123 Travel Street, Adventure City, TC 12345
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    <Phone size={20} className="text-primary shrink-0" />
                    <span>+1 (234) 567-890</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@wanderlust.com"
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    <Mail size={20} className="text-primary shrink-0" />
                    <span>info@wanderlust.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Wanderlust Tours & Travels. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
