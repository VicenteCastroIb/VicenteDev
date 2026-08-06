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
  { label: "CONTACTO", href: "#contact" },
];

export type Project = {
  name: string;
  image: string;
  href: string;
  /**
   * CSS `object-position` value for this card's background photo, e.g.
   * "10% 50%" (horizontal% vertical%).
   */
  imagePosition?: string;
  /**
   * Optional raw CSS `transform` for fine pixel-level panning/zooming,
   * e.g. "scale(1.15) translateX(-15px)". A `scale` above 1 is required
   * for translateX/Y to have any visible effect (it creates room to pan
   * into); without it there's no spare image to shift, since the photo
   * already fills the card edge-to-edge on that axis.
   */
  imageTransform?: string;
};


export const projects: Project[] = [
  { name: "SERVICE AGENT", image: "/projects/fondo-serviceagente1.JPG", href: "https://serviceagent-landing-three.vercel.app/", imagePosition: "10% 7%" },
  { name: "MAILU", image: "/projects/fondo-mailu.jpg", href: "https://mailu-frontend.vercel.app/", imagePosition: "10% 50%" },
  { name: "PELO A PELO", image: "/projects/fondo-peloapelo.jpg", href: "https://peloapelo-web-frontend.vercel.app/", imagePosition: "10% 60%" },
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
      { label: "Service Agent", href: "#projects" },
      { label: "Mailu", href: "#projects" },
      { label: "Pelo a Pelo", href: "#projects" },
    ],
  },
];

export const socialLinks = [
  { label: "IN", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/vicente-castro1" },
  { label: "IG", ariaLabel: "Instagram", href: "#" },
  { label: "WA", ariaLabel: "WhatsApp", href: "#" },
] as const;

export const contact = {
  email: "vicentecastroibarra@gmail.com",
  // Opens a Gmail compose window addressed to `email`, instead of the
  // system's default mail client (what a plain `mailto:` link would do).
  emailHref:
    "https://mail.google.com/mail/?view=cm&fs=1&to=vicentecastroibarra@gmail.com",
  phoneDisplay: "+56 9 5633 3685",
  phoneHref: "tel:+56956333685",
  location: "Presencial - Remoto - Chile",
};
