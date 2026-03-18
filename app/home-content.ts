import type { GallerySlide } from "../components/gallery-section";

export const features = [
  "Cuisine raffinee et savoureuse",
  "Aperitifs et ateliers minute",
  "Produits frais et de saison",
  "Service discret et personnalise"
];

export const menus = [
  {
    title: "Menu Prestige",
    description:
      "Une proposition ceremonieuse autour de produits nobles, d'un cocktail signature et d'un service fluide jusqu'au dessert.",
    tags: ["Cocktail", "Diner assis", "Accords mets-vins"],
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
    alt: "Bouchees cocktail raffinees"
  },
  {
    title: "Menu Gourmand",
    description:
      "Un menu genereux et contemporain, pense pour les mariages conviviaux qui veulent conjuguer raffinement et chaleur.",
    tags: ["Buffet chic", "Ateliers minute", "Desserts de saison"],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    alt: "Assiette gastronomique pour reception"
  }
];

export const testimonials = [
  {
    author: "Claire & Julien",
    quote:
      "Une cuisine delicate, un service irreprochable et une equipe qui a su coordonner chaque instant sans jamais alourdir notre journee.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80",
    alt: "Decoration florale de mariage"
  },
  {
    author: "Mathilde & Thomas",
    quote:
      "Nous voulions quelque chose de simple en apparence mais tres travaille. Le resultat etait exactement cela, avec des saveurs memorables.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
    alt: "Couple portant un toast pendant un mariage"
  },
  {
    author: "Camille & Louis",
    quote:
      "La table d'honneur, le cocktail, le diner et le brunch du lendemain formaient un ensemble coherent. Rien n'a ete laisse au hasard.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
    alt: "Table de reception elegante"
  }
];

export const metrics = [
  { label: "48h", description: "pour recevoir une premiere prise de contact" },
  { label: "100%", description: "de prestations personnalisees selon votre reception" },
  { label: "Sur-mesure", description: "du cocktail d'accueil jusqu'au brunch du lendemain" },
  { label: "Equipe dediee", description: "un interlocuteur unique du premier appel au jour J" }
];

export const slides: GallerySlide[] = [
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80",
    alt: "Table de mariage en exterieur",
    title: "Receptions en plein air",
    description:
      "Des tables lumineuses, une mise en scene florale douce et un service pense pour l'elegance du moment.",
    thumbTitle: "Decor de table"
  },
  {
    src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
    alt: "Bouchees cocktail raffinees",
    title: "Cocktails signatures",
    description:
      "Ateliers et bouchees fines pour lancer la reception avec une sensation de legerete et de precision.",
    thumbTitle: "Bouchees cocktail"
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    alt: "Assiette gastronomique pour reception",
    title: "Service a table",
    description:
      "Des assiettes dressees avec nettete, chaudes au bon moment et pensees pour conserver rythme et confort.",
    thumbTitle: "Service a table"
  },
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
    alt: "Coupe de champagne levee pour un toast",
    title: "Toasts et instants de fete",
    description:
      "Des moments photographiques forts, accompagnes d'un service discret pour laisser la celebration respirer.",
    thumbTitle: "Toast des maries"
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    alt: "Table fleurie et reception elegante",
    title: "Art de la table",
    description:
      "Vaisselle, verrerie, compositions et nappages s'equilibrent pour creer une ambiance delicatement scenographiee.",
    thumbTitle: "Art de la table"
  },
  {
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
    alt: "Chef en cuisine pendant le dressage",
    title: "Coulisses maitrisees",
    description:
      "Une brigade organisee, une execution reguliere et une attention constante au tempo de la reception.",
    thumbTitle: "En cuisine"
  }
];
