"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import ArrowDown from "../../../public/icon/ArrowDown";
import Profile from "../../../public/icon/Profile";
import Image from "next/image";
import { ScreenLinks } from "./navigation";

function DesktopNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<number | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveLink(null);
      setHoveredMenu(null);
    }, 300);
    setTimeoutId(timeout);
  };

  const handleMouseEnter = (idx: number, itemName: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setActiveLink(idx);
    if (itemName) {
      setHoveredMenu(itemName);
    }
  };

  const isLinkActive = (link: string) => {
    if (link === "/") {
      return pathname === link;
    }
    return pathname.startsWith(link);
  };

  const handleNavigation = (link: string) => {
    router.push(link);
  };

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-center border-b border-gray-100 bg-white/95 shadow-lg shadow-[rgba(0,0,0,0.1)] backdrop-blur-2xl">
      <div className="flex h-full w-full max-w-6xl items-center justify-between px-4 md:px-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavigation("/admin")}
            className="text-sm border-t-2 border-l-2 border-white shadow-sm bg-gradient-to-br from-neutral-100 rounded-xl flex items-center justify-center w-10 h-10 text-primary"
            aria-label="پنل مدیریت"
          >
            <Profile size={25} color="currentColor" />
          </button>
        </div>

        <ul className="relative flex h-full items-center justify-center">
          {ScreenLinks.map((item, idx) => (
            <li
              key={idx}
              className={`relative flex items-center ${
                item.highlight ? "h-10" : "h-full"
              }`}
              onMouseEnter={() => handleMouseEnter(idx, item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNavigation(item.link)}
                className={`flex h-full cursor-pointer items-center justify-center px-3 text-sm font-medium font-morabba ${
                  (activeLink === idx || isLinkActive(item.link)) &&
                  !item.highlight
                    ? "text-primary"
                    : "text-gray-900 hover:text-primary"
                } ${
                  item.highlight
                    ? "ml-2 rounded-lg bg-primary/20 px-4 py-2 text-primary transition-colors duration-500 hover:bg-primary hover:text-white"
                    : ""
                }`}
              >
                {item.name}
                {item.children && (
                  <ArrowDown
                    className={`mr-1 transition-transform ${
                      hoveredMenu === item.name ? "rotate-180" : ""
                    }`}
                    color={
                      isLinkActive(item.link) || hoveredMenu === item.name
                        ? "#583f99"
                        : "#4b5563"
                    }
                  />
                )}
              </button>

              {item.children && hoveredMenu === item.name && (
                <div
                  className="absolute top-full z-50 mt-1 w-80 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg"
                  onMouseEnter={() => handleMouseEnter(idx, item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.children.map((child, childIdx) => (
                    <button
                      key={childIdx}
                      onClick={() => handleNavigation(child.link)}
                      className="flex w-full flex-col border-b border-gray-100 px-4 py-3 text-right text-sm transition-colors last:border-0 hover:bg-blue-50"
                    >
                      <span className="font-medium text-gray-800">
                        {child.name}
                      </span>
                      <span className="mt-1 text-xs text-gray-500">
                        {child.description}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center h-full justify-start">
          <div
            className="gradient-text flex h-[50%] cursor-pointer items-center justify-start font-sans font-extrabold text-blue-600 md:pr-4"
            onClick={() => router.push("/")}
          >
            <Image
              src="/icon/TLogo.png"
              className="w-full h-full object-cover"
              alt=""
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default DesktopNavbar;
