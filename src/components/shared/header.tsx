"use client";

import React from "react";
import Link from "next/link";
import SharedButton from "./sharedButton";
import { MenuIcon } from "lucide-react";
import FadingSlide from "./fadingSlide";

type NavLink = {
  id: number;
  title: string;
  href: string;
};

const navLinks: NavLink[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Services",
    href: "/services",
  },
  {
    id: 3,
    title: "Blogs",
    href: "/blog",
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact-us",
  },
];

function Header() {
  return (
    <header className="w-full py-10 px-0 flex items-center justify-center bg-offwhitebg">
      <div className="grid grid-cols-12 items-center gap-0 w-[90%] rounded-lg bg-white drop-shadow-md">
        <div className="col-span-2 py-8 pl-8 rounded-2xl">
          <Link
            href="/"
            className="font-heading text-4xl text-center text-black"
          >
            Horizon Care
          </Link>
        </div>
        <div className="col-span-10 flex items-center justify-end gap-6 pr-8 py-6 ">
          <nav className="hidden md:flex items-stretch gap-14 pr-10">
            {navLinks &&
              navLinks.map((nav) => (
                <Link
                  key={nav.id}
                  href={nav.href}
                  className="font-body text-sm font-semibold transition-all duration-500 text-hover hover:text-primary uppercase"
                >
                  {nav?.title}
                </Link>
              ))}
          </nav>
          <div className="w-[20%]">
            <FadingSlide>
              <SharedButton renderText="get started" />
            </FadingSlide>
          </div>
          <div className="grid grid-cols-1 items-center bg-primary/10 rounded-full p-4">
            <MenuIcon size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
