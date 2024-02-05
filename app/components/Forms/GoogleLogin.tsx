"use client";

import { Button } from "@components/ui";
import { loginWithGoogle } from "@config/web3auth";
import { useAppDispatch } from "@store/hooks";
import { setUser } from "@store/slices";
import { parseUserInfo } from "@utils/parseUserInfo";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

interface GoogleLoginProps {
  type: "login" | "register";
}

export const GoogleLogin = ({ type }: GoogleLoginProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const getLabel = () => {
    return type === "login"
      ? "Iniciar sesión con Google"
      : "Registrarse con Google";
  };

  const handleSignupWithGoogle = async () => {
    try {
      const user = await loginWithGoogle();
      console.log("user", user);

      if (user) {
        const parsedUser = parseUserInfo(user);
        dispatch(setUser(parsedUser));
        router.push("/home");
      }
    } catch (error) {
      console.error("Error during Google signup:", error);
    }
  };

  return (
    <Button
      icon={FcGoogle}
      className="mb-6"
      label={getLabel()}
      type="secondary"
      onClick={handleSignupWithGoogle}
    />
  );
};
