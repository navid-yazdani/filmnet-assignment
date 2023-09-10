import { FC } from "react";
import LayoutInterface from "./type";
import AppBar from "../components/AppLayout/AppBar";
import BackTop from "./BackTop";

const Layout: FC<LayoutInterface> = ({ children }) => {
  return (
    <>
      <AppBar />
      {children}
      <BackTop />
    </>
  );
};

export default Layout;
