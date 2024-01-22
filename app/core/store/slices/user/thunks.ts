import { logout, signupWithGoogle } from "@config/web3auth";

export const loginWithGoogle = () => {
  return async (dispatch) => {
    try {
      await logout();
      await signupWithGoogle();
    } catch (error) {
      console.error("Error during Google signup:", error);
    }
  };
};
