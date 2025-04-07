import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../_global-compontents/navbar";
import { Fragment } from "react";
import Footer from "../_global-compontents/footer";

export const metadata: Metadata = {
  title: "Syahiena Maulana Syaputra",
  description: "Portofolio by syahienachen",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <header className="sticky top-0 z-20">
        {/* <Navbar /> */}
      </header>
      <div id="main-and-footer" className="">
        <main>
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </Fragment>
  );
}
