import { Icon } from "components/atoms";
import {
  ChainDefinition,
  ChainNetworkTypes,
  Chains as ChainsType,
} from "lib/types";

export const chainsDefinitions: Record<ChainsType, ChainDefinition> = {
  [ChainsType.ETHEREUM]: {
    chainId: ChainsType.ETHEREUM,
    type: ChainNetworkTypes.MAINNET,
    label: "Ethereum",
    explorerRootUrl: "https://etherscan.io",
    explorerAddressUrl: "https://etherscan.io/address",
    icon: (size?: number | string) => (
      <Icon type="chain-ethereum" size={size} />
    ),
  },
  [ChainsType.ETHEREUM_GOERLI]: {
    chainId: ChainsType.ETHEREUM_GOERLI,
    type: ChainNetworkTypes.TESTNET,
    label: "Ethereum Goerli",
    explorerRootUrl: "https://goerli.etherscan.io",
    explorerAddressUrl: "https://goerli.etherscan.io/address",
    icon: (size?: number | string) => (
      <Icon type="chain-ethereum" size={size} />
    ),
  },
  [ChainsType.POLYGON]: {
    chainId: ChainsType.POLYGON,
    type: ChainNetworkTypes.MAINNET,
    label: "Polygon",
    explorerRootUrl: "https://polygonscan.com",
    explorerAddressUrl: "https://polygonscan.com/address",
    icon: (size?: number | string) => <Icon type="chain-polygon" size={size} />,
  },
  [ChainsType.POLYGON_MUMBAI]: {
    chainId: ChainsType.POLYGON_MUMBAI,
    type: ChainNetworkTypes.TESTNET,
    label: "Polygon Mumbai",
    explorerRootUrl: "https://mumbai.polygonscan.com",
    explorerAddressUrl: "https://mumbai.polygonscan.com/address",
    icon: (size?: number | string) => <Icon type="chain-polygon" size={size} />,
  },
  [ChainsType.ALGORAND]: {
    chainId: ChainsType.ALGORAND,
    type: ChainNetworkTypes.MAINNET,
    label: "Algorand",
    explorerRootUrl: "https://algoexplorer.io",
    explorerAddressUrl: "https://algoexplorer.io/address",
    icon: (size?: number | string) => (
      <Icon type="chain-algorand" size={size} />
    ),
  },
  [ChainsType.ALGORAND_TESTNET]: {
    chainId: ChainsType.ALGORAND_TESTNET,
    type: ChainNetworkTypes.TESTNET,
    label: "Algorand Testnet",
    explorerRootUrl: "https://testnet.algoexplorer.io",
    explorerAddressUrl: "https://testnet.algoexplorer.io/address",
    icon: (size?: number | string) => (
      <Icon type="chain-algorand" size={size} />
    ),
  },
  [ChainsType.NEAR]: {
    chainId: ChainsType.NEAR,
    type: ChainNetworkTypes.MAINNET,
    label: "NEAR Protocol",
    explorerRootUrl: "https://explorer.near.org",
    explorerAddressUrl: "https://explorer.near.org/accounts",
    icon: (size?: number | string) => <Icon type="chain-near" size={size} />,
  },
  [ChainsType.NEAR_TESTNET]: {
    chainId: ChainsType.NEAR_TESTNET,
    type: ChainNetworkTypes.TESTNET,
    label: "NEAR Protocol Testnet",
    explorerRootUrl: "https://explorer.testnet.near.org",
    explorerAddressUrl: "https://explorer.testnet.near.org/accounts",
    icon: (size?: number | string) => <Icon type="chain-near" size={size} />,
  },
};
