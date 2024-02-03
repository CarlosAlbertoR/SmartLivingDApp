"use client";

import { Button } from "@components/ui";
import { loginWithGoogle } from "@config/web3auth";
import { useAppDispatch } from "@core/store/hooks";
import { setUser } from "@store/slices/user/userSlice";
import { parseUserInfo } from "@utils/parseUserInfo";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export const GoogleLogin = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSignupWithGoogle = async () => {
    try {
      const user = await loginWithGoogle();
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
      label="Registrarse con Google"
      type="secondary"
      onClick={handleSignupWithGoogle}
    />
  );
};
