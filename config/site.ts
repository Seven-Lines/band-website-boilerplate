export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  band: "Band",
  description: "This is a description of the band.",
  mainBackground: "/images/bg.jpg",
  navItems: [
    {
      label: "Home",
      href: "/",
      coverImage: "/images/nav/apple.png",
      hoverImage: "/images/nav/orange.png",
      placement: { x: 600, y: 700 },
      baseSize: { width: 128, height: 128 },
    },
  ],
};
