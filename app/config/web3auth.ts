import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { mumbaiChain } from "./chains";

export const createWeb3Auth = async () => {
  try {
    const web3auth = new Web3AuthNoModal({
      clientId: process.env.WEB3_CLIENT_ID || "",
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
        clientId: process.env.WEB3_CLIENT_ID || "",
        network: "sapphire_devnet",
        uxMode: "redirect",
      },
      privateKeyProvider,
    });

    const metamaskAdapter = new MetamaskAdapter();

    web3auth.configureAdapter(openloginAdapter);
    web3auth.configureAdapter(metamaskAdapter);

    await web3auth.init();

    if (web3auth.connectedAdapterName && web3auth.provider) {
      return web3auth;
    } else {
      throw new Error(
        "No se pudo conectar al adaptador de Web3Auth o proveedor no disponible."
      );
    }
  } catch (error) {
    console.error("Error durante la inicialización de Web3Auth:", error);
    throw error;
  }
};

// Uso de la función
createWeb3Auth()
  .then((web3auth) => {
    // La inicialización fue exitosa, puedes realizar otras operaciones
  })
  .catch((error) => {
    console.error("Error durante la inicialización:", error);
  });
