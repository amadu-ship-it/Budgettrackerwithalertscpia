import { Star, ShoppingBag } from "lucide-react";
import headphonesImg1 from "figma:asset/cf5da9a9db5c3a49aa5d291fda2eb23901dfbfa1.png";
import headphonesImg2 from "figma:asset/a26a2f5d7bdd0dfd3c3456b7f74174e8f5b323a7.png";
import headphonesImg3 from "figma:asset/93e38d7e1f788cf77c11c38b0c1a88d8d7b46902.png";
import headphonesImg4 from "figma:asset/9eba8d97b8d33566a3017a72bb4a4a39f8f965b8.png";
import speakerImg from "figma:asset/2a4e52f9a8717276c252bd81d85b9766286c0eae.png";
import speakerImg2 from "figma:asset/1d5391512fb01dbe0326c9940c9e2faa42c533ab.png";

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const products = [
    {
      id: 1,
      name: "Casque Audio Premium ProBeats",
      price: "299€",
      oldPrice: "399€",
      rating: 4.8,
      reviews: 342,
      image: headphonesImg2,
      category: "Casques",
      badge: "Produit Phare"
    },
    {
      id: 2,
      name: "Casque Confort Premium",
      price: "249€",
      rating: 4.9,
      reviews: 256,
      image: headphonesImg3,
      category: "Casques"
    },
    {
      id: 3,
      name: "Casque Sans Fil Elite",
      price: "349€",
      rating: 4.7,
      reviews: 189,
      image: headphonesImg1,
      category: "Casques"
    },
    {
      id: 4,
      name: "Casque Wireless Minimaliste",
      price: "199€",
      rating: 4.7,
      reviews: 145,
      image: headphonesImg4,
      category: "Casques"
    },
    {
      id: 5,
      name: "Enceinte Mini Bluetooth",
      price: "99€",
      rating: 4.6,
      reviews: 423,
      image: speakerImg,
      category: "Enceintes"
    },
    {
      id: 6,
      name: "Enceinte Studio Bois Premium",
      price: "399€",
      rating: 4.9,
      reviews: 167,
      image: speakerImg2,
      category: "Enceintes",
      badge: "Nouveau"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-[#007580] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="p-6 text-center" style={{ padding: "24px" }}>
            <h1 className="mb-4 text-white">Nos Produits Audio</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Découvrez notre gamme complète de produits audio haut de gamme. 
              Des casques premium aux enceintes exceptionnelles.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
            Tous les produits
          </button>
          <button className="px-6 py-3 bg-card text-card-foreground border border-border rounded-lg hover:bg-muted transition-colors">
            Casques
          </button>
          <button className="px-6 py-3 bg-card text-card-foreground border border-border rounded-lg hover:bg-muted transition-colors">
            Enceintes
          </button>
          <button className="px-6 py-3 bg-card text-card-foreground border border-border rounded-lg hover:bg-muted transition-colors">
            Nouveautés
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all"
              onClick={() => onNavigate("product-detail")}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm shadow-lg">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6" style={{ padding: "24px" }}>
                <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                <h3 className="mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-card-foreground">{product.rating}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{product.reviews} avis</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl text-primary">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through">{product.oldPrice}</span>
                    )}
                  </div>
                  <button 
                    className="p-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate("cart");
                    }}
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-br from-[#B6A299] to-[#9d8d84] rounded-2xl p-12 text-center text-white">
          <h2 className="mb-4 text-white">Besoin d'aide pour choisir ?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Notre équipe d'experts est là pour vous guider dans le choix du produit parfait pour vos besoins.
          </p>
          <button 
            onClick={() => onNavigate("support")}
            className="px-8 py-4 bg-white text-[#B6A299] rounded-lg hover:bg-white/90 transition-colors"
          >
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
}
