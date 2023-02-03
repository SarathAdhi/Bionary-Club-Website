import React from "react";
import Head from "next/head";
import clsx from "clsx";
import { Navbar } from "../components/Navbar";

export const PageLayout = ({ title, children, className = "" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className="h-screen flex flex-col">
        <Navbar />
        <div className={clsx("h-full p-4", className)}>{children}</div>
      </main>
    </>
  );
};
