import { ADAPTER_EVENTS } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { TorusWalletAdapter } from "@web3auth/torus-evm-adapter";
import { mumbaiChain } from "./chains";
import dotenv from "dotenv";

// Define una variable global para almacenar la instancia de Web3Auth
let web3authInstance;

export const createWeb3Auth = async () => {
  try {
    // Si la instancia ya existe, devuélvela en lugar de crear una nueva
    if (web3authInstance) {
      return web3authInstance;
    }

    // Crea la instancia de Web3AuthNoModal
    const web3auth = new Web3AuthNoModal({
      clientId: process.env.NEXT_PUBLIC_WEB_THREE_CLIENT_ID || "",
      chainConfig: mumbaiChain,
      enableLogging: true,
      web3AuthNetwork: "sapphire_devnet",
    });

    const privateKeyProvider = new EthereumPrivateKeyProvider({
      config: {
        chainConfig: mumbaiChain,
      },
    });

    const openloginAdapter = new OpenloginAdapter({
      adapterSettings: {
        clientId: process.env.NEXT_PUBLIC_WEB_THREE_CLIENT_ID || "",
        network: "sapphire_devnet",
        uxMode: "redirect",
      },
      privateKeyProvider,
    });

    const torusAdapter = new TorusWalletAdapter({
      adapterSettings: {
        clientId: process.env.NEXT_PUBLIC_WEB_THREE_CLIENT_ID || "",
        buttonPosition: "bottom-left",
      },
      loginSettings: {
        verifier: "google",
      },
      initParams: {
        buildEnv: "testing",
      },
      chainConfig: mumbaiChain,
    });

  //  const metamaskAdapter = new MetamaskAdapter();

    web3auth.configureAdapter(openloginAdapter);
    web3auth.configureAdapter(torusAdapter);
    //web3auth.configureAdapter(metamaskAdapter);

    subscribeAuthEvents(web3auth);

    await web3auth.init();

    // Asigna la instancia a la variable global
    web3authInstance = web3auth;

    return web3auth;
  } catch (error) {
    console.error("Error durante la inicialización de Web3Auth:", error);
    throw error;
  }
};


const subscribeAuthEvents = (web3auth) => {
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