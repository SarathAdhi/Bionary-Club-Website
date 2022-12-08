import React from "react";
import Head from "next/head";
import clsx from "clsx";

export const PageLayout = ({ title, children, className = "" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className="h-screen flex flex-col">
        <div className={clsx("h-full", className)}>{children}</div>
      </main>
    </>
  );
};
