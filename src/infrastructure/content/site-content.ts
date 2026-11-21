import type { HomePageContent } from "@/domain/entities/site";

export const siteContent: HomePageContent = {
  meta: {
    title: "Pouya Sadri — plateformes produit",
    description:
      "Freelance full-stack à Strasbourg. Plateformes Next.js / NestJS, Go et MCP. Techstars, Digi Conception, ReboTurn.",
  },
  brand: {
    name: "Pouya Sadri",
    wordmark: "pouya",
    wordmarkLen: 6,
  },
  nav: [
    { href: "#work", label: "Cases" },
    { href: "#services", label: "Services" },
    { href: "#studio", label: "Studio" },
    { href: "#pricing", label: "Tarifs" },
    { href: "#journal", label: "Journal" },
  ],
  headerCta: { href: "#contact", label: "Devis" },
  hero: {
    studioLabel: "Studio",
    lede: "Pas d’agence floue. Pas de stack fourre-tout.",
    ledeMuted: "Des plateformes produit prêtes pour vos clients.",
    list: ["Apps produit", "API Nest", "Agents MCP", "Conseil Go"],
    person: {
      role: "Lead freelance",
      roleMuted: "chez pouya",
      name: "Pouya Sadri",
      cta: { href: "#contact", label: "Devis" },
      image: {
        src: "https://images.unsplash.com/photo-1675869940341-d495d49010b5?fit=crop&auto=format&q=75&w=300&h=450",
        alt: "Portrait de Pouya Sadri",
        width: 300,
        height: 450,
      },
    },
    background: {
      src: "https://images.unsplash.com/photo-1710438399422-2fca27686bcd?fit=crop&auto=format&q=75&w=2000&h=1334",
      alt: "Fond sombre derrière le wordmark",
      width: 2000,
      height: 1334,
    },
  },
  work: {
    title: "Cases",
    lede:
      "Portfolio sélectionné : missions et systèmes du CV, prêts à convaincre un client.",
    projects: [
      {
        name: "Navette",
        kind: "Plateforme flotte Nest",
        year: "2026",
        href: "#contact",
        wide: true,
        image: {
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&auto=format&q=75&w=2000&h=1195",
          alt: "Case Alsace Navette",
          width: 2000,
          height: 1195,
        },
      },
      {
        name: "Reboturn",
        kind: "Showcase",
        year: "2026",
        href: "#contact",
        image: {
          src: "https://images.unsplash.com/photo-1590098563298-a873b00c91a1?fit=crop&auto=format&q=75&w=1200&h=1800",
          alt: "Case ReboTurn Techstars",
          width: 1200,
          height: 1800,
        },
      },
      {
        name: "Agents",
        kind: "Serveur MCP Bun",
        year: "2025",
        href: "#contact",
        image: {
          src: "https://images.unsplash.com/photo-1615803697515-3cb782c2a65a?fit=crop&auto=format&q=75&w=1200&h=800",
          alt: "Case MCP Agents",
          width: 1200,
          height: 800,
        },
      },
      {
        name: "Go RPS",
        kind: "Shortener",
        year: "2025",
        href: "#contact",
        image: {
          src: "https://images.unsplash.com/photo-1789922129898-a23555ffdf63?fit=crop&auto=format&q=75&w=1200&h=1812",
          alt: "Case Go shortener",
          width: 1200,
          height: 1812,
        },
      },
      {
        name: "Obol",
        kind: "Ledger",
        year: "2026",
        href: "#contact",
        image: {
          src: "https://images.unsplash.com/photo-1732017968601-f46d9badf229?fit=crop&auto=format&q=75&w=1200&h=1600",
          alt: "Case Obol",
          width: 1200,
          height: 1600,
        },
      },
    ],
  },
  about: {
    text: "Je conçois et livre des plateformes produit de bout en bout. Un lead solo, des preuves mesurables, une com’ claire pour décider vite.",
    signName: "Pouya Sadri",
    signRole: "Lead freelance · Techstars alumni",
    cta: { href: "#process", label: "Voir le process" },
    image: {
      src: "https://images.unsplash.com/photo-1770510067230-1059f0776b3a?fit=crop&auto=format&q=75&w=1000&h=1250",
      alt: "Portrait présentation",
      width: 1000,
      height: 1250,
    },
  },
  services: {
    title: "Services",
    lede:
      "Quatre offres pour passer d’une idée à une plateforme stable — le cœur : plateformes produit Next / Nest.",
    foot: "La plupart des clients démarrent par un audit court, puis un sprint sur le cœur produit.",
    cta: { href: "#contact", label: "Parler projet" },
    items: [
      {
        name: "Apps produit",
        description:
          "Apps Next.js / NestJS / TypeScript : SSR, JWT, i18n, TDD. Portails métier, marketplaces, consoles admin.",
        tags: ["Next.js", "NestJS", "TypeScript", "SSR", "Showcase"],
        defaultOpen: true,
        image: {
          src: "https://images.unsplash.com/photo-1508780709619-79562169bc64?fit=crop&auto=format&q=75&w=600&h=436",
          alt: "Travail plateformes produit",
          width: 600,
          height: 436,
        },
      },
      {
        name: "API Nest",
        description:
          "APIs NestJS robustes : auth, données, intégrations. LoopBack et Express selon le terrain Digi Conception.",
        tags: ["API", "Auth JWT", "Postgres", "CI"],
        image: {
          src: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?fit=crop&auto=format&q=75&w=600&h=400",
          alt: "API NestJS",
          width: 600,
          height: 400,
        },
      },
      {
        name: "Agents MCP",
        description:
          "Serveurs MCP et APIs LLM pour agents utiles en production — File Converter Bun, Docker, GHCR.",
        tags: ["Outils MCP", "Workflows", "Bun Zod", "Sécurité"],
        image: {
          src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?fit=crop&auto=format&q=75&w=600&h=400",
          alt: "Agents MCP",
          width: 600,
          height: 400,
        },
      },
      {
        name: "Conseil Go",
        description:
          "Go haute perf : shortener 10k+ RPS, Obol ledger, BitTorrent. Redis, Mongo, Docker Compose.",
        tags: ["Services Go", "Perf", "Revue code", "Scalabilité"],
        image: {
          src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&auto=format&q=75&w=600&h=400",
          alt: "Systèmes Go",
          width: 600,
          height: 400,
        },
      },
    ],
  },
  process: {
    splitTitle: "En clair",
    splitCap:
      "Chaque étape est visible. Vous suivez le code, les décisions et les risques — comme en mission Digi ou ReboTurn.",
    splitImage: {
      src: "https://images.unsplash.com/photo-1762160687270-1602d25749b6?fit=crop&auto=format&q=75&w=2000&h=1560",
      alt: "Process avec client",
      width: 2000,
      height: 1560,
    },
    title: "Quatre étapes, net",
    lede: "Plan écrit, point hebdo, durée réaliste dès le premier échange.",
    steps: [
      {
        when: "Jour 1",
        title: "Cadrer",
        text: "On aligne besoin, scope et stack (Next, Nest, Go ou MCP) avant d’écrire une ligne.",
      },
      {
        when: "Sem. 1",
        title: "Bâtir",
        text: "Sprint concentré sur le cœur produit, démos fréquentes et critères écrits.",
      },
      {
        when: "Sem. 2",
        title: "Tester",
        text: "QA, TDD, perf — cible 80% de couverture comme sur Konceo.",
      },
      {
        when: "Sem. 3–4",
        title: "Livrer",
        text: "Mise en prod, transfert, et plan de suite si besoin.",
      },
    ],
  },
  reviews: {
    title: "Avis",
    score: "4.9",
    scoreOf: "/5",
    scoreText: "Moyenne basée sur des missions produit du parcours.",
    leaveReviewHref: "#contact",
    leaveReviewLabel: "Laisser avis",
    items: [
      {
        text: "« Pouya a livré notre plateforme flotte avec une stack Nest claire et zéro surprise. »",
        name: "Ops flotte",
        role: "Navette",
        image: {
          src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&auto=format&q=75&w=160&h=216",
          alt: "Avis Ops flotte",
          width: 160,
          height: 216,
        },
      },
      {
        text: "« Pitch Techstars solide. Le showcase Next et Three.js a porté la crédibilité produit. »",
        name: "Mentor TS",
        role: "Techstars",
        image: {
          src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&auto=format&q=75&w=160&h=240",
          alt: "Avis Techstars",
          width: 160,
          height: 240,
        },
      },
      {
        text: "« Konceo stable : APIs solides, 80% de tests, mobile terrain fiable. »",
        name: "Chef projet",
        role: "Digi",
        image: {
          src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&auto=format&q=75&w=160&h=240",
          alt: "Avis Digi",
          width: 160,
          height: 240,
        },
      },
      {
        text: "« MCP File Converter branché vite. Agents utiles, pas une démo jetable. »",
        name: "Lead IA",
        role: "Outils",
        image: {
          src: "https://images.unsplash.com/photo-1570470836811-78ef04bb23d3?fit=crop&auto=format&q=75&w=160&h=240",
          alt: "Avis MCP",
          width: 160,
          height: 240,
        },
      },
      {
        text: "« Shortener Go : perf nette, Redis propre, dette maîtrisée. »",
        name: "CTO",
        role: "Systèmes",
        image: {
          src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&auto=format&q=75&w=160&h=246",
          alt: "Avis Go",
          width: 160,
          height: 246,
        },
      },
    ],
  },
  results: {
    title: "Impact mesuré",
    lede: "Extraits de missions CV : Navette, ReboTurn, Digi Conception, Go.",
    caseLabel: "Étude",
    caseBrand: "Agents",
    caseSub: "Refonte plateforme flotte",
    caseCta: { href: "#contact", label: "Voir case" },
    caseImage: {
      src: "https://images.unsplash.com/photo-1631377307475-9acfa929b062?fit=crop&auto=format&q=75&w=1000&h=1400",
      alt: "Quote résultats",
      width: 1000,
      height: 1400,
    },
    figs: [
      { num: "+3", label: "Consoles" },
      { num: "80%", label: "Tests Digi" },
      { num: "12-4", label: "Jours release type" },
    ],
    quote:
      "« La refonte Nest a modernisé un portail critique sans casser le métier. »",
    quoteFooter: "Ops, Alsace Navette",
    ringValue: 94,
    ringTitle: "Score santé produit",
    ringText: "Indice stabilité, perf et dette après livraison plateforme.",
    barsTitle: "10k",
    barsLabel: "RPS cibles shortener Go livré",
    bars: [
      { value: "1.2k", label: "jan" },
      { value: "2.1k", label: "fév" },
      { value: "3.4k", label: "mar" },
      { value: "4.8k", label: "avr" },
      { value: "6.5k", label: "mai" },
      { value: "10k", label: "jun" },
    ],
  },
  studio: {
    title: "Studio Alsace",
    text: "Basé à Strasbourg. Espace calme pour concevoir, coder et cadrer avec les clients.",
    cta: { href: "#contact", label: "Visiter" },
    shots: [
      {
        className: "shot-a",
        speed: ".3",
        image: {
          src: "https://images.unsplash.com/photo-1603468620905-8de7d86b781e?fit=crop&auto=format&q=75&w=900&h=541",
          alt: "Bureau Studio",
          width: 900,
          height: 541,
        },
      },
      {
        className: "shot-b",
        speed: ".1",
        image: {
          src: "https://images.unsplash.com/photo-1623652554515-91c833e3080e?fit=crop&auto=format&q=75&w=1000&h=563",
          alt: "Atelier cadrage",
          width: 1000,
          height: 563,
        },
      },
      {
        className: "shot-c",
        speed: ".45",
        image: {
          src: "https://images.unsplash.com/photo-1629385359375-886444e67724?fit=crop&auto=format&q=75&w=800&h=548",
          alt: "Outils sur le bureau",
          width: 800,
          height: 548,
        },
      },
      {
        className: "shot-d",
        speed: ".2",
        image: {
          src: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?fit=crop&auto=format&q=75&w=800&h=533",
          alt: "Détail espace",
          width: 800,
          height: 533,
        },
      },
      {
        className: "shot-e",
        speed: ".33",
        image: {
          src: "https://images.unsplash.com/photo-1606327054536-e37e655d4f4a?fit=crop&auto=format&q=75&w=1000&h=667",
          alt: "Livrables",
          width: 1000,
          height: 667,
        },
      },
    ],
  },
  pricing: {
    title: "Tarifs",
    lede:
      "Choisissez un forfait projet ou un accompagnement mensuel selon votre rythme.",
    projectMode: "Au forfait",
    monthMode: "Mensuel",
    plans: [
      {
        name: "Sprint",
        description:
          "Pour valider une idée ou débloquer un cœur produit critique.",
        projectPrice: "4.8k€",
        monthPrice: "2.4k€",
        projectPer: "par projet",
        monthPer: "par mois",
        features: [
          "Audit et cadrage inclus",
          "Un sprint de livraison",
          "Revue technique écrite",
          "Livré en deux semaines",
        ],
      },
      {
        name: "Studio",
        description:
          "Pour construire le cœur d’une plateforme produit Next / Nest.",
        projectPrice: "12k€",
        monthPrice: "5.5k€",
        projectPer: "par projet",
        monthPer: "par mois",
        featured: true,
        features: [
          "Apps Next et Nest",
          "CI et environnements",
          "Suivi hebdomadaire",
          "Livré en six semaines",
        ],
      },
      {
        name: "Scale",
        description:
          "Pour les équipes qui veulent un lead technique engagé longtemps.",
        projectPrice: "28k€",
        monthPrice: "9k€",
        projectPer: "par projet",
        monthPer: "par mois",
        features: [
          "Tout le Studio",
          "Lead senior",
          "Go et MCP",
          "Support prioritaire",
        ],
      },
    ],
    note: "Besoin d’un devis sur mesure ? Décrivez le contexte — réponse sous 48 h.",
    noteCta: { href: "#contact", label: "Devis custom" },
    noteImage: {
      src: "https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?fit=crop&auto=format&q=75&w=160&h=240",
      alt: "Contact devis",
      width: 160,
      height: 240,
    },
  },
  team: {
    title: "Qui livre avec moi",
    lede:
      "Freelance solo. J’ajoute design, Nest ou QA seulement si le projet le demande — un seul contact.",
    joinHref: "#contact",
    joinLabel: "Nous rejoindre",
    members: [
      {
        name: "Pouya Sadri",
        role: "Lead produit",
        image: {
          src: "https://images.unsplash.com/photo-1790269117072-2f836ba15b45?fit=crop&auto=format&q=75&w=800&h=1200",
          alt: "Pouya Sadri",
          width: 800,
          height: 1200,
        },
      },
      {
        name: "Amira Khel",
        role: "Design produit",
        image: {
          src: "https://images.unsplash.com/photo-1607975218230-7817a0627bc6?fit=crop&auto=format&q=75&w=800&h=1200",
          alt: "Amira Khel",
          width: 800,
          height: 1200,
        },
      },
      {
        name: "Noah Berg",
        role: "Ingénieur Nest",
        image: {
          src: "https://images.unsplash.com/photo-1737308584108-96f61d420638?fit=crop&auto=format&q=75&w=800&h=1000",
          alt: "Noah Berg",
          width: 800,
          height: 1000,
        },
      },
      {
        name: "Sara Vogel",
        role: "QA plateforme",
        image: {
          src: "https://images.unsplash.com/photo-1575282366139-d605e098a825?fit=crop&auto=format&q=75&w=800&h=1200",
          alt: "Sara Vogel",
          width: 800,
          height: 1200,
        },
      },
    ],
  },
  recognition: {
    title: "Mentions",
    lede:
      "Jalons publics du CV qui ouvrent la confiance avant le premier appel.",
    items: [
      {
        year: "2026",
        award: "Alumni Techstars",
        by: "Techstars",
        work: "Navette",
      },
      {
        year: "2026",
        award: "Pitch accélérateur",
        by: "Reboturn",
        work: "Reboturn",
      },
      {
        year: "2025",
        award: "Outils agents MCP",
        by: "GHCR Docker",
        work: "Obol",
      },
      {
        year: "2025",
        award: "Plateforme flotte",
        by: "Alsace Navette",
        work: "Agents",
      },
      {
        year: "2026",
        award: "App Konceo agri",
        by: "Digi Conception",
        work: "Go RPS",
      },
    ],
  },
  faq: {
    title: "FAQ",
    lede: "Les questions que posent les fondateurs avant d’embaucher.",
    items: [
      {
        question: "Combien de temps pour démarrer ?",
        answer:
          "Cadrage en quelques jours, puis un premier sprint sous deux semaines si le scope est clair.",
      },
      {
        question: "Avec qui travaillez-vous surtout ?",
        answer:
          "Startups et scale-ups produit. Le plan Sprint convient aussi aux audits courts.",
      },
      {
        question: "Que faut-il préparer ?",
        answer:
          "Un objectif produit, les accès utiles, et les contraintes métier. Le reste se clarifie ensemble.",
      },
      {
        question: "Travaillez-vous en remote ou sur place ?",
        answer:
          "Les deux. Base Strasbourg, remote Europe. Digi Conception à Hœrdt déjà livré.",
      },
      {
        question: "Comment fonctionne le mensuel ?",
        answer:
          "Un forfait d’heures senior, priorités chaque semaine, reporting clair.",
      },
    ],
  },
  journal: {
    title: "Notes tech",
    lede:
      "Articles pour fondateurs : Next, Nest, Go, MCP et comment brief un freelance.",
    allHref: "#",
    allLabel: "Tout lire",
    posts: [
      {
        href: "#",
        date: "12 mars 2026",
        title: "Plateformes Next.js qui scalent",
        text: "Ce que j’impose en App Router avant le premier déploiement public.",
        image: {
          src: "https://images.unsplash.com/photo-1545665277-5937489579f2?fit=crop&auto=format&q=75&w=900&h=600",
          alt: "Article Next.js",
          width: 900,
          height: 600,
        },
      },
      {
        href: "#",
        date: "3 fév 2026",
        title: "NestJS propre pour les APIs produit",
        text: "Auth, modules et observabilité : la base livrée sur Navette et Digi.",
        image: {
          src: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fit=crop&auto=format&q=75&w=900&h=503",
          alt: "Article NestJS",
          width: 900,
          height: 503,
        },
      },
      {
        href: "#",
        date: "18 jan 2026",
        title: "MCP utile hors démo",
        text: "Comment brancher des agents sur des outils réels sans perdre le contrôle.",
        image: {
          src: "https://images.unsplash.com/photo-1735948055457-8d816fb80a87?fit=crop&auto=format&q=75&w=900&h=675",
          alt: "Article MCP",
          width: 900,
          height: 675,
        },
      },
    ],
  },
  contact: {
    title: "Devis",
    lede:
      "Parlez-moi de votre plateforme. Je lis chaque message et je réponds sous deux jours ouvrés.",
    notes: [
      { title: "48 h", text: "Réponse sous deux jours ouvrés." },
      {
        title: "Direct",
        text: "Un seul interlocuteur senior, du cadrage à la prod.",
      },
    ],
    person: {
      role: "Lead freelance",
      roleMuted: "chez pouya",
      name: "Pouya Sadri",
      cta: { href: "mailto:info@pouyasadri.com", label: "Écrire" },
      image: {
        src: "https://images.unsplash.com/photo-1675869940341-d495d49010b5?fit=crop&auto=format&q=75&w=300&h=450",
        alt: "Portrait de Pouya Sadri",
        width: 300,
        height: 450,
      },
    },
    formTitle: "Quel est le projet ?",
    successMessage: "Merci. Je vous réponds sous 48 heures ouvrées.",
    privacy: "Vos données restent privées, sans spam.",
    background: {
      src: "https://images.unsplash.com/photo-1693648793394-0b76b7eb042e?fit=crop&auto=format&q=75&w=1800&h=1200",
      alt: "Fond contact",
      width: 1800,
      height: 1200,
    },
  },
  footer: {
    writeLabel: "Écrire",
    email: "info@pouyasadri.com",
    phone: "+33 7 68 41 11 96",
    phoneHref: "tel:+33768411196",
    studioLabel: "Studio",
    studioLines: ["Strasbourg centre", "67000 Strasbourg"],
    pagesLabel: "Pages",
    pages: [
      { href: "#work", label: "Cases" },
      { href: "#services", label: "Services" },
      { href: "#pricing", label: "Tarifs" },
      { href: "#contact", label: "Contact" },
    ],
    socialLabel: "Social",
    social: [
      { href: "https://github.com/pouyasadri", label: "GitHub" },
      {
        href: "https://linkedin.com/in/seyedpouya-sadri-fard",
        label: "LinkedIn",
      },
      { href: "#", label: "Medium" },
    ],
    copyright: "© 2026 Pouya Sadri",
    privacyHref: "#",
    privacyLabel: "Privacy",
  },
};
