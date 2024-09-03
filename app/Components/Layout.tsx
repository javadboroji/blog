import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import { headers } from "next/headers";
interface LayoutPropsType {
  children: React.ReactNode;
  disableBreadcrumb?: boolean;
}
const Layout: React.FC<LayoutPropsType> = ({
  children,
  disableBreadcrumb = false,
}) => {
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <Header />
      {!disableBreadcrumb && <BreadCrumb />}
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
