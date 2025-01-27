import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../_components/navbar";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "By Syahienachen",
  description: "Portofolio by syahienachen",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <Navbar></Navbar>
      {children}
    </Fragment>
  );
}
