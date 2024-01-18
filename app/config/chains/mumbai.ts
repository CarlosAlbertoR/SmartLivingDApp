import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";

export const mumbaiChain: CustomChainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x13881",
  rpcTarget: "https://rpc-mumbai.maticvigil.com/",
  displayName: "Mumbai",
  blockExplorer: "https://mumbai.polygonscan.com",
  ticker: "MATIC",
  tickerName: "Mumbai Token",
  decimals: 18,
};
