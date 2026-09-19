export interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export const siteInfo = {
  name: "Chipinge Safari Area",
  tagline: "Nurturing Today. Protecting Tomorrow.",
  motto: "In Harmony with Nature, We Inspire Future Guardians of Our World.",
  description:
    "A centre for learning, discovery and action — empowering young people to protect wildlife, our environment and our shared future.",
  region: "South East Lowveld Region, Zimbabwe",
  partners: {
    zimparks: "Parks and Wildlife Management Authority of Zimbabwe (ZIMPARKS)",
    aware: "AWARE Germany e.V. & AWARE Trust Zimbabwe",
  },
  groundbreaking: {
    date: "August 20, 2026",
    minister: "Hon. Dr. Evelyn Ndlovu",
    ministerTitle: "Minister of Environment, Climate and Wildlife",
    directorGeneral: "Prof. Dr. Edson Gandiwa",
    directorGeneralTitle:
      "Director General, Parks and Wildlife Management Authority of Zimbabwe",
  },
  social: {
    facebook: "#",
    x: "#",
    instagram: "#",
  },
} as const;

export const activities: Activity[] = [
  {
    id: "herbal-garden",
    title: "Medicinal & Herbal Garden",
    description:
      "Explore our curated collection of indigenous medicinal plants, aloes, succulents, and traditional herbal species. The garden preserves ancestral botanical knowledge while educating visitors about Zimbabwe's rich natural pharmacy.",
    image: "/images/safari/medicinal-garden-aloes.jpg",
    icon: "Leaf",
  },
  {
    id: "education-centre",
    title: "Environmental Education Centre",
    description:
      "Our flagship education hub — developed in partnership with AWARE Trust and ZIMPARKS — empowers the next generation of conservationists through hands-on learning, wildlife workshops, and immersive environmental programmes for schools across the region.",
    image: "/images/safari/students-education-centre.jpg",
    icon: "GraduationCap",
  },
  {
    id: "campsite",
    title: "Eagle Campsite",
    description:
      "Camp beneath the stars in the heart of the African bush. Our campsite offers shaded pitches under mature lowveld canopy, clean amenities, and the sounds of the wild as your evening soundtrack.",
    image: "/images/safari/recreational-area.jpg",
    icon: "Tent",
  },
  {
    id: "nature-walks",
    title: "Guided Nature Walks",
    description:
      "Walk the untamed trails with certified ZIMPARKS rangers. Discover animal tracks, identify indigenous trees, and connect with the rhythms of the bush on foot — the most intimate way to experience the safari.",
    image: "/images/safari/nature-walk-path.jpg",
    icon: "Footprints",
  },
  {
    id: "game-drive",
    title: "Game Drives",
    description:
      "Traverse the savannah on thrilling open-vehicle game drives. Encounter giraffes at waterholes, antelope herds on the plains, and the diverse wildlife of the Sabi Valley basin in their natural habitat.",
    image: "/images/safari/giraffes-waterhole.jpg",
    icon: "Binoculars",
  },
  {
    id: "bird-watching",
    title: "Bird Watching & Vulture Conservation",
    description:
      "With over 200 avian species recorded, Chipinge Safari Area is a birder's paradise. Our vulture conservation programme, in partnership with BirdLife Zimbabwe, actively protects critically endangered raptor populations.",
    image: "/images/safari/vulture-conservation.jpg",
    icon: "Bird",
  },
  {
    id: "fishing",
    title: "Sabi Valley River Fishing",
    description:
      "Enjoy peaceful catch-and-release fishing along pristine stretches of the Sabi Valley rivers. A tranquil escape surrounded by riverine woodland and the calls of fish eagles overhead.",
    image: "/images/safari/recreational-bridge.jpg",
    icon: "Fish",
  },
  {
    id: "braai-centre",
    title: "Chipembere Recreational Club & Braai",
    description:
      "Gather with family and friends at the Chipembere Club — our open-air braai and social hub. Enjoy freshly grilled fare under the shade of indigenous trees, with hand-painted murals celebrating local wildlife and culture.",
    image: "/images/safari/braai-centre.jpg",
    icon: "Flame",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/safari/giraffes-waterhole.jpg",
    alt: "Giraffes drinking at a waterhole in Chipinge Safari Area",
    category: "Wildlife",
    width: 1280,
    height: 853,
  },
  {
    src: "/images/safari/education-groundbreaking.jpg",
    alt: "Education Centre groundbreaking signboard — AWARE Trust & ZIMPARKS partnership",
    category: "Education & Youth",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/safari/students-education-centre.jpg",
    alt: "School students visiting the Environmental Education Centre",
    category: "Education & Youth",
    width: 1280,
    height: 960,
  },
  {
    src: "/images/safari/students-wide-view.jpg",
    alt: "Students gathered outside the education centre building",
    category: "Education & Youth",
    width: 1280,
    height: 960,
  },
  {
    src: "/images/safari/youth-conservation.jpg",
    alt: "Young students learning about wildlife with a buffalo skull display",
    category: "Education & Youth",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/safari/vulture-conservation.jpg",
    alt: "Students with Vultures Need Our Help conservation poster",
    category: "Education & Youth",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/safari/ranger-outdoor-class.jpg",
    alt: "ZIMPARKS ranger conducting an outdoor educational session with visitors",
    category: "Education & Youth",
    width: 1280,
    height: 960,
  },
  {
    src: "/images/safari/aware-partnership.jpg",
    alt: "AWARE Trust students with partnership representative",
    category: "Conservation",
    width: 1280,
    height: 960,
  },
  {
    src: "/images/safari/conservation-officials.jpg",
    alt: "ZIMPARKS and AWARE officials at a wildlife conservation event",
    category: "Conservation",
    width: 1280,
    height: 853,
  },
  {
    src: "/images/safari/zimparks-exhibition.jpg",
    alt: "ZIMPARKS Visit Zimparks exhibition stand",
    category: "Conservation",
    width: 960,
    height: 960,
  },
  {
    src: "/images/safari/medicinal-garden-aloes.jpg",
    alt: "Indigenous aloe and succulent plants in the Medicinal Herbal Garden",
    category: "Medicinal Garden",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/safari/herbal-garden-path.jpg",
    alt: "Herbal garden pathway with diverse indigenous species",
    category: "Medicinal Garden",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/safari/recreational-area.jpg",
    alt: "Visitors enjoying the recreational area under lowveld canopy",
    category: "Campsite & Braai",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/safari/campsite-social.jpg",
    alt: "Families socialising at the campsite grounds",
    category: "Campsite & Braai",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/safari/braai-centre.jpg",
    alt: "Rangers and visitors grilling at the open-air braai centre",
    category: "Campsite & Braai",
    width: 1280,
    height: 960,
  },
  {
    src: "/images/safari/chipembere-club.jpg",
    alt: "Chipembere Club with hand-painted wildlife murals",
    category: "Campsite & Braai",
    width: 1280,
    height: 960,
  },
  {
    src: "/images/safari/recreational-bridge.jpg",
    alt: "Rustic wooden bridge at the recreational area with zebra sculpture",
    category: "Campsite & Braai",
    width: 1280,
    height: 960,
  },
  {
    src: "/images/safari/visitor-gardens.jpg",
    alt: "Visitor walking through the lush safari grounds near the bridge",
    category: "Campsite & Braai",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/safari/nature-walk-path.jpg",
    alt: "Natural walkway path through the safari area bush",
    category: "Campsite & Braai",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/safari/welcome-sign.png",
    alt: "Welcome to Chipinge Safari Area entrance sign — ZIMPARKS",
    category: "Conservation",
    width: 768,
    height: 1024,
  },
  {
    src: "/images/safari/education-rangers.jpg",
    alt: "Education rangers working with international visitors and local staff",
    category: "Education & Youth",
    width: 1280,
    height: 960,
  },
  {
    src: "/images/safari/wildlife-display.jpg",
    alt: "Wildlife education display at the safari area",
    category: "Education & Youth",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/safari/park-entrance.jpg",
    alt: "Aerial view of the Chipinge Safari Area park entrance",
    category: "Conservation",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/safari/park-signage.jpg",
    alt: "Chipinge Safari Area directional park signage",
    category: "Conservation",
    width: 960,
    height: 1280,
  },
];

export const galleryCategories = [
  "All",
  "Wildlife",
  "Education & Youth",
  "Conservation",
  "Medicinal Garden",
  "Campsite & Braai",
] as const;
