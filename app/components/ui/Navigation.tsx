"use client";

import { useAppSelector } from "@store/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoMdMenu, IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

import { Button, UserMenu } from ".";

const Navigation = () => {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const currentUser = useAppSelector((state) => state.user).user;

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className="flex w-full items-center justify-end px-4">
      <div>
        <button
          onClick={toggleNavbar}
          className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${
            navbarOpen ? "navbarTogglerActive" : ""
          }`}
          id="navbarToggler"
        >
          {navbarOpen ? <FaTimes /> : <IoMdMenu />}
        </button>

        <nav
          className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-4 px-6 shadow dark:bg-black lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none dark:lg:bg-transparent ${
            !navbarOpen ? "hidden" : ""
          }`}
        >
          <ul className="blcok lg:flex">
            <li>
              <Link
                href="#home"
                className="scroll-menu flex py-2 text-lg font-semibold text-primary hover:text-primary dark:text-white dark:hover:text-white lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="#support"
                className="scroll-menu flex py-2 text-lg font-semibold text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-white lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12"
              >
                Soporte
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex justify-end pr-16 lg:pr-0 xl:pl-12 2xl:pl-20">
        <div className="mr-4">
          <label
            htmlFor="darkToggler"
            className="flex h-11 w-20 cursor-pointer items-center justify-center rounded-full bg-light-bg dark:bg-[#1E2763]"
          >
            <input
              type="checkbox"
              name="darkToggler"
              id="darkToggler"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="sr-only"
              aria-label="darkToggler"
            />
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white dark:bg-transparent dark:text-body-color">
              <MdSunny />
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-body-color-2 dark:bg-primary dark:text-white">
              <IoMdMoon />
            </span>
          </label>
        </div>

        {currentUser ? (
          <UserMenu className="hidden sm:flex" currentUser={currentUser} />
        ) : (
          <Button
            label="Iniciar sesión"
            type="secondary"
            className="hidden sm:flex"
            onClick={() => router.push("/signin")}
          />
        )}
      </div>
    </div>
  );
};

export default Navigation;
