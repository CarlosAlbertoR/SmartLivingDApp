import {
  ADAPTER_STATUS_TYPE,
  CHAIN_NAMESPACES,
  CustomChainConfig,
  IAdapter,
  IProvider,
  IWeb3Auth,
  UserAuthInfo,
  UserInfo,
  WALLET_ADAPTER_TYPE,
} from "@web3auth/base";
import { Chain } from "@models/chain";

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
