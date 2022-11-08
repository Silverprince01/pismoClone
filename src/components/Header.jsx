import React from "react";
import { useState } from "react";
import "././styles/Header.css";
import NavBar from "./NavBar";
const Header = () => {
  const [navBar, setNavBar] = useState(false);
  const handleToggle = () => {
    setNavBar((prev) => !prev);
  };

  
  return (
    <div className="header">
      <NavBar navBar={navBar} handleToggle={handleToggle} />
    </div>
  );
};

export default Header;
