"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import LOGO from "../../../public/images/logo.png";
import ArrowDown from "../../../public/icon/ArrowDown";
import BurgerMenu from "../../../public/icon/BurgerMenu";
import Close from "../../../public/icon/Close";

const ScreenLinks = [
  { name: "صفحه اصلی", link: "/" },
  {
    name: "تخصص کاری",
    link: "/project",
    children: [
      { name: "احداث", link: "/project?projectName=construction" },
      { name: "باز سازی", link: "/project?projectName=reconstruction" },
      { name: "راه سازی", link: "/project?projectName=way" },
    ],
  },
  {
    name: "درباره ما",
    link: "/about",
    children: [
      { name: "تاریخچه", link: "/about?detail=history" },
      { name: "رزومه شرکت", link: "/about?detail=resume" },
      { name: "گواهینامه ها", link: "/about?detail=certificate" },
      { name: "کارفرمایان", link: "/about?detail=masters" },
      { name: "تقدیر نامه ها", link: "/about?detail=appreciation" },
    ],
  },
  {
    name: "شرکت های تابعه",
    link: "/companies",
    children: [
      { name: "زرین سازه آریا", link: "/companies/arya" },
      { name: "تحکیم عمران قرن", link: "/companies/gharn" },
      { name: "عمران دژ آبنوس", link: "/companies/abnous" },
      { name: "چکاد قالب پرشیا", link: "/companies" },
    ],
  },
  { name: "ارتباط با ما", link: "/contact" },
];

// const contactInfo = [
//   {
//     icon: <FaPhone className="text-blue-200" size={16} />,
//     link: "tel:021-88888008",
//   },
//   {
//     icon: <FaEnvelope className="text-blue-200" size={16} />,
//     link: "mailto:info@omranhesar.com",
//   },
//   {
//     icon: <FaInstagram className="text-blue-200" size={16} />,
//     link: "https://instagram.com",
//   },
// ];

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<number | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

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

  const toggleSubMenu = (menuName: string) => {
    setOpenSubMenu(openSubMenu === menuName ? null : menuName);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (link: string) => {
    router.push(link);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Contact Bar */}

      {/* Main Navigation */}
      <header className="w-full h-14 flex items-center justify-center border-b sticky z-50 bg-white top-0 shadow-lg shadow-[rgba(0,0,0,0.2)]">
        <div className="container h-full w-full flex justify-between items-center px-4 md:px-0">
          <div className="w-20 h-full py-1">
            <Image
              src={LOGO}
              alt="LOGO"
              className="w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center justify-end gap-6 h-full relative w-3/4">
            {ScreenLinks.map((item, idx) => (
              <li
                key={idx}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(idx, item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleNavigation(item.link)}
                  className={`font-medium cursor-pointer text-black flex items-center h-full justify-center px-2 ${
                    (activeLink === idx || isLinkActive(item.link)) &&
                    "border-b-2 border-[#274272]"
                  }`}
                >
                  {item.name}
                  {item.children && (
                    <ArrowDown className="mr-1" color="black" />
                  )}
                </button>

                {item.children && hoveredMenu === item.name && (
                  <div className="absolute mt-1 top-full shadow-black/40 bg-[#274272] shadow-xl rounded-md z-50 overflow-hidden">
                    {item.children.map((child, childIdx) => (
                      <button
                        key={childIdx}
                        onClick={() => handleNavigation(child.link)}
                        className="px-4 w-44 flex py-2 text-sm font-medium hover:text-[#274272] text-neutral-50 hover:bg-gray-100"
                      >
                        {item.name === "پروژه ها"
                          ? `پروژه های ${child.name}`
                          : child.name}
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Burger Button */}
          <button
            className="lg:hidden text-2xl text-[#274272]"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <Close size={22} color="black" />
            ) : (
              <BurgerMenu color="black" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 overflow-y-auto">
          <div className="container px-4">
            <ul className="flex flex-col gap-4">
              {ScreenLinks.map((item, idx) => (
                <li key={idx} className="border-b border-gray-200 pb-2">
                  <div className="flex flex-col items-start w-full">
                    {item.children ? (
                      <>
                        <div
                          className="flex w-full justify-between items-center py-2"
                          onClick={() => toggleSubMenu(item.name)}
                        >
                          <span
                            className={`font-medium ${
                              isLinkActive(item.link)
                                ? "text-[#274272]"
                                : "text-black"
                            }`}
                          >
                            {item.name}
                          </span>
                          <ArrowDown
                            className={`transition-transform ${
                              openSubMenu === item.name ? "rotate-180" : ""
                            }`}
                            color={
                              isLinkActive(item.link) ? "#274272" : "black"
                            }
                          />
                        </div>
                        {openSubMenu === item.name && (
                          <div className="pl-4 mt-2 space-y-3">
                            {item.children.map((child, childIdx) => (
                              <button
                                key={childIdx}
                                className={`block py-1 text-sm ${
                                  isLinkActive(child.link)
                                    ? "text-[#274272] font-medium"
                                    : "text-gray-600"
                                }`}
                                onClick={() => handleNavigation(child.link)}
                              >
                                {item.name === "پروژه ها"
                                  ? `پروژه های ${child.name}`
                                  : child.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <button
                        className={`py-2 font-medium ${
                          isLinkActive(item.link)
                            ? "text-[#274272]"
                            : "text-black"
                        }`}
                        onClick={() => handleNavigation(item.link)}
                      >
                        {item.name}
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile Contact Info */}
            <div className="mt-8">
              <p className="text-sm mb-4 text-neutral-700">
                ادرس دفتر مرکزی: تهران-بلوار نلسون ماندلا (جردن) خیابان پدیدار-
                پلاک ۶۵
              </p>
              <div className="flex gap-4">
                {/* {contactInfo.map((i, idx) => (
                  <a
                    key={idx}
                    href={i.link}
                    className="bg-blue-600 p-2 rounded-full hover:bg-blue-800"
                    target="_blank"
                  >
                    {i.icon}
                  </a>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
