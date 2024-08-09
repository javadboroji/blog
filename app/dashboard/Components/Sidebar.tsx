import SiteName from "@/app/Components/Header/SitName/SiteName";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/blog-logo.png";

function Sidebar() {
  const dashboardMenus = [
    {
      id: 11,
      title: "وب سایت ",
      url: "/",
    },
    {
      id: 1,
      title: " داشبورد ",
      url: "/dashboard",
    },
    {   
      id: 2,
      title: " کانبان ",
      url: "/dashboard/kanban",
    },
    {
      id: 3,
      title: "پست ها ",
      url: "/dashboard/PostAddOrUpdate",
    },
    {
      id: 4,
      title: "کاربران ها ",
      url: "/dashboard/users",
    },
    {
      id: 5,
      title: "کامنت  ها ",
      url: "/dashboard/comments",
    },
    {
      id: 6,
      title: "تنطیمات  ",
      url: "/dashboard/seting",
    },
  ];
  return (
    <div
      className="flex flex-col w-[80%] h-[100vh] "
      style={{ background: "#14213d" }}
    >
      <div className="py-8 flex justify-center">
        <Link href={"/"}>
          <Image alt="logo" src={logo} width={150} height={40} />
        </Link>
      </div>
      <ul className="p-0 my-8">
        {dashboardMenus?.map((item, i) => (
          <li key={i} className="p-4">
            <Link
              replace
              className="text-white text-center "
              href={`${item.url}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
