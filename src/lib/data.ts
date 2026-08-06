// Centralized static content for the portfolio site.
// Keeping copy/data separate from markup makes each section component
// easier to read and lets content be updated without touching JSX.

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "PROYECTOS", href: "#projects" },
  { label: "SOBRE MI", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

export type Project = {
  name: string;
  image: string;
  href: string;
  /**
   * CSS `object-position` value for this card's background photo, e.g.
   * "10% 50%" (horizontal% vertical%). Falls back to a shared default
   * (see DEFAULT_PROJECT_IMAGE_POSITION) when omitted.
   */
  imagePosition?: string;
};

export const DEFAULT_PROJECT_IMAGE_POSITION = "10% 50%";

export const projects: Project[] = [
  { name: "SERVICEAGENT", image: "/projects/fondo-serviceagente.jpg", href: "#" },
  { name: "MAILU", image: "/projects/fondo-mailu.jpg", href: "#", imagePosition: "0% 50%" },
  { name: "PELO A PELO", image: "/projects/fondo-peloapelo.jpg", href: "#" },
];

export const stackSkills: string[] = [
  "Java",
  "Spring Boot",
  "Next.js / React.js",
  "TypeScript",
  "Tailwind / CSS",
  "AWS",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Git",
];

export const certifications: string[] = [
  "Microsoft AZ-900",
  "Microsoft Practitioner (en curso)",
  "DevOps Foundation (DFPC)",
  "DevOps Essentials (DEPC)",
  "Scrum Developer (SDPC)",
  "Scrum Foundation (SFPC)",
];

export type FooterLink = {
  label: string;
  href: string;
};

export const footerColumns: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "SOBRE MÍ",
    links: [
      { label: "Historia", href: "#about" },
      { label: "Educación", href: "#about" },
      { label: "Certificaciones", href: "#skills" },
    ],
  },
  {
    heading: "SKILLS",
    links: [
      { label: "Frontend", href: "#skills" },
      { label: "Backend", href: "#skills" },
      { label: "Bases de Datos", href: "#skills" },
    ],
  },
  {
    heading: "PROYECTOS",
    links: [
      { label: "Service Agente", href: "#projects" },
      { label: "Gestión Mailu", href: "#projects" },
      { label: "Pelo a Pelo", href: "#projects" },
      { label: "App Móvil", href: "#projects" },
    ],
  },
];

export const socialLinks = [
  { label: "IN", ariaLabel: "LinkedIn", href: "#" },
  { label: "IG", ariaLabel: "Instagram", href: "#" },
  { label: "WA", ariaLabel: "WhatsApp", href: "#" },
] as const;

export const contact = {
  email: "vicentecastroibarra@gmail.com",
  phoneDisplay: "+56 9 5633 3685",
  phoneHref: "tel:+56956333685",
  location: "Presencial - Remoto - Chile",
};
