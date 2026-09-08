export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  hrefLabel?: string;
  extraLinks?: { label: string; href: string }[];
  image: string;
  featured?: boolean;
  note?: string;
  /** Short impact metrics shown as prominent badges on the card */
  stats?: string[];
};

export const publicProjects: Project[] = [
  {
    id: "use-ai",
    title: "Use AI",
    description:
      "Personal AI assistant at use.ai — chat, files, images, and projects in one workspace, with access to leading models. I worked on connectors that plug the assistant into external apps, and on A/B features used to ship and compare product experiments.",
    tags: ["Next.js", "AI", "Connectors", "A/B"],
    href: "https://use.ai",
    hrefLabel: "use.ai",
    image: "/showcases/use-ai.png",
    featured: true,
    stats: ["~25M monthly visits", "Connectors", "A/B experiments"],
  },
  {
    id: "indiska",
    title: "Indiska",
    description:
      "eCommerce for a popular fashion and home retailer across Sweden, Finland, and Norway — product discovery, checkout flows, and brand-forward UI.",
    tags: ["Next.js", "eCommerce", "Retail"],
    href: "https://indiska.com/se",
    hrefLabel: "indiska.com",
    image: "/showcases/indiska.png",
    featured: true,
    stats: ["292,921 monthly visits"],
  },
  {
    id: "armauto-2025",
    title: "ArmAuto Show 2025",
    description:
      "Automotive exhibition site — hero experiences, exhibitor narrative, and clear paths for visitors and partners.",
    tags: ["Events", "Automotive"],
    href: "https://armauto.show/home",
    hrefLabel: "armauto.show",
    image: "/showcases/armauto-show-2025.png",
    featured: true,
    stats: ["~80,000 users"],
  },
  {
    id: "armauto-2024",
    title: "ArmAuto Show 2024",
    description:
      "Public site plus an internal portal: registrations, ticket validation with QR scanning, and analytics for organizers.",
    tags: ["Portal", "QR", "Analytics"],
    href: "https://armauto.show/2024/home",
    hrefLabel: "2024 edition",
    image: "/showcases/armauto-show-2024.png",
    featured: true,
    stats: ["~80,000 users"],
  },
  {
    id: "qproject",
    title: "QProject.am",
    description:
      "Business website for an architectural firm with a unique, unified design: visually it feels like one continuous page and a single section — portfolio, narrative, and case studies blend into one flowing surface rather than separate blocks, with restrained typography.",
    tags: ["Architecture", "Brand"],
    href: "https://qproject.am",
    hrefLabel: "qproject.am",
    image: "/showcases/qproject.png",
    featured: true,
  },
  {
    id: "itf-armenia",
    title: "ITF Armenia 2025",
    description:
      "International tourism fair in Armenia — event storytelling, schedules, and partner presence with a polished marketing surface.",
    tags: ["Events", "Tourism", "Marketing"],
    href: "https://www.itfarmenia.com/home",
    hrefLabel: "itfarmenia.com",
    image: "/showcases/itf.png",
  },
  {
    id: "socservice",
    title: "Socservice.am",
    description:
      "Official digital presence for the Ministry of Labor and Social Affairs of Armenia. (Site has since been modified by the owners.)",
    tags: ["Government", "Public sector"],
    href: "https://socservice.am",
    hrefLabel: "socservice.am",
    image: "/showcases/socservice.png",
    note: "Design may differ after handoff.",
    stats: ["100,000+ individuals served"],
    featured: true,
  },
  {
    id: "matilda",
    title: "Matilda — Order",
    description:
      "Customer food ordering on the cloud — menus, cart, and checkout in Angular, tuned for fast ordering flows.",
    tags: ["Angular", "Food delivery", "Ordering"],
    href: "https://order.matilda.cloud/",
    hrefLabel: "order.matilda.cloud",
    extraLinks: [
      { label: "Marketing site", href: "https://matilda.cloud/en/" },
    ],
    image: "/showcases/matilda.png",
  },
  {
    id: "matilda-landing",
    title: "Matilda — Marketing",
    description:
      "Public landing for the Swedish Matilda restaurant platform — services (kiosk, QR table ordering, express checkout), local delivery story, corporate programs, pricing and FAQ, and brand narrative. Complements the live order product.",
    tags: ["Landing", "Marketing", "Food tech"],
    href: "https://matilda.cloud/en/",
    hrefLabel: "matilda.cloud",
    extraLinks: [
      { label: "Order app", href: "https://order.matilda.cloud/" },
    ],
    image: "/showcases/matildaLanding.png",
  },
  {
    id: "10black",
    title: "10black & Eiger LTD",
    description:
      "Gaming-focused marketing site plus a full dashboard at the office portal — auth, data-heavy views, and operational tooling for the team.",
    tags: ["Svelte", "Dashboard", "Gaming"],
    href: "https://10black.net",
    hrefLabel: "10black.net",
    extraLinks: [
      {
        label: "Office dashboard",
        href: "https://office.10black.net/auth/login",
      },
    ],
    image: "/showcases/10black.png",
  },
  {
    id: "loyal",
    title: "Loyal.am",
    description:
      "Official site for an accounting firm — trust-building layout, service clarity, and conversion-oriented structure.",
    tags: ["Professional services", "Finance"],
    href: "https://loyal.am",
    hrefLabel: "loyal.am",
    image: "/showcases/loyal.png",
  },
  {
    id: "steg-logistic",
    title: "Steg Logistic",
    description:
      "Public request flow for a Swedish moving and cleaning company — a short quote wizard where customers describe the move, dates, and extras so the team can price the job.",
    tags: ["Sweden", "Moving", "Booking"],
    href: "https://steglogistic-wp.fastdev.se/",
    hrefLabel: "steglogistic-wp.fastdev.se",
    extraLinks: [
      {
        label: "Admin",
        href: "https://admin.steg-logistic.se/login",
      },
    ],
    image: "/showcases/steg-logistic.png",
  },
];

