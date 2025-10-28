import { MessageCircle, Mail, Phone, HelpCircle, Package, CreditCard, Truck, RefreshCw, Shield, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

interface SupportPageProps {
  onNavigate: (page: string) => void;
}

export function SupportPage({ onNavigate }: SupportPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const services = [
    {
      icon: MessageCircle,
      title: "Chat en Direct",
      description: "Discutez instantanément avec notre équipe d'assistance pour une réponse rapide à vos questions.",
      availability: "Disponible 24/7",
      action: "Démarrer le chat",
      color: "from-primary to-[#007580]"
    },
    {
      icon: Mail,
      title: "Support par Email",
      description: "Envoyez-nous un email détaillé et recevez une réponse complète sous 24h maximum.",
      availability: "Réponse sous 24h",
      action: "Envoyer un email",
      color: "from-[#B6A299] to-[#9d8d84]"
    },
    {
      icon: Phone,
      title: "Support Téléphonique",
      description: "Appelez notre ligne dédiée pour parler directement à un expert audio.",
      availability: "Lun-Ven 9h-18h",
      action: "Appeler maintenant",
      color: "from-primary to-[#007580]"
    }
  ];

  const additionalServices = [
    {
      icon: Package,
      title: "Suivi de Commande",
      description: "Suivez votre commande en temps réel depuis l'expédition jusqu'à la livraison à votre porte."
    },
    {
      icon: RefreshCw,
      title: "Retours & Échanges",
      description: "30 jours pour retourner ou échanger vos produits, sans frais supplémentaires."
    },
    {
      icon: Shield,
      title: "Garantie Étendue",
      description: "Tous nos produits bénéficient d'une garantie constructeur de 2 ans minimum."
    },
    {
      icon: Truck,
      title: "Livraison Express",
      description: "Options de livraison express disponibles pour recevoir vos produits en 24-48h."
    },
    {
      icon: CreditCard,
      title: "Paiement Sécurisé",
      description: "Paiement en plusieurs fois sans frais et transactions 100% sécurisées."
    },
    {
      icon: Clock,
      title: "Assistance Technique",
      description: "Support technique spécialisé pour vous aider à configurer et optimiser vos produits."
    }
  ];

  const faqs = [
    {
      question: "Comment puis-je suivre ma commande ?",
      answer: "Après avoir passé votre commande, vous recevrez un email de confirmation avec un numéro de suivi. Vous pouvez utiliser ce numéro sur notre page de suivi ou directement sur le site du transporteur. Vous recevrez également des notifications par email à chaque étape de la livraison."
    },
    {
      question: "Quelle est votre politique de retour ?",
      answer: "Nous offrons une période de retour de 30 jours à compter de la réception de votre commande. Les produits doivent être dans leur état d'origine, non utilisés et dans leur emballage d'origine. Le remboursement sera effectué dans un délai de 5 à 7 jours ouvrables après réception du produit retourné. Les frais de retour sont gratuits pour les produits défectueux."
    },
    {
      question: "Proposez-vous une garantie sur vos produits ?",
      answer: "Tous nos produits ProBeats bénéficient d'une garantie constructeur de 2 ans minimum. Cette garantie couvre les défauts de fabrication et les dysfonctionnements. En cas de problème, contactez notre service client qui vous guidera dans la procédure de garantie. Certains produits peuvent bénéficier d'une garantie étendue optionnelle."
    },
    {
      question: "Quels modes de paiement acceptez-vous ?",
      answer: "Nous acceptons les cartes de crédit et de débit (Visa, Mastercard, American Express), PayPal, Apple Pay et Google Pay. Nous proposons également le paiement en 3 ou 4 fois sans frais pour les commandes supérieures à 100€. Tous les paiements sont sécurisés avec un cryptage SSL."
    },
    {
      question: "Livrez-vous à l'international ?",
      answer: "Oui, nous livrons dans plus de 50 pays à travers le monde. Les frais de livraison et les délais varient selon la destination. La livraison est gratuite en France métropolitaine pour toute commande supérieure à 50€. Pour l'international, les frais sont calculés automatiquement lors du passage de commande."
    },
    {
      question: "Comment puis-je contacter le service client ?",
      answer: "Notre service client est disponible 24/7 par chat en direct sur notre site web, par email à support@probeats.fr, ou par téléphone au +33 1 23 45 67 89 du lundi au vendredi de 9h à 18h. Nous nous engageons à répondre à toutes les demandes dans les plus brefs délais."
    },
    {
      question: "Puis-je modifier ou annuler ma commande ?",
      answer: "Vous pouvez modifier ou annuler votre commande gratuitement tant qu'elle n'a pas été expédiée. Contactez immédiatement notre service client par chat ou par téléphone. Une fois la commande expédiée, vous pouvez toujours la refuser à la livraison ou utiliser notre politique de retour de 30 jours."
    },
    {
      question: "Les produits sont-ils compatibles avec tous les appareils ?",
      answer: "Nos casques et enceintes Bluetooth sont compatibles avec tous les appareils équipés de la technologie Bluetooth (smartphones, tablettes, ordinateurs, etc.). Nos produits sont testés avec les systèmes iOS, Android, Windows et Mac. La plupart de nos casques incluent également un câble audio pour une utilisation filaire universelle."
    },
    {
      question: "Offrez-vous des réductions pour les achats en gros ?",
      answer: "Oui, nous proposons des tarifs spéciaux pour les achats professionnels et en gros. Contactez notre équipe commerciale à l'adresse pro@probeats.fr avec vos besoins spécifiques et nous vous proposerons une offre personnalisée. Des réductions sont disponibles à partir de 10 unités."
    },
    {
      question: "Comment entretenir mon casque audio ?",
      answer: "Pour prolonger la durée de vie de votre casque : nettoyez régulièrement les coussinets avec un chiffon doux légèrement humide, rangez-le dans son étui quand vous ne l'utilisez pas, évitez l'exposition prolongée au soleil et aux températures extrêmes, et chargez la batterie régulièrement même si vous ne l'utilisez pas pendant une longue période."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-[#007580] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="p-6 text-center" style={{ padding: "24px" }}>
            <h1 className="mb-4 text-white">Centre d'Assistance</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Nous sommes là pour vous aider. Trouvez des réponses à vos questions ou contactez notre équipe d'experts.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Services de contact */}
        <section className="mb-16">
          <div className="text-center mb-12" style={{ padding: "24px" }}>
            <h2 className="mb-4 text-foreground">Contactez-nous</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choisissez le moyen de contact qui vous convient le mieux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all border border-border overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8 text-center" style={{ padding: "24px" }}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-primary mb-6">
                    <Clock className="w-4 h-4" />
                    {service.availability}
                  </div>
                  <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                    {service.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services additionnels */}
        <section className="mb-16">
          <div className="text-center mb-12" style={{ padding: "24px" }}>
            <h2 className="mb-4 text-foreground">Nos Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez tous les services que nous proposons pour une expérience optimale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
                style={{ padding: "24px" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-card-foreground text-lg">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12" style={{ padding: "24px" }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
              <h2 className="text-foreground">Questions Fréquentes (FAQ)</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus posées par nos clients
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg shadow-md border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                  style={{ padding: "24px" }}
                >
                  <span className="text-card-foreground pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed border-t border-border">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#B6A299] to-[#9d8d84] rounded-2xl p-12 text-center text-white">
          <h2 className="mb-4 text-white">Vous n'avez pas trouvé ce que vous cherchiez ?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Notre équipe d'assistance est prête à vous aider. Contactez-nous et nous vous répondrons dans les plus brefs délais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#B6A299] rounded-lg hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Démarrer un chat
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Envoyer un email
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
