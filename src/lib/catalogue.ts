export type Category =
  | "Floral"
  | "Botanical & Leaf"
  | "Paisley"
  | "Animal & Heritage"
  | "Festive Jaal"
  | "Minimal Linear";

export const CATEGORIES: Category[] = [
  "Floral",
  "Botanical & Leaf",
  "Paisley",
  "Animal & Heritage",
  "Festive Jaal",
  "Minimal Linear",
];

export const CATEGORY_COUNTS: Record<Category, number> = {
  Floral: 500,
  "Botanical & Leaf": 400,
  Paisley: 300,
  "Animal & Heritage": 200,
  "Festive Jaal": 300,
  "Minimal Linear": 200,
};

export const PATTERN_CLASS: Record<Category, string> = {
  Floral: "pat-floral-1",
  "Botanical & Leaf": "pat-leaf",
  Paisley: "pat-paisley",
  "Animal & Heritage": "pat-animal",
  "Festive Jaal": "pat-jaal",
  "Minimal Linear": "pat-minimal",
};

const NAMES: Record<Category, string[]> = {
  Floral: [
    "Rose Cluster",
    "Marigold Bloom",
    "Hibiscus Drift",
    "Lotus Pond",
    "Wild Daisy",
    "Champa Flow",
    "Mogra Spray",
    "Peony Glow",
    "Tulip Whisper",
    "Jasmine Vine",
  ],
  "Botanical & Leaf": [
    "Monstera Drop",
    "Banyan Shade",
    "Neem Leaf",
    "Fern Cascade",
    "Banana Frond",
    "Tulsi Sprig",
    "Areca Palm",
    "Curry Leaf",
    "Eucalyptus Mist",
    "Bay Branch",
  ],
  Paisley: [
    "Ambi Jaal",
    "Kairi Bloom",
    "Mango Curl",
    "Royal Paisley",
    "Boteh Classic",
    "Persian Mango",
    "Mughal Ambi",
    "Twin Paisley",
    "Heritage Boteh",
    "Paisley Storm",
  ],
  "Animal & Heritage": [
    "Peacock Court",
    "Elephant Procession",
    "Tiger Stripe",
    "Deer Glade",
    "Camel March",
    "Horse Stride",
    "Sparrow Flight",
    "Lion Crest",
    "Crane Sky",
    "Royal Beast",
  ],
  "Festive Jaal": [
    "Diwali Glow",
    "Holi Splash",
    "Sangeet Shimmer",
    "Mehendi Trail",
    "Festive Web",
    "Utsav Lattice",
    "Banaras Jaal",
    "Wedding Bloom",
    "Jharokha Jaal",
    "Mela Net",
  ],
  "Minimal Linear": [
    "Thread Line",
    "Dot Grid",
    "Quiet Stripe",
    "Geo Whisper",
    "Calm Plaid",
    "Minimal Mesh",
    "Soft Stitch",
    "Linear Hush",
    "Pin Stripe",
    "Modern Weft",
  ],
};

export type Design = {
  id: string;
  name: string;
  category: Category;
  patternClass: string;
  pricePerMetre: number;
  minMetres: number;
};

// Generate 110 cards distributed across categories, but messaging says "2000+".
export function generateDesigns(total = 110): Design[] {
  const designs: Design[] = [];
  // Distribute proportionally to CATEGORY_COUNTS
  const totalSpec = Object.values(CATEGORY_COUNTS).reduce((a, b) => a + b, 0);
  const perCat: Record<Category, number> = {} as Record<Category, number>;
  let assigned = 0;
  CATEGORIES.forEach((c, i) => {
    if (i === CATEGORIES.length - 1) {
      perCat[c] = total - assigned;
    } else {
      perCat[c] = Math.round((CATEGORY_COUNTS[c] / totalSpec) * total);
      assigned += perCat[c];
    }
  });

  let id = 1;
  for (const cat of CATEGORIES) {
    const count = perCat[cat];
    const names = NAMES[cat];
    for (let i = 0; i < count; i++) {
      const base = names[i % names.length];
      const variant = Math.floor(i / names.length) + 1;
      designs.push({
        id: `D${String(id).padStart(4, "0")}`,
        name: variant > 1 ? `${base} ${variant}` : base,
        category: cat,
        patternClass: PATTERN_CLASS[cat],
        pricePerMetre: 65 + ((id * 7) % 35),
        minMetres: 100,
      });
      id++;
    }
  }
  return designs;
}
