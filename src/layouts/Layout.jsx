import React from "react";
import Footer from "../components/Footer/FooterArea";
import Header from "../components/Header/HeaderArea";
import Preloader from "../components/Preloader/Preloader";
import ScrollTop from "../components/ScrollTop/ScrollTop";

const Layout = ({ children, header = 1, footer, className, mainClassName }) => {
  return (
    <>
      <Preloader />
      <ScrollTop />
      <div className={className}>
        {header === 2 && <Header />}
        <main className={mainClassName}>{children}</main>
        {footer === 2 && <Footer />}
      </div>
    </>
  );
};

export default Layout;
