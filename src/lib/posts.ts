export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  pattern: string;
  body: string[];
  keywords: string;
};

export const POSTS: Post[] = [
  {
    slug: "art-of-screen-printing",
    title: "The Art of Screen Printing",
    excerpt: "How a 2000-year-old craft still beats digital printing on hand-feel and depth.",
    category: "Craft",
    pattern: "pat-floral-1",
    keywords: "screen printing Jaipur, hand screen printing, fabric printing manufacturer India",
    body: [
      "Screen printing is one of the oldest surface-design techniques humans ever invented. The earliest documented examples date back to the Song dynasty in China, but the craft as we practise it in Sanganer, Jaipur, has been refined over five centuries — block to block, screen to screen, generation to generation.",
      "At its heart, the process is deceptively simple: a fine mesh screen is stretched over a frame, areas are blocked off, and pigment is pulled across the open mesh onto fabric below. Each colour gets its own screen. Each screen gets its own pull. A six-colour print isn't six steps — it's six small acts of hand-craft, repeated metre after metre.",
      "What digital printing can't match is the way ink sits on the cloth. A digitally printed fabric carries pigment that has been atomised onto the surface; the dye sits on top, slightly stiff, slightly flat. A hand-pulled screen print pushes pigment into the weave. The result has depth, hand-feel, and a faint topography you can read with your fingertips.",
      "There's also the question of colour. Our colour mixer hand-mixes every base shade against a reference swatch — sometimes a fabric snip, sometimes a paint chip, sometimes a photograph. Digital printers approximate; we match. Repeat orders months later use the same logged formula, so a brand's signature pink stays a signature.",
      "Of course, screen printing has limits. Photo-real gradients are difficult. Tiny fonts can break. And every additional colour adds a screen, a setup, and a pull. But for designs built around clean shapes, layered patterns, and rich solid colours — the floral jaals, the paisley fields, the bold stripes our clients order by the thousand metres — nothing else comes close.",
      "When a boutique buyer asks us why their cotton kurta drape feels different from a fast-fashion equivalent, the answer is in the print. Screen printing isn't slower because we're stuck in the past. It's slower because the result is worth the time.",
    ],
  },
  {
    slug: "why-jaipur-textile-capital",
    title: "Why Jaipur is India's Textile Capital",
    excerpt: "From Sanganer dye-pits to global D2C brands — the Jaipur story.",
    category: "Heritage",
    pattern: "pat-paisley",
    keywords:
      "Jaipur textile manufacturer, Sanganer screen printing, fabric printing manufacturer India",
    body: [
      "Walk through Sanganer at six in the morning and you'll smell it before you see it: indigo, alum, and the faint mineral tang of well water. Twelve kilometres south of Jaipur city, Sanganer has been a printing town since the 16th century — and today it produces a quantifiable share of India's hand-printed fabric.",
      "The reason isn't accident. Three things converge in Jaipur that don't converge anywhere else in India: a 400-year continuous craft tradition, abundant soft groundwater perfect for dyeing, and a dense ecosystem of suppliers — block carvers, screen makers, dye chemists, fabric merchants — packed inside a few square kilometres.",
      "The royal patronage of the Kachhwaha rulers seeded the craft. Their courts wanted hand-printed cotton for tents, canopies, and clothing, and they imported skilled chhipa printers from Sindh in the 1600s to settle in Sanganer and Bagru. Those printer families never left.",
      "By the 19th century, Jaipur prints were exported to Europe under the name 'Indiennes' and copied by mills from Marseille to Manchester. The originals, though, kept their advantage: water that didn't dull the dye, a dry climate that let prints cure outdoors, and craftsmen who knew their formulas better than the chemists copying them.",
      "Today, Jaipur supplies fabric to virtually every major Indian D2C apparel brand, hundreds of boutique designers, and exports to buyers in the US, UK, Japan and Australia. The infrastructure has scaled — facilities like ours run 15,000 metres a day — but the craft logic is unchanged. Mix the colour by hand, pull each screen by hand, inspect each roll by hand.",
      "When a buyer in Mumbai or Brooklyn picks up a fabric and asks 'where's this from?' — the honest answer is: a town outside Jaipur where someone's grandfather probably printed for someone else's grandfather. That continuity is the moat. It's also the reason we'll never move.",
    ],
  },
  {
    slug: "choosing-right-fabric",
    title: "Choosing the Right Fabric for Print",
    excerpt: "Cotton, rayon, linen, silk — a buyer's guide to fabric for screen printing.",
    category: "Guide",
    pattern: "pat-leaf",
    keywords: "bulk fabric printing, screen print fabric, fabric printing manufacturer India",
    body: [
      "Fabric is half the print. The same screen and the same pigment will give you four completely different results on cotton, rayon, linen, and silk — and the difference matters more than most first-time buyers realise. Here's how we guide our clients.",
      "Cotton is the safe default. It absorbs pigment evenly, holds colour for years, and washes well. Within cotton, weave matters: a 60-count cambric prints crisp lines and is ideal for sharp graphic prints; a 40-count poplin gives slightly softer edges and a fuller hand. For wholesale boutique runs, cambric and poplin together cover most use-cases.",
      "Rayon (viscose) is fluid, drapey, and prints with a slightly higher saturation than cotton because the fibre is smoother. The trade-off is that rayon shrinks more aggressively and demands a more careful curing step. For flowing dresses, scarves and dupattas where drape matters more than structure, rayon is unbeatable.",
      "Linen is the prestige base — but it's also the most demanding. Its natural slubs absorb pigment unevenly, which is either a feature or a bug depending on the print. Bold, large-scale prints sing on linen. Fine-line prints can look broken. We always recommend a strike-off on linen before committing to a bulk run.",
      "Silk — habotai, crepe, georgette — gives the deepest, most luminous colour of any base, but the screens have to be lighter, the pigment thinner, and the pulls gentler. It's the right choice for premium scarves, special-occasion saris, and luxury bridal fabric. It's the wrong choice for a 1000-metre boutique drop unless your price point supports it.",
      "Our usual advice for a first-time client: order strike-offs on two or three bases before deciding. A 1-metre sample on each fabric costs almost nothing and removes 90% of the guesswork. After that, your bulk order behaves exactly the way you expected.",
    ],
  },
  {
    slug: "manufacturing-process",
    title: "Inside Our Manufacturing Process",
    excerpt: "From design approval to dispatch — a full walkthrough of how your order is made.",
    category: "Process",
    pattern: "pat-jaal",
    keywords: "bulk fabric printing, screen printing Jaipur, fabric manufacturer process",
    body: [
      "Most clients see the catalogue and the invoice. The middle — the actual manufacturing — is invisible. We think it shouldn't be. Here's exactly what happens between the moment you confirm an order and the moment your fabric ships.",
      "Step one is design approval. You either pick a design from our 2000-strong archive or send us your own artwork. Our studio prepares a digital strike-off — a printed proof on your chosen base fabric — and ships it to you within 3-4 days. Nothing moves to bulk until you sign off.",
      "Step two is screen preparation. Each colour in your design gets its own screen: a fine polyester mesh stretched over an aluminium frame, hand-coated with a light-sensitive emulsion, exposed under your artwork on a UV table, and washed out so that pigment passes only through the design areas. A six-colour print needs six screens, and each screen takes about an hour to prepare.",
      "Step three is colour mixing. Our master colourist works against your reference — a fabric snip, a Pantone code, sometimes just a photo. Every formula is logged in a hand-written ledger so that repeat orders three months later use the exact same shade. Consistency across runs is one of our most-requested features.",
      "Step four is the print itself. Long printing tables — some up to 60 metres — are laid with the base fabric and lightly tacked down. Each screen is positioned by hand, pigment is poured at the top, and a squeegee pulls it across the screen in a single firm stroke. The screen lifts; the printer steps one repeat-length forward; the pull repeats. Six colours means six passes down the table.",
      "Step five is curing and quality. The printed fabric cures naturally in our drying yards (or, for some pigments, through a heated curing chamber) before going through a roll-by-roll quality inspection. Defects are flagged, the roll is reprinted if needed, and only then does it ship.",
      "From design approval to dispatch, the typical timeline is 7–10 days for orders above 100 metres. Larger orders take longer only because the printing itself takes longer — every other step scales with our capacity.",
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
