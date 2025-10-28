import { Star, ShoppingBag, Truck, Shield, HeadphonesIcon, Volume2, Zap, Battery } from "lucide-react";
import headphonesImg2 from "figma:asset/a26a2f5d7bdd0dfd3c3456b7f74174e8f5b323a7.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductDetailPageProps {
  onNavigate: (page: string) => void;
}

export function ProductDetailPage({ onNavigate }: ProductDetailPageProps) {
  const product = {
    name: "Casque Audio Premium ProBeats",
    description: "Plongez dans une expérience sonore exceptionnelle avec le Casque Audio Premium ProBeats. Équipé de la dernière technologie de réduction de bruit active, ce casque offre une qualité audio cristalline et un confort inégalé pour des heures d'écoute. Parfait pour les professionnels de l'audio, les audiophiles et tous ceux qui recherchent l'excellence.",
    price: "299€",
    oldPrice: "399€",
    rating: 4.8,
    reviews: 342,
    image: headphonesImg2,
    inStock: true
  };

  const characteristics = [
    {
      icon: Volume2,
      title: "Audio Haute Fidélité",
      description: "Drivers 40mm pour une restitution sonore exceptionnelle avec des basses profondes et des aigus cristallins."
    },
    {
      icon: Zap,
      title: "Réduction de Bruit Active",
      description: "Technologie ANC avancée qui élimine jusqu'à 95% des bruits ambiants pour une immersion totale."
    },
    {
      icon: Battery,
      title: "Autonomie Longue Durée",
      description: "Jusqu'à 40 heures d'écoute en mode sans fil et 60 heures avec ANC désactivée. Charge rapide en 2h."
    }
  ];

  const features = [
    "Bluetooth 5.3 pour une connexion stable",
    "Compatibilité multipoint (2 appareils simultanés)",
    "Microphone intégré avec suppression de bruit",
    "Pliable avec étui de transport premium",
    "Coussinets en mousse à mémoire de forme",
    "Câble audio détachable inclus"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Bloc produit principal */}
        <div className="bg-card rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image du produit */}
            <div className="p-8 bg-muted/30" style={{ padding: "24px" }}>
              <div className="aspect-square rounded-xl overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Détails du produit */}
            <div className="p-8" style={{ padding: "24px" }}>
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm mb-4">
                {product.inStock ? "En stock" : "Rupture de stock"}
              </div>
              
              <h1 className="mb-4 text-card-foreground">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-card-foreground">{product.rating}/5</span>
                <span className="text-muted-foreground">({product.reviews} avis)</span>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl text-primary">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-2xl text-muted-foreground line-through">{product.oldPrice}</span>
                )}
                <span className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm">
                  -25%
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <button 
                  onClick={() => onNavigate("cart")}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-3 text-lg"
                >
                  <ShoppingBag className="w-6 h-6" />
                  Ajouter au Panier
                </button>
                <button className="w-full px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
                  Acheter Maintenant
                </button>
              </div>

              {/* Avantages */}
              <div className="grid grid-cols-1 gap-4 pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-primary" />
                  <span className="text-sm text-card-foreground">Livraison gratuite dès 50€</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm text-card-foreground">Garantie 2 ans</span>
                </div>
                <div className="flex items-center gap-3">
                  <HeadphonesIcon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-card-foreground">Support client 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloc de description avec slogan et image d'ambiance */}
        <div className="bg-gradient-to-r from-primary to-[#007580] rounded-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-12" style={{ padding: "24px" }}>
              <h2 className="text-4xl md:text-5xl mb-6 text-white">
                L'Excellence Audio
                <br />
                À Portée d'Oreille
              </h2>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Conçu pour les passionnés qui ne font aucun compromis sur la qualité. 
                Chaque détail a été pensé pour vous offrir une expérience d'écoute immersive 
                et un confort absolu, même après des heures d'utilisation.
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full min-h-[400px] lg:min-h-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718217028088-a23cb3b277c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzYxNDk4NzAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ambiance audio studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3 Caractéristiques en colonne */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-foreground">Caractéristiques Principales</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologie de pointe et design premium pour une expérience audio incomparable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {characteristics.map((char, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow border border-border"
                style={{ padding: "24px" }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-[#007580] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <char.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="mb-4 text-card-foreground">{char.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {char.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section spécifications techniques */}
        <div className="bg-card rounded-2xl p-8 shadow-lg" style={{ padding: "24px" }}>
          <h2 className="mb-8 text-card-foreground">Spécifications Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Type</span>
                <span className="text-card-foreground">Casque circum-auriculaire</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Connectivité</span>
                <span className="text-card-foreground">Bluetooth 5.3 / Filaire</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Drivers</span>
                <span className="text-card-foreground">40mm néodyme</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Réponse en fréquence</span>
                <span className="text-card-foreground">20Hz - 20kHz</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Autonomie</span>
                <span className="text-card-foreground">40h (ANC) / 60h</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Temps de charge</span>
                <span className="text-card-foreground">2 heures</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Poids</span>
                <span className="text-card-foreground">250g</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Garantie</span>
                <span className="text-card-foreground">2 ans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
