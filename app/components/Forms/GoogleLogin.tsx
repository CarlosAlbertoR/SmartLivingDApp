"use client";

import { Button } from "@components/ui";
import { signupWithGoogle } from "@config/web3auth";
import { FcGoogle } from "react-icons/fc";

export const GoogleLogin = () => {
  const handleSignupWithGoogle = async () => {
    try {
      await signupWithGoogle();
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
      onClick={handleSignupWithGoogle}
    />
  );
};
