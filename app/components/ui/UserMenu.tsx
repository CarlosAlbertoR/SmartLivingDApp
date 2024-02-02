"use client";

import { logout } from "@config/web3auth";
import { useAppDispatch } from "@core/store/hooks";
import { IUser } from "@core/models/user";
import { setUser } from "@store/slices/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface UserMenuProps {
  className?: string;
  currentUser?: IUser | null;
}

export const UserMenu = ({ className, currentUser }: UserMenuProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen((value) => !value), []);

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(setUser(null));
      router.push("/landing");
    } catch (error) {
      console.error("Error during Logout:", error);
    }
  };
  console.log(currentUser);

  return (
    <div className={`${className} relative`}>
      <div
        className="p-4 md:py-1 md:px-2  bg-light-bg dark:bg-[#1E2763] flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        onClick={toggleOpen}
      >
        <AiOutlineMenu />
        <div className="hidden md:block">
          <Image
            src={currentUser?.profileImage || "/images/placeholder.jpg"}
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-52  bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <div
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              onClick={() => handleLogout()}
            >
              Cerrar sesión
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
