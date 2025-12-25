import type { Chambre } from "../typage/types";
import image1 from '../assets/img-1.jpeg';
import image2 from '../assets/img-2.jpeg';
import image3 from '../assets/img-3.jpeg';
import image4 from '../assets/img-4.jpeg';
import image5 from '../assets/img-5.jpeg';
import image6 from '../assets/img-6.jpeg';
import image7 from '../assets/img-7.jpeg';
import image8 from '../assets/img-8.jpeg';
import image9 from '../assets/img-9.jpeg';
import image10 from '../assets/img-10.jpeg';
import image11 from '../assets/img-11.jpeg';
import image12 from '../assets/img-12.jpeg';


export const allRooms: Chambre[] = [
    {
      id: 1,
      type: 'Suite',
      rating: 4.97,
      avis: 339,
      title: 'Suite de charme avec petit-déjeuner maison',
      description: 'Suite de charme en duplex, attenante à maison du Lauragais en briques et galets. Entrée indépendante. Jusqu\'à 5 P + BB. Voir site Maison d\'hôtes Les Couleurs du Vent...',
      image: image1,
      badge: true
    },
    {
      id: 2,
      type: 'Chambre privée',
      rating: 4.96,
      avis: 118,
      title: 'La Cabane @lamaisonperchee13',
      description: 'Laissez-vous bercer par le son de la nature dans ce logement unique, venez vivre l\'expérience de dormir "comme à la belle étoile" Réveillez vous avec le soleil et le...',
      image: image2,
      badge: false
    },
    {
      id: 3,
      type: 'Suite',
      rating: 5.0,
      avis: 22,
      title: 'Studio indépendant dans propriété proche...',
      description: "Entre Périgord et Quercy et loin de l'agitation au sein d'une propriété avec piscine Vous séjournerez POUR MINIMUM 3 NUITS dans une suite climatisée...",
      image: image3,
      badge: true
    },
    {
      id: 4,
      type: 'Chambre privée',
      rating: 4.97,
      avis: 837,
      title: "Six chandelles m'étaient comptées. Gorge...",
      description: "Deux chambres, une salle de bain attenante à l'une des chambres et une terrasse privative offrant une vue magnifique sur les montagnes et le plateau de Valensole. Un...",
      image: image4,
      badge: false
    },
    {
      id: 5,
      type: 'Suite',
      rating: 4.89,
      avis: 156,
      title: 'Gîte moderne avec vue sur les vignes',
      description: "Profitez d'un séjour relaxant dans notre gîte récemment rénové avec terrasse privée et vue panoramique sur les vignobles...",
      image: image5,
      badge: true
    },
    {
      id: 6,
      type: 'Chambre privée',
      rating: 4.93,
      avis: 203,
      title: 'Chambre cosy au cœur de la Provence',
      description: 'Chambre élégante dans une maison provençale authentique, petit-déjeuner fait maison inclus avec produits locaux...',
      image: image6,
      badge: false
    },
    {
      id: 7,
      type: 'Suite',
      rating: 4.98,
      avis: 412,
      title: 'Suite romantique avec jacuzzi privé',
      description: "Échappez-vous dans notre suite luxueuse avec jacuzzi privatif, idéale pour un week-end en amoureux...",
      image: image7,
      badge: true
    },
    {
      id: 8,
      type: 'Chambre privée',
      rating: 4.95,
      avis: 278,
      title: 'Maison d\'artiste près de la mer',
      description: "Chambre unique dans une maison d'artiste décorée avec goût, à quelques minutes des plus belles plages...",
      image: image8,
      badge: false
    },
    {
      id: 9,
      type: 'Suite',
      rating: 5.0,
      avis: 89,
      title: 'Loft contemporain en centre historique',
      description: "Loft design au cœur du centre historique, mélange parfait de modernité et d'authenticité...",
      image: image9,
      badge: true
    },
    {
      id: 10,
      type: 'Chambre privée',
      rating: 4.91,
      avis: 345,
      title: 'Bergerie rénovée vue montagne',
      description: "Ancienne bergerie transformée en un lieu de charme avec vue spectaculaire sur les montagnes...",
      image: image10,
      badge: false
    },
    {
      id: 11,
      type: 'Suite',
      rating: 4.99,
      avis: 567,
      title: 'Villa de luxe avec piscine à débordement',
      description: "Villa d'exception avec piscine à débordement, jardin paysager et vue mer imprenable...",
      image: image11,
      badge: true
    },
    {
      id: 12,
      type: 'Chambre privée',
      rating: 4.88,
      avis: 198,
      title: 'Mas provençal authentique',
      description: "Découvrez le charme d'un mas provençal traditionnel entouré de lavande et d'oliviers centenaires...",
      image: image12,
      badge: false
    }
  ];