"use client";
import { getCookiesValues } from "@/app/Libs/getCookies";
import { useIsLogin } from "@/app/sotre/publicStore";
import { UserLogin } from "@/app/Types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Menus() {
  const [scrollPosition, setScrollPosition] = useState(0);
  //check if user is login show dashboard link in menu
  const login = useIsLogin((state) => state.login);

  /*================== get user info from cookie =================*/
  
  
  const [cookieLogin, setcookieLogin] = useState<undefined | UserLogin>(
    undefined
  );
  const getUserInfoFromCookies = async () => {
    const res = await getCookiesValues("userLogin");
    if (res?.value) {
      setcookieLogin(JSON.parse(res.value));
    }
  };



  /*================== re-render =================*/
  
  
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
  useEffect(() => {
    getUserInfoFromCookies();
  }, [])
  
  const menus = cookieLogin?.isLogin
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
          url: "logout",
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
            className={`text-black text-lg`}
          >
            {menu.title}{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Menus;
