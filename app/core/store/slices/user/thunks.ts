import { signupWithGoogle } from "@config/web3auth";

export const loginWithGoogle = () => {
  return async (dispatch) => {
    try {
      const response = await signupWithGoogle();

      console.log("response", response);
    } catch (error) {
      console.error("Error during Google signup:", error);
    }
  };
};
