export type MediaImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type NavLink = {
  href: string;
  label: string;
};

export type Project = {
  name: string;
  kind: string;
  year: string;
  href: string;
  wide?: boolean;
  image: MediaImage;
};

export type Service = {
  name: string;
  description: string;
  tags: string[];
  image: MediaImage;
  defaultOpen?: boolean;
};

export type ProcessStep = {
  when: string;
  title: string;
  text: string;
};

export type Review = {
  text: string;
  name: string;
  role: string;
  image: MediaImage;
};

export type ResultFig = {
  num: string;
  label: string;
};

export type PricingPlan = {
  name: string;
  description: string;
  projectPrice: string;
  monthPrice: string;
  projectPer: string;
  monthPer: string;
  features: string[];
  featured?: boolean;
};

export type TeamMember = {
  name: string;
  role: string;
  image: MediaImage;
};

export type Recognition = {
  year: string;
  award: string;
  by: string;
  work: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type JournalPost = {
  href: string;
  date: string;
  title: string;
  text: string;
  image: MediaImage;
};

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

export type HomePageContent = {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    wordmark: string;
    wordmarkLen: number;
  };
  nav: NavLink[];
  headerCta: { href: string; label: string };
  hero: {
    studioLabel: string;
    lede: string;
    ledeMuted: string;
    list: string[];
    person: {
      role: string;
      roleMuted: string;
      name: string;
      cta: { href: string; label: string };
      image: MediaImage;
    };
    background: MediaImage;
  };
  work: {
    title: string;
    lede: string;
    projects: Project[];
  };
  about: {
    text: string;
    signName: string;
    signRole: string;
    cta: { href: string; label: string };
    image: MediaImage;
  };
  services: {
    title: string;
    lede: string;
    foot: string;
    cta: { href: string; label: string };
    items: Service[];
  };
  process: {
    splitTitle: string;
    splitCap: string;
    splitImage: MediaImage;
    title: string;
    lede: string;
    steps: ProcessStep[];
  };
  reviews: {
    title: string;
    score: string;
    scoreOf: string;
    scoreText: string;
    leaveReviewHref: string;
    leaveReviewLabel: string;
    items: Review[];
  };
  results: {
    title: string;
    lede: string;
    caseLabel: string;
    caseBrand: string;
    caseSub: string;
    caseCta: { href: string; label: string };
    caseImage: MediaImage;
    figs: ResultFig[];
    quote: string;
    quoteFooter: string;
    ringValue: number;
    ringTitle: string;
    ringText: string;
    barsTitle: string;
    barsLabel: string;
    bars: { value: string; label: string }[];
  };
  studio: {
    title: string;
    text: string;
    cta: { href: string; label: string };
    shots: { className: string; speed: string; image: MediaImage }[];
  };
  pricing: {
    title: string;
    lede: string;
    projectMode: string;
    monthMode: string;
    plans: PricingPlan[];
    note: string;
    noteCta: { href: string; label: string };
    noteImage: MediaImage;
  };
  team: {
    title: string;
    lede: string;
    joinHref: string;
    joinLabel: string;
    members: TeamMember[];
  };
  recognition: {
    title: string;
    lede: string;
    items: Recognition[];
  };
  faq: {
    title: string;
    lede: string;
    items: FaqItem[];
  };
  journal: {
    title: string;
    lede: string;
    allHref: string;
    allLabel: string;
    posts: JournalPost[];
  };
  contact: {
    title: string;
    lede: string;
    notes: { title: string; text: string }[];
    person: {
      role: string;
      roleMuted: string;
      name: string;
      cta: { href: string; label: string };
      image: MediaImage;
    };
    formTitle: string;
    successMessage: string;
    privacy: string;
    background: MediaImage;
  };
  footer: {
    writeLabel: string;
    email: string;
    phone: string;
    phoneHref: string;
    studioLabel: string;
    studioLines: string[];
    pagesLabel: string;
    pages: NavLink[];
    socialLabel: string;
    social: { href: string; label: string }[];
    copyright: string;
    privacyHref: string;
    privacyLabel: string;
  };
};
