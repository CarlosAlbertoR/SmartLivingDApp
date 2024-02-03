
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";

import { mumbaiChain } from "../chains";
import { subscribeAuthEvents } from "./authEvents";

// Define una variable global para almacenar la instancia de Web3Auth
let web3authInstance: Web3AuthNoModal | null;

export const getWeb3AuthInstance = async () => {
  if (web3authInstance) return web3authInstance;

  try {
    const web3auth = new Web3AuthNoModal({
      clientId: process.env.NEXT_PUBLIC_WEB_THREE_CLIENT_ID ?? "",
      chainConfig: mumbaiChain,
      enableLogging: true,
      web3AuthNetwork: "sapphire_devnet",
    });

    const privateKeyProvider = new EthereumPrivateKeyProvider({
      config: { chainConfig: mumbaiChain },
    });

    const openloginAdapter = new OpenloginAdapter({
      adapterSettings: {
        uxMode: "redirect",
        loginConfig: {
          jwt: {
            verifier: "sml-firebase-verifier",
            typeOfLogin: "jwt",
            clientId: process.env.NEXT_PUBLIC_WEB_THREE_CLIENT_ID ?? "",
          },
        },
      },
      privateKeyProvider,
    });

    web3auth.configureAdapter(openloginAdapter);

    const metamaskAdapter = new MetamaskAdapter({ chainConfig: mumbaiChain });
    web3auth.configureAdapter(metamaskAdapter);

    subscribeAuthEvents(web3auth);

    await web3auth.init();
    web3authInstance = web3auth;

    return web3auth;
  } catch (error) {
    console.error("Error durante la inicialización de Web3Auth:", error);
    throw error;
  }
};

export const destroyWeb3auth = () => {
  web3authInstance = null;
};

// export const signupWithGoogle = async () => {
//   try {
//     if (!web3authInstance) await createWeb3Auth();

//     const web3authProvider = await web3authInstance?.connectTo(
//       WALLET_ADAPTERS.OPENLOGIN,
//       { loginProvider: "google" }
//     );

//     if (web3authProvider) provider = web3authProvider;
//   } catch (error) {
//     console.error("Error during Google signup:", error);
//   }
// };