export const privateProjects: Project[] = [
  {
    id: "steg-logistic-admin",
    title: "Steg Logistic — Admin",
    description:
      "Operations dashboard for a Swedish platform that orders moving and cleaning services — customer inquiries, sent and accepted jobs, revenue, complaints, and company filters for staff.",
    tags: ["Admin", "Sweden", "Logistics"],
    href: "https://admin.steg-logistic.se/login",
    hrefLabel: "admin.steg-logistic.se",
    extraLinks: [
      {
        label: "Public requests",
        href: "https://steglogistic-wp.fastdev.se/",
      },
    ],
    image: "/showcases/steg-logistic-admin.png",
  },
  {
    id: "caring",
    title: "Australian Healthcare SaaS",
    description:
      "Internal platform for healthcare services in Australia: booking, invoicing, scheduling, and operational workflows. No public URL.",
    tags: ["SaaS", "Healthcare", "Scheduling"],
    image: "/showcases/caringCompany.png",
    featured: true,
  },
  {
    id: "teledentistry",
    title: "Teledentistry SaaS",
    description:
      "Virtual dental consultations between clinicians and patients — photo analysis, scheduling for in-person follow-ups, and clinical tooling.",
    tags: ["SaaS", "Health tech", "Realtime"],
    image: "/showcases/teledentistry.png",
    featured: true,
  },
  {
    id: "arcus",
    title: "Telia ARCUS",
    description:
      "Rebuilt legacy internal tooling in Next.js for a Swedish telecom provider — access management, user and data tracking, and audit-friendly UI. Replace the placeholder with your project screenshot.",
    tags: ["Next.js", "Enterprise", "Telia"],
    image: "/showcases/arcusPortal.png",
    featured: true,
  },
  {
    id: "volunteering-portal",
    title: "Volunteering portal",
    description:
      "Internal web portal for the Ministry of Labor and Social Affairs of Armenia — volunteer workflows, program support, and day-to-day tooling for staff. Commissioned work; no public URL.",
    tags: ["Government", "Portal", "Internal"],
    image: "/showcases/volunteeringPortal.png",
  },
  {
    id: "ate",
    title: "ATE — Armenia Travel (concept)",
    description:
      "Concept-stage touristic booking experience; front-end exploration not yet wired to a production backend.",
    tags: ["Concept", "Travel", "Booking"],
    href: "https://ate.armeniatravel.am",
    hrefLabel: "Concept preview",
    image: "/showcases/ate.png",
  },
  {
    id: "likelocals",
    title: "LikeLocals.am",
    description:
      "Built for GIZ and the European Union to promote local tourism in Armenia. URL no longer live.",
    tags: ["EU", "Tourism", "Impact"],
    image: "/showcases/likeLocals.png",
  },
  {
    id: "loyal-admin",
    title: "Loyal.am — Admin",
    description:
      "Internal accounting software: finance operations, client and ledger views.",
    tags: ["Admin", "Finance", "Internal"],
    image: "/showcases/laoLoyal.png",
    href: "https://tax.loyal.am/",
    hrefLabel: "tax.loyal.am",
  },
];

export const stack = [
  { name: "React", detail: "Interfaces & design systems" },
  { name: "TypeScript", detail: "Typed, scalable front ends" },
  { name: "Next.js", detail: "App Router, SSR, edge-ready" },
  { name: "GraphQL", detail: "Typed schemas, fragments & efficient fetching" },
  {
    name: "React Query",
    detail: "TanStack Query — caching, sync, background refetch & mutations",
  },
  { name: "SCSS", detail: "Modules & architecture" },
  { name: "Tailwind CSS", detail: "Rapid UI & tokens" },
  { name: "Styled Components", detail: "Component-scoped styling" },
  {
    name: "Angular",
    detail:
      "Production apps (e.g. Matilda); solid enough to ship, with more depth in React day-to-day.",
  },
  {
    name: "Svelte",
    detail:
      "Used on client work (e.g. 10black); comfortable contributing, not my primary stack yet.",
  },
] as const;
