export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Band",
  logo: "/images/logo.png",
  description: "This is a description of the band.",
  navBackground: {
    desktop: "/images/bg.jpg",
    mobile: "/images/mobilebg.jpg",
  },
  navItems: [
    {
      label: "Home",
      href: "/",
      coverImage: "/images/nav/apple.png",
      hoverImage: "/images/nav/orange.png",
      placement: {
        desktop: { x: 600, y: 700 },
        mobile: { x: 500, y: 600 },
      },
      baseSize: {
        width: 128,
        height: 128,
      },
    },
  ],
};
