// Temporary data for development purpose

import { Chains, SocialMedia } from "lib/constants";
import {
  Collectible,
  CustomLink,
  Profile,
  ProfileInfo,
  SocialMediaLink,
  WalletAddress,
} from "lib/types";
import avatarImage from "./images/johndoe/avatar-johndoe.png";
import nftImage from "./images/johndoe/nft-johndoe.png";

export const profileInfo: ProfileInfo = {
  avatar: avatarImage,
  name: "John Doe",
  veridaName: "@johndoe",
  description: "Believe in the ethos of web3 and decentralization",
};

export const socialMediaLinks: SocialMediaLink[] = [
  {
    platform: SocialMedia.TWITTER,
    url: "https://twitter.com/Verida_io",
    verified: true,
  },
  {
    platform: SocialMedia.DISCORD,
    url: "https://twitter.com/Verida_io",
    verified: true,
  },
];

export const featuredLinks: CustomLink[] = [
  {
    label: "Visit my website",
    url: "https://www.verida.io",
  },
  {
    label: "Check out my artworks",
    url: "https://www.verida.io",
  },
];

export const links: CustomLink[] = [
  {
    label: "Verida website",
    url: "https://www.verida.io",
  },
  {
    label: "Download Vault",
    url: "https://www.verida.io",
  },
  {
    label: "Merch shop",
    url: "https://www.verida.io",
  },
  {
    label: "Book a call with me ",
    url: "https://www.verida.io",
  },
];

export const walletAddresses: WalletAddress[] = [
  {
    address: "0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5",
    chain: Chains.ETHEREUM,
    verified: true,
  },
  {
    address: "0x10DcF0419609567DBC10C9627e501760f72D8a38",
    chain: Chains.ETHEREUM,
    verified: true,
  },
  {
    address: "0xB562D01b429e0e2de79dd751b1b17A7827A41d3e.",
    chain: Chains.ETHEREUM,
    verified: true,
  },
];

export const featuredCollectibles: Collectible[] = [
  {
    chain: Chains.ETHEREUM,
    contractAddress: "A",
    tokenId: "1",
    ownerAddress: "0x23qws4e...",
    collectionLabel: "Moonbirds",
    tokenLabel: "#8697",
    media: nftImage,
    floorPrice: 0.0074,
    priceUnit: "ETH",
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "A",
    tokenId: "2",
    ownerAddress: "0x23qws4e...",
    collectionLabel: "Moonbirds",
    tokenLabel: "#8697",
    media: nftImage,
    floorPrice: 0.0074,
    priceUnit: "ETH",
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "A",
    tokenId: "3",
    ownerAddress: "0x23qws4e...",
    collectionLabel: "Moonbirds",
    tokenLabel: "#8697",
    media: nftImage,
    floorPrice: 0.0074,
    priceUnit: "ETH",
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "A",
    tokenId: "4",
    ownerAddress: "0x23qws4e...",
    collectionLabel: "Moonbirds",
    tokenLabel: "#8697",
    media: nftImage,
    floorPrice: 0.0074,
    priceUnit: "ETH",
  },
];

export const collectibles: Collectible[] = [
  {
    chain: Chains.ETHEREUM,
    contractAddress: "A",
    tokenId: "1",
    ownerAddress: "0x23qws4e...",
    collectionLabel: "Moonbirds",
    tokenLabel: "#8697",
    media: nftImage,
    floorPrice: 0.0074,
    priceUnit: "ETH",
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "A",
    tokenId: "2",
    ownerAddress: "0x23qws4e...",
    collectionLabel: "Moonbirds",
    tokenLabel: "#8697",
    media: nftImage,
    floorPrice: 0.0074,
    priceUnit: "ETH",
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "A",
    tokenId: "3",
    ownerAddress: "0x23qws4e...",
    collectionLabel: "Moonbirds",
    tokenLabel: "#8697",
    media: nftImage,
    floorPrice: 0.0074,
    priceUnit: "ETH",
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "A",
    tokenId: "4",
    ownerAddress: "0x23qws4e...",
    collectionLabel: "Moonbirds",
    tokenLabel: "#8697",
    media: nftImage,
    floorPrice: 0.0074,
    priceUnit: "ETH",
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "A",
    tokenId: "5",
    ownerAddress: "0x23qws4e...",
    collectionLabel: "Moonbirds",
    tokenLabel: "#8697",
    media: nftImage,
    floorPrice: 0.0074,
    priceUnit: "ETH",
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "A",
    tokenId: "6",
    ownerAddress: "0x23qws4e...",
    collectionLabel: "Moonbirds",
    tokenLabel: "#8697",
    media: nftImage,
    floorPrice: 0.0074,
    priceUnit: "ETH",
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "A",
    tokenId: "7",
    ownerAddress: "0x23qws4e...",
    collectionLabel: "Moonbirds",
    tokenLabel: "#8697",
    media: nftImage,
    floorPrice: 0.0074,
    priceUnit: "ETH",
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "A",
    tokenId: "8",
    ownerAddress: "0x23qws4e...",
    collectionLabel: "Moonbirds",
    tokenLabel: "#8697",
    media: nftImage,
    floorPrice: 0.0074,
    priceUnit: "ETH",
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "A",
    tokenId: "9",
    ownerAddress: "0x23qws4e...",
    collectionLabel: "Moonbirds",
    tokenLabel: "#8697",
    media: nftImage,
    floorPrice: 0.0074,
    priceUnit: "ETH",
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "A",
    tokenId: "10",
    ownerAddress: "0x23qws4e...",
    collectionLabel: "Moonbirds",
    tokenLabel: "#8697",
    media: nftImage,
    floorPrice: 0.0074,
    priceUnit: "ETH",
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "A",
    tokenId: "11",
    ownerAddress: "0x23qws4e...",
    collectionLabel: "Moonbirds",
    tokenLabel: "#8697",
    media: nftImage,
    floorPrice: 0.0074,
    priceUnit: "ETH",
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "A",
    tokenId: "12",
    ownerAddress: "0x23qws4e...",
    collectionLabel: "Moonbirds",
    tokenLabel: "#8697",
    media: nftImage,
    floorPrice: 0.0074,
    priceUnit: "ETH",
  },
];

export const profile: Profile = {
  profileInfo,
  socialMediaLinks,
  featuredLinks,
  links,
  walletAddresses,
  featuredCollectibles,
  collectibles,
};
