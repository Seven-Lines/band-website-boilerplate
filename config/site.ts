export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  band: "Band",
  description: "This is a description of the band.",
  mainBackground: "/images/bg.jpg",
  navItems: [
    {
      label: "Home",
      href: "/",
      coverImage: null,
      hoverImage: null,
      placement: {
        x: 0.1,
        y: 0.1,
      },
    },
  ],
};
