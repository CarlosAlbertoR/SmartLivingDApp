"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";

export const Header = () => {
  const [scrolledFromTop, setScrolledFromTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset >= 50;
      setScrolledFromTop(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`top-0 z-50 flex w-full items-center fixed ${
        scrolledFromTop
          ? "bg-white dark:bg-dark bg-opacity-80 dark:bg-opacity-80 shadow-sticky backdrop-blur-sm"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link
              href="/"
              className={`block w-full ${
                scrolledFromTop ? "py-4 lg:py-2" : "py-6 lg:py-5"
              }`}
            >
              <Image
                src="/logo.svg"
                width={40}
                height={40}
                className="hidden md:block"
                alt="Logo of the project showing desktop version"
              />
              <Image
                src="/logo.svg"
                width={40}
                height={40}
                className="block md:hidden"
                alt="Logo of the project showing mobile version"
              />
              {/* <img
                src="images/logo/logo.svg"
                alt="logo"
                className="w-full dark:hidden"
              />
              <img
                src="images/logo/logo-white.svg"
                alt="logo"
                className="hidden w-full dark:block"
              /> */}
            </Link>
          </div>

          <Navigation />
        </div>
      </div>
    </header>
  );
};
