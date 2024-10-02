export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Damanda Tarot",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "HOME",
      href: "/",
    },
    {
      label: "SERVIÇOS",
      href: "/servicos",
      childrens: [
        {
          label: "HOME",
          href: "/",
        },
        {
          label: "HOME 2",
          href: "/",
        },
      ],
    },
    {
      label: "BLOG",
      href: "/blog",
    },
    {
      label: "QUEM SOMOS",
      href: "/quem-somos",
    },
  ],
  navMenuItems: [
    {
      label: "HOME",
      href: "/",
    },
    {
      label: "SERVIÇOS",
      href: "/servicos",
      childrens: [
        {
          label: "HOME",
          href: "/",
        },
        {
          label: "HOME 2",
          href: "/",
        },
      ],
    },
    {
      label: "BLOG",
      href: "/blog",
    },
    {
      label: "QUEM SOMOS",
      href: "/quem-somos",
    },
  ],
  links: {
    about: "/quem-somos",
    blog: "/blog",
    services: "/servicos",
    privacyPolicy: "/politica-privacidade",
    tarotHome: "/servicos/tarot",
    tarotDia: "/servicos/tarot/tarot-do-dia",
    combinacoes: "/servicos/tarot/combinacoes",
    calcTarot: "/servicos/tarot/calculadora-tarot",
    astrologiaHome: "/servicos/astrologia",
    ceuMomento: "/servicos/astrologia/ceu-do-momento",
    calendarioLunar: "/servicos/astrologia/calendario-lunar",
    numerologiaHome: "/servicos/numerologia",
    numerologiaNome: "/servicos/numerologia/numerologia-do-nome",
  },
};
