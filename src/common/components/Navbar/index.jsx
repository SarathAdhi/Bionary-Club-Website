import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { pages } from "./pages";

export const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className="p-4 w-full sticky top-0 backdrop-blur-sm">
      <div className="p-4 w-full border-[1px] flex justify-center items-center rounded-lg">
        <div className="group duration-200 flex gap-10 text-lg ">
          {pages.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={clsx(
                "transition group-hover:opacity-50 group-hover:border-b-transparent duration-200 hover:!opacity-100 hover:text-purple-200 hover:!border-b-purple-500 border-b-[3px] border-b-transparent",
                pathname === href && "border-b-purple-500"
              )}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
