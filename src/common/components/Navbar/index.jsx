import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Drawer } from "../Drawer";
import { pages } from "./pages";
import { Bars3Icon } from "@heroicons/react/24/solid";

export const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function NavLinks({ className }) {
    return (
      <div className={className}>
        {pages.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            onClick={() => setIsDrawerOpen(false)}
            className={clsx(
              "transition group-hover:opacity-50 group-hover:border-b-transparent duration-200 hover:!opacity-100 hover:text-purple-200 hover:!border-b-purple-500 border-b-[3px] border-b-transparent",
              pathname === href && "border-b-purple-500"
            )}
          >
            {name}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <>
      <header className="p-4 w-full sticky top-0 backdrop-blur-sm">
        <div className="w-full hidden sm:flex justify-center items-center rounded-lg">
          <NavLinks className="flex group duration-200  gap-10 text-lg" />
        </div>

        <button
          className="block sm:hidden"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Bars3Icon className="w-10 h-10 text-white" />
        </button>
      </header>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <NavLinks className="group duration-200 flex flex-col gap-10 text-lg font-semibold" />
      </Drawer>
    </>
  );
};
