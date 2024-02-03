import { UserInfo } from "@web3auth/base";

export const parseUserInfo = (userData: Partial<UserInfo>) => {
  const parsedUser = {
    email: userData.email ?? "",
    name: userData.name ?? "",
    profileImage: userData.profileImage ?? "",
  };

  return parsedUser;
};
