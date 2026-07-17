"use client";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}

export default Navbar;
