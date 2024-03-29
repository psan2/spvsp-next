import { mainNavBarItems } from "@/types";

export const siteConfig = {
  mainNavBar: [
    {
      title: "Home",
      href: "/",
      external: false,
    },
    {
      title: "Training",
      href: "/training",
      external: false,
    },
    {
      title: "History",
      href: "/history",
      external: false,
    },
    {
      title: "Join-Us",
      href: "/join-us",
      external: false,
    },
    {
      title: "Contact",
      href: "/contact",
      external: false,
    },
  ] satisfies mainNavBarItems[],
};
