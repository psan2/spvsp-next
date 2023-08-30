"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/SiteConfig";

const Navbar = () => {
  const pathname = usePathname();
  const { mainNavBar } = siteConfig;

  return (
    <>
      <div className="fixed top-0 inset-x-0 bg-zinc-200 dark:bg-zinc-800 py-2">
        <div className="flex justify-center py-2">
          <div className="flex gap-4 md:gap-9 text-md font-semibold text-gray-600 dark:text-gray-400">
            {mainNavBar.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  className={isActive ? "text-black dark:text-white" : ""}
                  href={link.href}
                  key={link.href}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src="west-view.jpg" alt="West Image" />
      </div>
    </>
  );
};

export default Navbar;
