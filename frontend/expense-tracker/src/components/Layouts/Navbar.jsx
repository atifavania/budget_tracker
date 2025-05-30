import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="flex gap-5 bg-white border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30">
      {/* Menu button: Only on mobile/tablet */}
      <button
        className="block md:hidden text-black"
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      <h2 className="text-lg font-medium text-black">Expense Tracker</h2>

      {/* Mobile Side Menu Drawer */}
      {openSideMenu && (
        <div className="fixed top-[61px] left-0 h-full w-64 bg-white shadow-lg z-40 transition-all">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
