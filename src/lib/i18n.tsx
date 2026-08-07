"use client";

// Lightweight client-side i18n: a React Context holding the active locale
// plus a dictionary of translated strings. No routing/URL changes are
// involved (single static export), the toggle just swaps the strings
// rendered on the page and remembers the choice in localStorage.

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Locale = "es" | "en";

export type Translations = {
  nav: {
    projects: string;
    about: string;
    skills: string;
    contact: string;
  };
  hero: {
    lineTop: string;
    lineBottom: string;
    subtitle: string;
    cta: string;
    scrollAria: string;
  };
  about: {
    eyebrow: string;
    body: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    learnMore: string;
  };
  skills: {
    stack: string;
    certs: string;
  };
  footer: {
    tagline: string;
    aboutHeading: string;
    aboutLinks: {
      story: string;
      education: string;
      certifications: string;
    };
    skillsHeading: string;
    skillsLinks: {
      frontend: string;
      backend: string;
      databases: string;
    };
    projectsHeading: string;
    projectsLinks: {
      serviceAgent: string;
      mailu: string;
      peloApelo: string;
      app: string;
    };
    contactHeading: string;
    rights: string;
    terms: string;
    privacy: string;
  };
  contact: {
    location: string;
  };
};

const es: Translations = {
  nav: {
    projects: "PROYECTOS",
    about: "SOBRE MI",
    skills: "SKILLS",
    contact: "CONTACTO",
  },
  hero: {
    lineTop: "SOLUCIONES",
    lineBottom: "DIGITALES",
    subtitle:
      "Desarrollador full-stack. Diseño y construyo productos web robustos, de un backend escalable a la interfaz pulida, con foco en rendimiento y detalle.",
    cta: "PROYECTOS",
    scrollAria: "Ir a proyectos",
  },
  about: {
    eyebrow: "QUIÉN SOY",
    body: "Soy Vicente Castro, desarrollador full-stack. Diseño y construyo soluciones completas: desde bases de datos y APIs hasta interfaces que la gente disfruta usar. Estudio Analista Programador en DUOC UC y completé un intensivo full-stack en 4Geeks Academy, combinando esa base técnica con aprendizaje constante para construir productos confiables.",
  },
  projects: {
    eyebrow: "EXPLORA MI TRABAJO",
    title: "Proyectos & Capacidades",
    learnMore: "VER",
  },
  skills: {
    stack: "STACK PRINCIPAL",
    certs: "CERTIFICACIONES",
  },
  footer: {
    tagline:
      "Desarrollador full-stack construyendo productos web rápidos, escalables y bien diseñados.",
    aboutHeading: "SOBRE MÍ",
    aboutLinks: {
      story: "Historia",
      education: "Educación",
      certifications: "Certificaciones",
    },
    skillsHeading: "SKILLS",
    skillsLinks: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de Datos",
    },
    projectsHeading: "PROYECTOS",
    projectsLinks: {
      serviceAgent: "Service Agent",
      mailu: "Mailu",
      peloApelo: "Pelo a Pelo",
      app: "App Móvil",
    },
    contactHeading: "CONTACTO",
    rights: "Todos los derechos reservados.",
    terms: "Términos de Uso",
    privacy: "Privacidad",
  },
  contact: {
    location: "Presencial - Remoto - Chile",
  },
};

const en: Translations = {
  nav: {
    projects: "PROJECTS",
    about: "ABOUT ME",
    skills: "SKILLS",
    contact: "CONTACT",
  },
  hero: {
    lineTop: "DIGITAL",
    lineBottom: "SOLUTIONS",
    subtitle:
      "Full-stack developer. I design and build robust web products, from a scalable backend to a polished interface, with a focus on performance and detail.",
    cta: "PROJECTS",
    scrollAria: "Go to projects",
  },
  about: {
    eyebrow: "WHO I AM",
    body: "I'm Vicente Castro, a full-stack developer. I design and build complete solutions: from databases and APIs to interfaces people enjoy using. I'm studying Software Analysis at DUOC UC and completed an intensive full-stack program at 4Geeks Academy, combining that technical foundation with constant learning to build reliable products.",
  },
  projects: {
    eyebrow: "EXPLORE MY WORK",
    title: "Projects & Capabilities",
    learnMore: "VIEW",
  },
  skills: {
    stack: "MAIN STACK",
    certs: "CERTIFICATIONS",
  },
  footer: {
    tagline:
      "Full-stack developer building web products that are fast, scalable and well designed.",
    aboutHeading: "ABOUT ME",
    aboutLinks: {
      story: "Story",
      education: "Education",
      certifications: "Certifications",
    },
    skillsHeading: "SKILLS",
    skillsLinks: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
    },
    projectsHeading: "PROJECTS",
    projectsLinks: {
      serviceAgent: "Service Agent",
      mailu: "Mailu",
      peloApelo: "Pelo a Pelo",
      app: "Mobile App",
    },
    contactHeading: "CONTACT",
    rights: "All rights reserved.",
    terms: "Terms of Use",
    privacy: "Privacy",
  },
  contact: {
    location: "On-site - Remote - Chile",
  },
};

const dictionaries: Record<Locale, Translations> = { es, en };

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "vicentedev-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  // Restore a previously chosen language, if any, after mount (avoids
  // hydration mismatches since the server always renders the "es" default).
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale: setLocaleState, t: dictionaries[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
