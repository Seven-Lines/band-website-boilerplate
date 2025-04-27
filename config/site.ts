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
      placement: { x: 600, y: 700 },
      baseSize: { width: 128, height: 128 },
    },
    {
      label: "Home",
      href: "/",
      coverImage: null,
      placement: { x: 700, y: 100 },
      baseSize: { width: 128, height: 128 },
    },
  ],
};
