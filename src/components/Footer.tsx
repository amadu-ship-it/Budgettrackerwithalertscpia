import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoImg from "figma:asset/7b3d602200e6fce521ac03aec757a698f2927920.png";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerSections = [
    {
      title: "Navigation",
      links: [
        { label: "Accueil", page: "home" },
        { label: "Produits", page: "products" },
        { label: "À propos", page: "about" },
        { label: "Assistance", page: "support" },
        { label: "Panier", page: "cart" },
      ],
    },
    {
      title: "Informations",
      links: [
        { label: "Mentions légales", page: "legal" },
        { label: "Politique de confidentialité", page: "privacy" },
        { label: "Conditions générales de vente", page: "terms" },
        { label: "Politique de retour", page: "returns" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "#" },
    { icon: Instagram, label: "Instagram", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Linkedin, label: "LinkedIn", url: "#" },
  ];

  return (
    <footer className="bg-[#B6A299] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src={logoImg} 
                alt="ProBeats" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm mb-4 text-white/90">
              Votre destination pour les meilleures expériences audio. Nous proposons des produits de qualité avec un service client exceptionnel.
            </p>
          </div>

          {/* Navigation Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.page}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-white/90" />
                <span className="text-sm text-white/90">
                  123 Avenue de la Technologie<br />
                  75001 Paris, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-white/90" />
                <span className="text-sm text-white/90">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-white/90" />
                <span className="text-sm text-white/90">contact@techstore.fr</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-white mb-3">Suivez-nous</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p className="text-white/90">&copy; 2025 ProBeats. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
