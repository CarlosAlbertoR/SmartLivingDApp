import { WALLET_ADAPTERS } from "@web3auth/base";

import { getUserInfo, getWeb3AuthInstance } from ".";

export const conectFirebaseUser = async (idToken: string) => {
  try {
    const web3authInstance = await getWeb3AuthInstance();

    const web3authProvider = await web3authInstance?.connectTo(
      WALLET_ADAPTERS.OPENLOGIN,
      {
        loginProvider: "jwt",
        extraLoginOptions: {
          id_token: idToken,
          verifierIdField: "email",
          domain: "http://localhost:3000",
        },
      }
    );
    if (web3authProvider) web3authInstance.provider = web3authProvider;
    const user = await getUserInfo();
    return user;
  } catch (error) {
    console.error("Error during Signup:", error);
  }
};
