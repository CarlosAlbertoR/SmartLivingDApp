"use client";

import { Web3AuthNoModal } from "@web3auth/no-modal";
import { ReactNode, useEffect, useState } from "react";

import { getWeb3AuthInstance } from ".";

export const Web3authProvider = ({ children }: { children: ReactNode }) => {
  const [web3authInstance, setWeb3AuthInstance] =
    useState<Web3AuthNoModal | null>(null);

  useEffect(() => {
    const initializeWeb3Auth = async () => {
      try {
        const web3auth = await getWeb3AuthInstance();
        setWeb3AuthInstance(web3auth);
      } catch (error) {
        console.error("Error during web3auth initialization:", error);
      }
    };

    initializeWeb3Auth();
  }, []);

  return <>{children}</>;
};
