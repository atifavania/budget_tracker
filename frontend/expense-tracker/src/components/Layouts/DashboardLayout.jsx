import React, { useContext } from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { UserContext } from "../../context/UserContext";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar activeMenu={activeMenu} />
      {user && (
        <div className="flex">
          {/* Sidebar always visible on desktop */}
          <div className="hidden md:block">
            <SideMenu activeMenu={activeMenu} />
          </div>
          {/* Main content fills the rest */}
          <div className="grow mx-5">{children}</div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
