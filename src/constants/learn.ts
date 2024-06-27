import { LuComponent, LuServerCog } from "react-icons/lu";
import { MdAltRoute, MdCached } from "react-icons/md";
import { TbMobiledata } from "react-icons/tb";

export const learn = [
  {
    id: 1,
    name: "New Routing System",
    description:
      "Learn how to use Next.js 14's new routing system to build a complete web app with Next.js 14.",
    href: "/routing-system",
    icon: MdAltRoute,
  },
  {
    id: 2,
    name: "Caching Mechanism",
    description:
      "Learn how to use Next.js 14's caching mechanism to improve the performance of your web app.",
    href: "/caching-mechanism",
    icon: MdCached,
  },
  {
    id: 3,
    name: "Component System",
    description:
      "Learn how to use Next.js 14's component system to build a complete web app with Next.js 14.",
    href: "/component-system",
    icon: LuComponent,
  },
  {
    id: 4,
    name: "API Routes",
    description:
      "Learn how to use Next.js 14's API routes to build a complete web app with Next.js 14.",
    href: "/api-routes",
    icon: LuServerCog,
  },
  {
    id: 5,
    name: "Server Actions",
    description:
      "Learn how to use Next.js 14's server actions to build a complete web app with Next.js 14.",
    href: "/server-actions",
    icon: TbMobiledata,
  },
  {
    id: 6,
    name: "Partial Prerendering (Experimental)",
    description:
      "Learn how to use Next.js 14's partial prerendering to build a complete web app with Next.js 14.",
    href: "/partial-prerendering",
    icon: TbMobiledata,
  },
];
