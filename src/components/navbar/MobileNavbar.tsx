"use client";

import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import ArrowDown from "../../../public/icon/ArrowDown";
import BurgerMenu from "../../../public/icon/BurgerMenu";
import Close from "../../../public/icon/Close";
import Profile from "../../../public/icon/Profile";
import Image from "next/image";
import { ScreenLinks } from "./navigation";

function MobileNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const isLinkActive = (link: string) => {
    if (link === "/") {
      return pathname === link;
    }
    return pathname.startsWith(link);
  };

  const toggleSubMenu = (menuName: string) => {
    setOpenSubMenu(openSubMenu === menuName ? null : menuName);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleNavigation = (link: string) => {
    router.push(link);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 flex h-14 items-center justify-center border-b border-gray-100 bg-white/95 shadow-lg shadow-[rgba(0,0,0,0.1)] backdrop-blur-2xl lg:hidden">
        <div className="relative flex h-full w-full items-center justify-between px-4">
          <div className="flex items-center w-full justify-between flex-row-reverse gap-2">
            <button
              onClick={() => handleNavigation("/admin")}
              className="text-xl border-t-2 border-l-2 border-white shadow-sm bg-gradient-to-br from-neutral-100 rounded-xl flex items-center justify-center w-10 h-10 text-primary"
              aria-label="پنل مدیریت"
            >
              <Profile size={25} color="currentColor" />
            </button>
            <button
              className="text-xl border-t-2 border-l-2 border-white shadow-sm bg-gradient-to-br from-neutral-100 rounded-xl flex items-center justify-center w-10 h-10 text-primary"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <Close size={25} color="currentColor" />
              ) : (
                <BurgerMenu size={25} color="currentColor" />
              )}
            </button>
          </div>

          <div className="absolute h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className="gradient-text flex h-full cursor-pointer items-center justify-start font-sans font-extrabold text-blue-600"
              onClick={() => router.push("/")}
            >
              <Image
                src="/icon/TLogo.png"
                className="h-[50%] w-full object-fill"
                alt=""
                width={150}
                height={100}
              />
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 overflow-hidden bg-white pt-20 lg:hidden">
          <div className="px-4">
            <ul className="flex flex-col gap-1">
              {ScreenLinks.map((item, idx) => (
                <Fragment key={idx}>
                  <li className="border-b border-gray-100">
                    <div className="flex w-full flex-col items-start">
                      {item.children ? (
                        <>
                          <div
                            className="flex w-full items-center justify-between px-2 py-4"
                            onClick={() => toggleSubMenu(item.name)}
                          >
                            <span
                              className={`font-medium ${
                                isLinkActive(item.link)
                                  ? "text-blue-600"
                                  : "text-gray-800"
                              }`}
                            >
                              {item.name}
                            </span>
                            <ArrowDown
                              className={`transition-transform ${
                                openSubMenu === item.name ? "rotate-180" : ""
                              }`}
                              color={
                                isLinkActive(item.link) ? "#2563eb" : "#4b5563"
                              }
                            />
                          </div>
                          {openSubMenu === item.name && (
                            <div className="space-y-2 pb-2 pl-4">
                              {item.children.map((child, childIdx) => (
                                <button
                                  key={childIdx}
                                  className={`block w-full rounded px-2 py-2 text-right ${
                                    isLinkActive(child.link)
                                      ? "bg-blue-50 text-primary font-medium"
                                      : "text-gray-700 hover:bg-gray-50"
                                  }`}
                                  onClick={() => handleNavigation(child.link)}
                                >
                                  <div className="flex flex-col">
                                    <span>{child.name}</span>
                                    <span className="mt-1 text-xs text-gray-500">
                                      {child.description}
                                    </span>
                                  </div>
                                </button>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <button
                          className={`w-full px-2 py-4 text-right ${
                            isLinkActive(item.link)
                              ? "text-primary font-medium"
                              : "text-gray-800"
                          } ${
                            item.highlight
                              ? "my-2 flex items-center justify-center rounded-lg bg-primary text-white"
                              : ""
                          }`}
                          onClick={() => handleNavigation(item.link)}
                        >
                          {item.name}
                        </button>
                      )}
                    </div>
                  </li>
                </Fragment>
              ))}
            </ul>

            <div className="mt-8 pb-8">
              <div className="rounded-lg bg-primary/10 p-4">
                <h3 className="mb-2 font-medium text-primary">اطلاعات تماس</h3>
                <p className="mb-2 text-sm text-gray-700">
                  مرکز تندرستی و حرکات اصلاحی راه تناسب
                </p>
                <p className="text-sm text-gray-700">با کادر مجرب و متخصص</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileNavbar;
