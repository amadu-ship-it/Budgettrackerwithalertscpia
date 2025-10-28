import { Trash2, Plus, Minus, CreditCard, Truck, MapPin, Lock } from "lucide-react";
import { useState } from "react";
import headphonesImg2 from "figma:asset/a26a2f5d7bdd0dfd3c3456b7f74174e8f5b323a7.png";
import speakerImg from "figma:asset/2a4e52f9a8717276c252bd81d85b9766286c0eae.png";

interface CartPageProps {
  onNavigate: (page: string) => void;
}

export function CartPage({ onNavigate }: CartPageProps) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Casque Audio Premium ProBeats",
      price: 299,
      quantity: 1,
      image: headphonesImg2
    },
    {
      id: 2,
      name: "Enceinte Mini Bluetooth",
      price: 99,
      quantity: 2,
      image: speakerImg
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="p-6" style={{ padding: "24px" }}>
            <h1 className="mb-2 text-card-foreground">Commande</h1>
            <p className="text-muted-foreground">Finalisez votre commande et procédez au paiement</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Section principale - Récapitulatif de commande */}
          <div className="lg:col-span-2 space-y-8">
            {/* Récapitulatif des articles */}
            <div className="bg-card rounded-lg shadow-md border border-border">
              <div className="p-6 border-b border-border" style={{ padding: "24px" }}>
                <h2 className="text-card-foreground">Récapitulatif de la commande</h2>
                <p className="text-sm text-muted-foreground mt-1">{cartItems.length} article(s) dans votre panier</p>
              </div>
              
              <div className="divide-y divide-border">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6" style={{ padding: "24px" }}>
                    <div className="flex gap-6">
                      <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="mb-2 text-card-foreground">{item.name}</h3>
                        <p className="text-primary mb-4">{item.price}€</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-lg border border-border hover:bg-muted transition-colors flex items-center justify-center"
                            >
                              <Minus className="w-4 h-4 text-card-foreground" />
                            </button>
                            <span className="w-12 text-center text-card-foreground">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-lg border border-border hover:bg-muted transition-colors flex items-center justify-center"
                            >
                              <Plus className="w-4 h-4 text-card-foreground" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Informations de livraison */}
            <div className="bg-card rounded-lg shadow-md border border-border">
              <div className="p-6 border-b border-border" style={{ padding: "24px" }}>
                <div className="flex items-center gap-3">
                  <Truck className="w-6 h-6 text-primary" />
                  <h2 className="text-card-foreground">Informations de livraison</h2>
                </div>
              </div>
              
              <div className="p-6" style={{ padding: "24px" }}>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-card-foreground">Prénom</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary text-card-foreground"
                        placeholder="Jean"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-card-foreground">Nom</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary text-card-foreground"
                        placeholder="Dupont"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2 text-card-foreground">Adresse</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary text-card-foreground"
                      placeholder="123 Rue de la République"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-card-foreground">Code postal</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary text-card-foreground"
                        placeholder="75001"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm mb-2 text-card-foreground">Ville</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary text-card-foreground"
                        placeholder="Paris"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2 text-card-foreground">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary text-card-foreground"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Informations de paiement */}
            <div className="bg-card rounded-lg shadow-md border border-border">
              <div className="p-6 border-b border-border" style={{ padding: "24px" }}>
                <div className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-primary" />
                  <h2 className="text-card-foreground">Informations de paiement</h2>
                </div>
              </div>
              
              <div className="p-6" style={{ padding: "24px" }}>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2 text-card-foreground">Numéro de carte</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary text-card-foreground"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-card-foreground">Date d'expiration</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary text-card-foreground"
                        placeholder="MM/AA"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-card-foreground">CVV</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary text-card-foreground"
                        placeholder="123"
                        maxLength={3}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <Lock className="w-5 h-5 text-primary" />
                    <p className="text-sm text-card-foreground">
                      Paiement 100% sécurisé avec cryptage SSL
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar - Total et validation */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-md border border-border sticky top-24">
              <div className="p-6 border-b border-border" style={{ padding: "24px" }}>
                <h2 className="text-card-foreground">Résumé</h2>
              </div>
              
              <div className="p-6 space-y-4" style={{ padding: "24px" }}>
                <div className="flex justify-between text-card-foreground">
                  <span>Sous-total</span>
                  <span>{subtotal.toFixed(2)}€</span>
                </div>
                
                <div className="flex justify-between text-card-foreground">
                  <span>Livraison</span>
                  <span>{shipping === 0 ? 'Gratuit' : `${shipping.toFixed(2)}€`}</span>
                </div>
                
                {subtotal > 50 && (
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary">
                      🎉 Livraison gratuite appliquée !
                    </p>
                  </div>
                )}
                
                {subtotal <= 50 && (
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Plus que {(50 - subtotal).toFixed(2)}€ pour la livraison gratuite
                    </p>
                  </div>
                )}
                
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-card-foreground">Total</span>
                    <span className="text-2xl text-primary">{total.toFixed(2)}€</span>
                  </div>
                  
                  <button className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity mb-3">
                    Valider la commande
                  </button>
                  
                  <button 
                    onClick={() => onNavigate("products")}
                    className="w-full px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    Continuer mes achats
                  </button>
                </div>
                
                <div className="pt-4 border-t border-border space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Truck className="w-4 h-4" />
                    <span>Livraison en 2-3 jours ouvrés</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Livraison en France métropolitaine</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Lock className="w-4 h-4" />
                    <span>Paiement sécurisé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
