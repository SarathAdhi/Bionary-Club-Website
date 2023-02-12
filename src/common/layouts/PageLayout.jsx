import React from "react";
import Head from "next/head";
import clsx from "clsx";
import { Navbar } from "../components/Navbar";

export const PageLayout = ({ title, children, className = "", ...rest }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className="min-h-screen flex flex-col items-center">
        <Navbar />
        <div
          className={clsx("max-w-full w-[1280px] flex-1 p-4", className)}
          {...rest}
        >
          {children}
        </div>
      </main>
    </>
  );
};
