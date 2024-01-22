"use client";

import { Button } from "@components/ui";
import { getUserInfo, signupWithGoogle } from "@config/web3auth";
import { useAppDispatch } from "@core/store/hooks";
import { setUser } from "@store/slices/user/userSlice";
import { UserInfo } from "@web3auth/base";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export const GoogleLogin = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const parseUserInfo = (userData: Partial<UserInfo>) => {
    const parsedUser = {
      email: userData.email ?? "",
      name: userData.name ?? "",
      profileImage: userData.profileImage ?? "",
    };

    return parsedUser;
  };

  const handleSignupWithGoogle = async () => {
    try {
      await signupWithGoogle();
      const user = await getUserInfo();
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
