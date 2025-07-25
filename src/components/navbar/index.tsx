"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ArrowDown from "../../../public/icon/ArrowDown";
import BurgerMenu from "../../../public/icon/BurgerMenu";
import Close from "../../../public/icon/Close";
import Login from "../../../public/icon/Login";

const ScreenLinks = [
  {
    name: "معرفی مرکز",
    link: "/about",
  },
  {
    name: "متخصصان ما",
    link: "/specialists",
  },
  {
    name: "حوزه‌های کاری",
    link: "/services",
    children: [
      {
        name: "حرکات اصلاحی",
        link: "/services/corrective-exercises",
        description: "اصلاح ناهنجاری‌های اسکلتی-عضلانی",
      },
      {
        name: "بازگشت به ورزش و توانبخشی",
        link: "/services/sports-rehabilitation",
        description: "توانبخشی آسیب‌های ورزشی و بازگشت به فعالیت",
      },
      {
        name: "ماساژ تخصصی",
        link: "/services/therapeutic-massage",
        description: "ماساژ درمانی و ریلکسیشن",
      },
      {
        name: "سایر خدمات",
        link: "/services/other-services",
        description: "خدمات تخصصی دیگر مرکز",
      },
    ],
  },
  {
    name: "مشاوره رایگان",
    link: "/consultation",
  },
  {
    name: "ثبت نوبت",
    link: "/appointment",
    highlight: true,
  },
];

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
      {/* Main Navigation */}
      <header className="w-full h-16 flex items-center justify-center sticky z-50 backdrop-blur-2xl bg-white/95 top-0 shadow-lg shadow-[rgba(0,0,0,0.1)] border-b border-gray-100">
        <div className="max-w-[1225px] h-full w-full flex justify-between items-center px-4 md:px-0">
          <h1
            className="gradient-text font-extrabold font-sans text-2xl h-full flex items-center justify-center text-blue-600 cursor-pointer"
            onClick={() => router.push("/")}
          >
            FITLINE
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center justify-end gap-4 h-full relative">
            {ScreenLinks.map((item, idx) => (
              <li
                key={idx}
                className="relative flex items-center"
                onMouseEnter={() => handleMouseEnter(idx, item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleNavigation(item.link)}
                  className={`font-medium cursor-pointer flex items-center h-full justify-center text-sm px-3 font-morabba ${
                    (activeLink === idx || isLinkActive(item.link)) &&
                    !item.highlight
                      ? "text-primary"
                      : "text-gray-900 hover:text-primary"
                  } ${
                    item.highlight
                      ? "bg-primary text-white rounded-lg px-4 py-2 hover:bg-neutral-200 ml-2"
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
                    className="absolute mt-1 top-full shadow-lg bg-white rounded-lg z-50 overflow-hidden border border-gray-100 w-64"
                    onMouseEnter={() => handleMouseEnter(idx, item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.children.map((child, childIdx) => (
                      <button
                        key={childIdx}
                        onClick={() => handleNavigation(child.link)}
                        className="px-4 w-full text-right flex flex-col py-3 text-sm hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-0"
                      >
                        <span className="font-medium text-gray-800">
                          {child.name}
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                          {child.description}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Burger Button */}
          <button
            className="lg:hidden text-2xl text-gray-700"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <Close size={22} color="#4b5563" />
            ) : (
              <BurgerMenu color="#4b5563" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 pt-20 overflow-y-auto">
          <div className="container px-4">
            <ul className="flex flex-col gap-1">
              {ScreenLinks.map((item, idx) => (
                <li key={idx} className="border-b border-gray-100">
                  <div className="flex flex-col items-start w-full">
                    {item.children ? (
                      <>
                        <div
                          className="flex w-full justify-between items-center py-4 px-2"
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
                          <div className="pl-4 pb-2 space-y-2">
                            {item.children.map((child, childIdx) => (
                              <button
                                key={childIdx}
                                className={`block w-full text-right py-2 px-2 rounded ${
                                  isLinkActive(child.link)
                                    ? "bg-blue-50 text-primary font-medium"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                                onClick={() => handleNavigation(child.link)}
                              >
                                <div className="flex flex-col">
                                  <span>{child.name}</span>
                                  <span className="text-xs text-gray-500 mt-1">
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
                        className={`w-full text-right py-4 px-2 ${
                          isLinkActive(item.link)
                            ? "text-primary font-medium"
                            : "text-gray-800"
                        } ${
                          item.highlight
                            ? "bg-primary flex items-center justify-center text-white rounded-lg my-2"
                            : ""
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
            <div className="mt-8 pb-8">
              <div className="bg-primary/10 rounded-lg p-4">
                <h3 className="font-medium text-primary mb-2">اطلاعات تماس</h3>
                <p className="text-sm text-gray-700 mb-2">
                  آدرس: تهران، خیابان نمونه، پلاک ۱۲
                </p>
                <p className="text-sm text-gray-700 mb-2">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
                <p className="text-sm text-gray-700">ساعت کار: ۸ صبح تا ۸ شب</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
