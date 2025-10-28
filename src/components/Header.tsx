import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "figma:asset/7b3d602200e6fce521ac03aec757a698f2927920.png";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Produits", page: "products" },
    { label: "À propos", page: "about" },
    { label: "Assistance", page: "support" },
  ];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src={logoImg} 
              alt="ProBeats" 
              className="h-8 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`hover:text-primary transition-colors ${
                  currentPage === link.page ? "text-primary" : "text-card-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => onNavigate("cart")}
              className="relative p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-card-foreground" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
              <User className="w-4 h-4" />
              Connexion
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-card-foreground" /> : <Menu className="w-6 h-6 text-card-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => {
                    onNavigate(link.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors ${
                    currentPage === link.page ? "bg-secondary text-primary" : "text-card-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  onNavigate("cart");
                  setMobileMenuOpen(false);
                }}
                className="text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors flex items-center justify-between text-card-foreground"
              >
                <span>Panier</span>
                <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="text-left px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                <User className="w-4 h-4" />
                Connexion
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
