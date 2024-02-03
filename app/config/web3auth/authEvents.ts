import { ADAPTER_EVENTS } from "@web3auth/base";
import { Web3AuthNoModal } from "@web3auth/no-modal";

export const subscribeAuthEvents = (web3auth: Web3AuthNoModal) => {
  web3auth.on(ADAPTER_EVENTS.CONNECTED, (data) => {
    console.log("Conectado al monedero", data);
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
