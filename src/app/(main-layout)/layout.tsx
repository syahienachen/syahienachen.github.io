import type { Metadata } from "next";
import "../globals.css";
import { Fragment } from "react";

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
