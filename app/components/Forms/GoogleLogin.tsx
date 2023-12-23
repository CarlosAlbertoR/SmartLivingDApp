"use client";

import { Button } from "@components/ui";
import { createWeb3Auth } from "@config/web3auth";
import { WALLET_ADAPTERS } from "@web3auth/base";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

export const GoogleLogin = () => {
  const [web3Auth, setWeb3Auth] = useState<Web3AuthNoModal>();

  useEffect(() => {
    const initializeWeb3Auth = async () => {
      try {
        const web3AuthManager = await createWeb3Auth();
        setWeb3Auth(web3AuthManager);
      } catch (error) {
        console.error("Error initializing Web3Auth:", error);
      }
    };

    initializeWeb3Auth();
  }, []);

  const signupWithGoogle = async () => {
    try {
      if (!web3Auth) {
        const web3AuthManager = await createWeb3Auth();
        setWeb3Auth(web3AuthManager);
      }

      const web3authProvider = await web3Auth?.connectTo(
        WALLET_ADAPTERS.OPENLOGIN,
        {
          loginProvider: "google",
        }
      );
    } catch (error) {
      console.error("Error during Google signup:", error);
    }
  };

  return (
    <Button
      icon={FcGoogle}
      className="mb-6"
      label="Registrarse con Google"
      type="secondary"
      onClick={signupWithGoogle}
    />
  );
};
