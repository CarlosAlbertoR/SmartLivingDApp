import { ADAPTER_EVENTS, IProvider, WALLET_ADAPTERS } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { TorusWalletAdapter } from "@web3auth/torus-evm-adapter";
import { mumbaiChain } from "./chains";
import dotenv from "dotenv";

// Define una variable global para almacenar la instancia de Web3Auth
let web3authInstance: Web3AuthNoModal | null;
let provider: IProvider | null = null;

export const createWeb3Auth = async () => {
  try {
    // Si la instancia ya existe, devuélvela en lugar de crear una nueva
    if (web3authInstance) {
      return web3authInstance;
    }

    // Crea la instancia de Web3AuthNoModal
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
        whiteLabel: {
          appName: "Smart Living",
          appUrl: "https://web3auth.io",
          logoLight: "https://web3auth.io/images/web3auth-logo.svg",
          logoDark: "https://web3auth.io/images/web3auth-logo---Dark.svg",
          defaultLanguage: "en",
          mode: "auto",
          useLogoLoader: true,
        },
        mfaSettings: {
          deviceShareFactor: {
            enable: true,
            priority: 1,
            mandatory: true,
          },
          backUpShareFactor: {
            enable: true,
            priority: 2,
            mandatory: false,
          },
          socialBackupFactor: {
            enable: true,
            priority: 3,
            mandatory: false,
          },
          passwordFactor: {
            enable: true,
            priority: 4,
            mandatory: false,
          },
        },
      },
      loginSettings: { mfaLevel: "optional" },
      privateKeyProvider,
    });

    web3auth.configureAdapter(openloginAdapter);

    // const torusAdapter = new TorusWalletAdapter({
    //   adapterSettings: {
    //     clientId: process.env.NEXT_PUBLIC_WEB_THREE_CLIENT_ID || "",
    //     buttonPosition: "bottom-left",
    //   },
    //   loginSettings: {
    //     verifier: "google",
    //   },
    //   initParams: {
    //     buildEnv: "testing",
    //   },
    //   chainConfig: mumbaiChain,
    // });

    const metamaskAdapter = new MetamaskAdapter({ chainConfig: mumbaiChain });

    //web3auth.configureAdapter(torusAdapter);
    web3auth.configureAdapter(metamaskAdapter);

    subscribeAuthEvents(web3auth);

    await web3auth.init();
    provider = web3auth.provider;

    // Asigna la instancia a la variable global
    web3authInstance = web3auth;

    return web3auth;
  } catch (error) {
    console.error("Error durante la inicialización de Web3Auth:", error);
    throw error;
  }
};

const subscribeAuthEvents = (web3auth: Web3AuthNoModal) => {
  web3auth.on(ADAPTER_EVENTS.CONNECTED, (data) => {
    console.log("Conectado al monedero", data);
    // web3auth.provider estará disponible aquí después de que el usuario se conecte
  });

  web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
    console.log("Conectando");
  });

  web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
    console.log("Desconectado");
  });

  web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
    console.error("Error", error);
  });
};

export const signupWithGoogle = async () => {
  try {
    if (!web3authInstance) {
      await createWeb3Auth();
    }

    const web3authProvider = await web3authInstance?.connectTo(
      WALLET_ADAPTERS.OPENLOGIN,
      {
        loginProvider: "google",
      }
    );

    if (web3authProvider) {
      provider = web3authProvider;
    }
  } catch (error) {
    console.error("Error during Google signup:", error);
  }
};

export const getUserInfo = async () => {
  try {
    await createWeb3Auth();
    const user = await web3authInstance?.getUserInfo();
    console.log("user", user);
    return user;
  } catch (error) {
    console.error("Error al obtener información del usuario:", error);
  }
};

export const logout = async () => {
  if (!web3authInstance) {
    console.error("web3auth not initialized yet");
    return;
  }

  await web3authInstance.logout();
  web3authInstance = null;
};
