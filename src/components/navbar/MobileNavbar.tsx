"use client";

import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import ArrowDown from "../../../public/icon/ArrowDown";
import BurgerMenu from "../../../public/icon/BurgerMenu";
import Close from "../../../public/icon/Close";
import Profile from "../../../public/icon/Profile";
import Image from "next/image";
import { ScreenLinks } from "./navigation";
import { CONTACT_INFO } from "@/screens/appointment";

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
              className="text-xl border-t-2 pb-[1px] pr-[1px] border-l-2 border-white shadow-sm bg-gradient-to-br from-neutral-100 rounded-xl flex items-center justify-center w-10 h-10 text-primary"
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
                className="h-[50%] w-auto object-fill"
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

            <div className="mt-8 pb-24">
              <div className="rounded-xl bg-primary/10 p-4 space-y-3">
                <h3 className="font-semibold text-primary flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  اطلاعات تماس
                </h3>

                {/* Phone */}
                <div className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="flex flex-col gap-1.5 min-w-0 flex-1">
                    {CONTACT_INFO.phone.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone
                          .replace(/[۰-۹]/g, (d) =>
                            "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString(),
                          )
                          .replace(/[^\d+]/g, "")}`}
                        dir="ltr"
                        className="text-sm text-gray-700 hover:text-primary transition-colors text-right"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-sm text-gray-700 leading-relaxed flex-1 min-w-0">
                    {CONTACT_INFO.address}
                  </p>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="flex flex-col gap-1 flex-1 min-w-0 text-sm text-gray-700">
                    <span>
                      <span className="text-gray-500">صبح: </span>
                      {CONTACT_INFO.workingHours.morning}
                    </span>
                    <span>
                      <span className="text-gray-500">عصر: </span>
                      {CONTACT_INFO.workingHours.afternoon}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileNavbar;
