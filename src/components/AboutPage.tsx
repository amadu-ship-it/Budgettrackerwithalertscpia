import { Target, Users, Award, Heart, Zap, Globe, Clock, Shield, Sparkles, TrendingUp, Battery, Waves } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const strengths = [
    {
      icon: Waves,
      title: "Ultra-Haute-Qualité Sonore",
      description: "Une expérience sonore immersive et exceptionnelle grâce à des technologies audio de pointe validées en laboratoire."
    },
    {
      icon: Battery,
      title: "Performance Longue Durée",
      description: "Des produits conçus pour durer avec une autonomie exceptionnelle et une fiabilité à toute épreuve."
    },
    {
      icon: Zap,
      title: "Innovation Continue",
      description: "Toujours à la pointe de la technologie, nous développons constamment des produits plus innovants."
    },
    {
      icon: TrendingUp,
      title: "Futur Leader du Sans-Fil",
      description: "Ambition de devenir le leader des appareils auditifs sans fil grâce à notre excellence technologique."
    },
    {
      icon: Users,
      title: "Cible Jeune & Mobile",
      description: "Des produits pensés pour une génération dynamique qui ne fait aucun compromis sur la qualité."
    },
    {
      icon: Shield,
      title: "Qualité Certifiée",
      description: "Tous nos produits sont rigoureusement testés en laboratoire avant leur commercialisation."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "La Naissance de ProBeats",
      description: "Création de la marque ProBeats avec une vision claire : révolutionner le marché de l'audio sans fil en proposant des produits Ultra-Haute-Qualité accessibles."
    },
    {
      year: "2021-2023",
      title: "Recherche & Développement",
      description: "Années intensives de R&D pour concevoir nos trois produits phares : le casque audio premium, l'enceinte Bluetooth portable et l'enceinte studio professionnelle."
    },
    {
      year: "2024",
      title: "Validation en Laboratoire",
      description: "Tests rigoureux et validation complète de nos produits en laboratoire. Les résultats dépassent toutes nos attentes en termes de qualité sonore et de performance."
    },
    {
      year: "2025",
      title: "Lancement Commercial",
      description: "ProBeats fait son entrée sur le marché de l'audio avec ses produits prêts à être commercialisés. Le début d'une nouvelle ère sonore commence maintenant."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-[#007580] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="p-6 text-center" style={{ padding: "24px" }}>
            <h1 className="mb-4 text-white">À Propos de ProBeats</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Une nouvelle marque de matériel audio qui promeut une expérience sonore 
              Ultra-Haute-Qualité et immersive en proposant des produits toujours plus innovants.
            </p>
          </div>
        </div>
      </div>

      {/* Définition de ProBeats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" style={{ padding: "24px" }}>
            <h2 className="mb-4 text-foreground">Qu'est-ce que ProBeats ?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez l'essence de notre marque et ce qui nous définit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Vision */}
            <div className="bg-gradient-to-br from-primary to-[#007580] rounded-2xl p-8 text-white" style={{ padding: "24px" }}>
              <div className="text-5xl mb-6">👁️</div>
              <h3 className="mb-4 text-white">Notre Vision</h3>
              <p className="text-white/90 leading-relaxed">
                ProBeats aspire à devenir le futur leader des appareils auditifs sans fil. 
                Nous croyons en une expérience sonore Ultra-Haute-Qualité et immersive, accessible 
                à une génération jeune et mobile qui refuse les compromis. Notre vision est de 
                révolutionner le marché de l'audio en combinant innovation technologique et excellence sonore.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-[#B6A299] to-[#9d8d84] rounded-2xl p-8 text-white" style={{ padding: "24px" }}>
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="mb-4 text-white">Notre Mission</h3>
              <p className="text-white/90 leading-relaxed">
                Développer et commercialiser des produits audio toujours plus innovants, testés et 
                validés en laboratoire. Nous misons sur une haute-qualité d'écoute et une performance 
                longue durée pour offrir à nos clients une expérience sonore incomparable, où qu'ils soient.
              </p>
            </div>
          </div>

          {/* Définition détaillée */}
          <div className="bg-card rounded-2xl shadow-lg border border-border p-8 lg:p-12" style={{ padding: "24px" }}>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-card-foreground mb-2">ProBeats : L'Audio Sans Fil Nouvelle Génération</h3>
                  <p className="text-muted-foreground">Créée en 2020, prête à conquérir le marché</p>
                </div>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-card-foreground">ProBeats</strong> est une marque innovante créée en 2020, 
                  positionnée à la pointe de la technologie audio. Le nom unit le <strong className="text-primary">"Pro"</strong> 
                  de professionnel et les <strong className="text-primary">"Beats"</strong> qui représentent le rythme, 
                  la vie et la passion musicale d'une génération mobile et exigeante.
                </p>
                
                <p>
                  Bien que nouvelle sur le marché, ProBeats arrive avec une proposition de valeur unique : 
                  des produits rigoureusement testés en laboratoire, offrant une <strong className="text-primary">expérience 
                  sonore Ultra-Haute-Qualité</strong> et une <strong className="text-primary">performance longue durée</strong> 
                  exceptionnelle.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6 my-8">
                  <p className="text-card-foreground italic">
                    "ProBeats n'est pas simplement une nouvelle marque audio. C'est une révolution sonore 
                    pensée pour une génération qui vit la musique intensément, partout et tout le temps."
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">— L'équipe ProBeats</p>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 my-8">
                  <h4 className="text-card-foreground mb-4">Nos Trois Produits Phares</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">1</span>
                      </div>
                      <div>
                        <strong className="text-card-foreground">Le Casque Audio Premium</strong>
                        <p className="text-sm text-muted-foreground mt-1">
                          Immersion totale et qualité studio pour une expérience d'écoute incomparable
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">2</span>
                      </div>
                      <div>
                        <strong className="text-card-foreground">L'Enceinte Bluetooth</strong>
                        <p className="text-sm text-muted-foreground mt-1">
                          Portabilité et puissance pour emmener votre musique partout avec vous
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">3</span>
                      </div>
                      <div>
                        <strong className="text-card-foreground">L'Enceinte Studio</strong>
                        <p className="text-sm text-muted-foreground mt-1">
                          Précision professionnelle pour les créateurs et audiophiles exigeants
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <p>
                  Chaque produit ProBeats est le résultat d'années de recherche et développement, 
                  validé par des tests rigoureux en laboratoire. Nous ne laissons rien au hasard : 
                  chaque composant, chaque technologie est choisie pour offrir la meilleure expérience 
                  sonore possible.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl mb-2">🔊</div>
                    <div className="text-sm text-card-foreground">Ultra-Haute-Qualité</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl mb-2">📡</div>
                    <div className="text-sm text-card-foreground">Sans Fil Innovant</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="text-sm text-card-foreground">Performance Durable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire de la création de la marque */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" style={{ padding: "24px" }}>
            <h2 className="mb-4 text-foreground">Notre Histoire</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              De la création en 2020 au lancement commercial en 2025
            </p>
          </div>

          {/* Hero story section */}
          <div className="bg-card rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12" style={{ padding: "24px" }}>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-primary" />
                  <h3 className="text-card-foreground">La Genèse de ProBeats</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  En 2020, ProBeats est née d'une ambition : s'implanter sur le marché audio en tant que 
                  futur leader des appareils auditifs sans fil. Une ambition audacieuse pour une marque 
                  sans part de marché initiale, mais portée par une conviction profonde.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nous avons identifié un besoin crucial : celui d'une génération jeune et mobile, 
                  à la recherche d'une haute-qualité d'écoute et d'une performance longue durée, 
                  sans les compromis habituels du marché.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Plutôt que de précipiter notre entrée sur le marché, nous avons fait le choix de 
                  l'excellence. Plusieurs années de recherche, développement et tests en laboratoire 
                  ont été nécessaires pour créer nos trois produits phares.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Aujourd'hui en 2025, les tests sont confirmés, les produits sont prêts à être commercialisés. 
                  ProBeats est prête à révolutionner le marché de l'audio sans fil avec une expérience 
                  sonore Ultra-Haute-Qualité et immersive.
                </p>
              </div>
              <div className="h-full min-h-[400px] lg:min-h-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1570170609489-43197f518df0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwZXJzb24lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE0Nzk2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Équipe ProBeats"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6 lg:p-8" style={{ padding: "24px" }}>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-32 flex-shrink-0">
                      <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                        <span className="text-xl">{event.year}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-card-foreground">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Présentation des points forts de l'entreprise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" style={{ padding: "24px" }}>
            <h2 className="mb-4 text-foreground">Nos Points Forts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ce qui positionne ProBeats comme futur leader de l'audio sans fil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-border group"
                style={{ padding: "24px" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#007580] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <strength.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-3 text-card-foreground">{strength.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs de l'entreprise */}
      <section className="py-16 bg-gradient-to-br from-[#B6A299] to-[#9d8d84] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" style={{ padding: "24px" }}>
            <h2 className="mb-4 text-white">Nos Valeurs</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Les principes qui guident notre développement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20" style={{ padding: "24px" }}>
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="mb-3 text-white">Innovation</h3>
              <p className="text-white/90 leading-relaxed">
                Toujours à la pointe de la technologie, nous développons des produits toujours plus innovants pour dépasser les attentes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20" style={{ padding: "24px" }}>
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="mb-3 text-white">Excellence</h3>
              <p className="text-white/90 leading-relaxed">
                Chaque produit est rigoureusement testé en laboratoire pour garantir une qualité Ultra-Haute irréprochable.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20" style={{ padding: "24px" }}>
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="mb-3 text-white">Performance</h3>
              <p className="text-white/90 leading-relaxed">
                Nous misons sur une performance longue durée pour accompagner nos utilisateurs au quotidien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Positionnement marché */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
            <div className="p-8" style={{ padding: "24px" }}>
              <h2 className="text-center mb-12 text-card-foreground">Notre Ambition</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="mb-3 text-card-foreground">Futur Leader</h3>
                  <p className="text-muted-foreground">
                    Devenir le leader des appareils auditifs sans fil grâce à notre innovation et notre qualité
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="mb-3 text-card-foreground">Cible Jeune & Mobile</h3>
                  <p className="text-muted-foreground">
                    Des produits pensés pour une génération dynamique qui vit la musique intensément
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6 text-foreground">Découvrez Nos Produits Phares</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Testés en laboratoire, prêts à révolutionner votre expérience sonore. 
            Rejoignez la révolution audio ProBeats dès maintenant.
          </p>
          <button 
            onClick={() => onNavigate("products")}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Découvrir nos produits
            <Target className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
