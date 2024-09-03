"use client";
import React, { useEffect, useState } from "react";
import Menus from "./Menus/Menus";
import SiteName from "./SitName/SiteName";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  const navStyle = {
    width: "100%",
    zIndex: 12,
    transition: " .3s ",
    opacity: scrollPosition > 80 && scrollPosition < 400 ? 0 : 1,
    transform:
      scrollPosition > 80 && scrollPosition < 400
        ? "translateY(-5rem)"
        : "translateY(0)",
    background:  "#fff" ,
    boxShadow:
      scrollPosition > 390 ? "rgba(0, 0, 0, 0.1) 0px 0px 20px" : "none",
  };
  return (
    <div
      className="flex  header-bg-gradient p-4 border-b fixed top-0 left-0 right-0"
      style={navStyle}
    >
      <div className="container">
        <div className="flex justify-between row-auto ">
          <Menus />
          <SiteName />
        </div>
      </div>
    </div>
  );
}

export default Header;
