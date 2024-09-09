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
      href: "/service",
    },
    {
      label: "BLOG",
      href: "/blog",
    },
    {
      label: "SOBRE",
      href: "/about",
    },
  ],
  links: {},
};
