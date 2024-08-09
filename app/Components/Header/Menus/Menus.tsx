"use client";
import { useIsLogin } from "@/app/sotre/publicStore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Menus() {
  const [scrollPosition, setScrollPosition] = useState(0);
  //check if user is login show dashboard link in menu
  const login = useIsLogin((state) => state.login);

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
  const menus = login.isLogin
    ? [
        {
          id: 1,
          title: "خانه",
          url: "/",
        },
        {
          id: 2,
          title: "درباره ما",
          url: "About",
        },
        {
          id: 3,
          title: "تماس با ما",
          url: "Contact",
        },
        {
          id: 4,
          title: "پنل ادمین",
          url: "dashboard", 
        },
        {
          id: 4,
          title: "خروج از حساب کاربری",
          url: "/",
        },
      ]
    : [
        {
          id: 1,
          title: "خانه",
          url: "/",
        },
        {
          id: 2,
          title: "درباره ما",
          url: "About",
        },
        {
          id: 3,
          title: "تماس با ما",
          url: "Contact",
        },
        {
          id: 4,
          title: " ورود/ثبت نام",
          url: "Login",
        },
      ];
  return (
    <ul className="flex">
      {menus?.map((menu, i) => (
        <li key={i} className="px-4">
          <Link
            href={`/${menu.url}`}
            className={` ${
              scrollPosition > 390 ? "text-black" : "text-white"
            } text-lg`}
          >
            {menu.title}{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Menus;
