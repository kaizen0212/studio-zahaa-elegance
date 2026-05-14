export type Service = { name: string; price: string; duration: string };
export type Category = { id: string; label: string; emoji?: string; services: Service[] };

export const categories: Category[] = [
  {
    id: "visage",
    label: "Soins Visage",
    services: [
      { name: "Soin visage personnalisé", price: "60€", duration: "1h" },
      { name: "SOIN SIGNATURE Lifting Coréen & Soin Profond", price: "140€", duration: "1h30" },
      { name: "CARBON PEELING", price: "90€", duration: "1h" },
      { name: "Peeling aux acides", price: "75€", duration: "45min" },
      { name: "SOIN ANTI-TÂCHES Microneedling", price: "70€", duration: "45min" },
      { name: "MODELAGE LIFTANT", price: "40€", duration: "30min" },
    ],
  },
  {
    id: "coreen",
    label: "Soin Coréen",
    emoji: "🇰🇷",
    services: [
      { name: "LIFT KOREA", price: "75€", duration: "30min" },
      { name: "Lifting Coréen Fils de Collagène (1 zone)", price: "60€", duration: "40min" },
      { name: "Lifting Coréen Fils de Collagène (2 zones)", price: "80€", duration: "1h" },
      { name: "Lifting Coréen Fils de Collagène (3 zones)", price: "100€", duration: "1h20" },
      { name: "Collagen +", price: "80€", duration: "1h" },
    ],
  },
  {
    id: "sourcils",
    label: "Sourcils & Cils",
    emoji: "🧚🏾",
    services: [
      { name: "Restructuration des sourcils", price: "25€", duration: "45min" },
      { name: "Henna Brow", price: "15€", duration: "30min" },
      { name: "Browlift Russe", price: "70€", duration: "1h15" },
      { name: "Microblading / Microshading semi-permanent", price: "200€", duration: "2h30" },
      { name: "Retouche Microblading", price: "50€", duration: "1h30" },
      { name: "Rehaussement de cils", price: "45€", duration: "1h" },
      { name: "Teinture cils", price: "10€", duration: "10min" },
    ],
  },
  {
    id: "laser",
    label: "Laser Diode/YAG",
    services: [
      { name: "LASER BOOST petite zone", price: "35€", duration: "30min" },
      { name: "LASER BOOST grande zone", price: "75€", duration: "30min" },
      { name: "LASER PRO IA petite zone", price: "75€", duration: "30min" },
      { name: "LASER PRO IA zone illimitée", price: "250€", duration: "2h" },
      { name: "Rendez-vous d'information laser", price: "Gratuit", duration: "30min" },
    ],
  },
  {
    id: "peeling",
    label: "Peeling",
    services: [
      { name: "PEELING ANTI TACHES (1 séance)", price: "160€", duration: "45min" },
      { name: "PEELING LIFTING+ (3 séances)", price: "380€", duration: "45min" },
    ],
  },
  {
    id: "smile",
    label: "Smile Addict",
    services: [
      { name: "Blancheur Absolue Option 1", price: "75€", duration: "20min" },
      { name: "Blancheur Absolue Option 2", price: "90€", duration: "40min" },
      { name: "Blancheur Absolue (2 séances)", price: "135€", duration: "1h" },
    ],
  },
  {
    id: "electrolyse",
    label: "Électrolyse",
    services: [
      { name: "Électrolyse 10min", price: "35€", duration: "10min" },
      { name: "Électrolyse 20min", price: "50€", duration: "20min" },
      { name: "Électrolyse 30min", price: "60€", duration: "30min" },
    ],
  },
];

export const reviews = [
  { name: "Delphine", text: "Une super première expérience avec Nina, très douce, pédagogue, humaine. Un résultat top à renouveler très vite. Allez-y les yeux fermés !" },
  { name: "Melissa", text: "Très contente du résultat ! Mes sourcils sont bien nets, bien dessinés. Le travail est propre, précis. Je recommande les yeux fermés !" },
  { name: "Benahmed Nourine", text: "Au top, très professionnel et à l'écoute. J'ai réalisé un soin visage avec lifting coréen. Je recommande à 100% !" },
  { name: "Mina", text: "Personne très sérieuse, professionnelle, très à l'écoute. Je recommande vivement !" },
  { name: "Iphone", text: "Choquée du résultat au bout de la 2e séance laser, plus aucun poil sur les jambes et aisselles. Spectaculaire !" },
];

export const BOOKSY_URL = "https://booksy.com/fr-fr/38075_studio-zahaa_instituts-de-beaute_99187_asnieres-sur-seine";
