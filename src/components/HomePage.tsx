import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Star, ShoppingBag, Truck, Shield, Headphones, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import speakerImg from "figma:asset/2a4e52f9a8717276c252bd81d85b9766286c0eae.png";
import headphonesImg1 from "figma:asset/cf5da9a9db5c3a49aa5d291fda2eb23901dfbfa1.png";
import headphonesImg2 from "figma:asset/a26a2f5d7bdd0dfd3c3456b7f74174e8f5b323a7.png";
import headphonesImg3 from "figma:asset/93e38d7e1f788cf77c11c38b0c1a88d8d7b46902.png";
import speakerImg2 from "figma:asset/1d5391512fb01dbe0326c9940c9e2faa42c533ab.png";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Produit phare : Casque Audio Premium
  const heroProduct = {
    id: 1,
    name: "Casque Audio Premium ProBeats",
    description: "Découvrez une qualité sonore exceptionnelle avec réduction de bruit active et un confort inégalé. Le choix des professionnels.",
    price: "299€",
    rating: 4.8,
    image: headphonesImg2,
    category: "Produit Phare"
  };

  // Les deux autres produits
  const otherProducts = [
    {
      id: 2,
      name: "Enceinte Mini Bluetooth",
      price: "99€",
      rating: 4.6,
      image: speakerImg,
      category: "Audio Portable"
    },
    {
      id: 3,
      name: "Enceinte Studio Bois Premium",
      price: "399€",
      rating: 4.9,
      image: speakerImg2,
      category: "Audio Haut de Gamme"
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Livraison Gratuite",
      description: "Livraison gratuite pour toute commande supérieure à 50€"
    },
    {
      icon: Shield,
      title: "Paiement Sécurisé",
      description: "Vos transactions sont 100% sécurisées et cryptées"
    },
    {
      icon: Headphones,
      title: "Support 24/7",
      description: "Notre équipe est disponible pour vous aider à tout moment"
    },
    {
      icon: ShoppingBag,
      title: "Retours Faciles",
      description: "30 jours pour changer d'avis et retourner vos produits"
    }
  ];

  // Recommandations clients / Extraits d'articles
  const testimonials = [
    {
      id: 1,
      text: "Une qualité audio exceptionnelle ! Le casque ProBeats a transformé mon expérience d'écoute. Le meilleur investissement que j'ai fait cette année.",
      author: "Marie Dubois",
      role: "Productrice Musicale",
      rating: 5
    },
    {
      id: 2,
      text: "Design élégant et performances incroyables. La réduction de bruit active est parfaite pour travailler dans des environnements bruyants.",
      author: "Thomas Martin",
      role: "Journaliste Tech",
      rating: 5
    },
    {
      id: 3,
      text: "ProBeats offre un rapport qualité-prix imbattable. Les enceintes sont puissantes et le son est d'une clarté remarquable. Je recommande vivement !",
      author: "Sophie Laurent",
      role: "Audiophile",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      {/* Hero Section - Produit Phare: Casque Audio */}
      <section className="relative bg-gradient-to-br from-[#009099] to-[#007580] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div className="p-6" style={{ padding: "24px" }}>
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-6">
                {heroProduct.category}
              </span>
              <h1 className="mb-6 text-white">
                {heroProduct.name}
              </h1>
              <p className="text-xl mb-6 text-white/90">
                {heroProduct.description}
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg">{heroProduct.rating}/5</span>
                <span className="text-white/80">• 342 avis</span>
              </div>
              <div className="flex items-center gap-6 mb-8">
                <span className="text-5xl">{heroProduct.price}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate("products")}
                  className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                >
                  Acheter Maintenant
                  <ShoppingBag className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => onNavigate("products")}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  En savoir plus
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image du produit phare */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                <img
                  src={heroProduct.image}
                  alt={heroProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
                style={{ padding: "24px" }}
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ligne des deux autres produits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" style={{ padding: "24px" }}>
            <h2 className="mb-4 text-foreground">Découvrez Notre Gamme</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complétez votre expérience audio avec nos enceintes premium. Design élégant et performances exceptionnelles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProducts.map((product) => (
              <div 
                key={product.id} 
                className="group cursor-pointer bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all"
                onClick={() => onNavigate("products")}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6" style={{ padding: "24px" }}>
                  <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                  <h3 className="mb-3 text-card-foreground">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-card-foreground">{product.rating}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">128 avis</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-primary">{product.price}</span>
                    <button className="p-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate("products")}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Voir tous les produits
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Diaporama de recommandations clients */}
      <section className="py-20 bg-gradient-to-br from-[#B6A299] to-[#9d8d84] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12" style={{ padding: "24px" }}>
            <h2 className="mb-4 text-white">Ce Que Disent Nos Clients</h2>
            <p className="text-white/90">
              Des milliers de clients satisfaits à travers le monde
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20" style={{ padding: "24px" }}>
              <Quote className="w-12 h-12 text-white/40 mb-6" />
              
              <div className="mb-8">
                <p className="text-xl md:text-2xl mb-6 text-white leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div>
                  <div className="text-white mb-1">{testimonials[currentTestimonial].author}</div>
                  <div className="text-white/80 text-sm">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button 
                  onClick={prevTestimonial}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Témoignage précédent"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentTestimonial ? 'w-8 bg-white' : 'w-2 bg-white/40'
                      }`}
                      aria-label={`Aller au témoignage ${index + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextTestimonial}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Témoignage suivant"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Newsletter */}
      <section className="py-24 bg-gradient-to-r from-primary to-[#007580] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-6" style={{ padding: "24px" }}>
            <h2 className="mb-4 text-white">Restez Informé des Dernières Nouveautés</h2>
            <p className="mb-8 text-white/90">
              Inscrivez-vous à notre newsletter et recevez en exclusivité nos offres spéciales, 
              lancements de produits et conseils technologiques.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white"
              />
              <button 
                type="submit"
                className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
