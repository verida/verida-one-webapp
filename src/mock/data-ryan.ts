// Temporary data for development purpose

import { Chains, SocialMedia } from "lib/constants";
import { Badge, Collectible, IdentityInfo, ProfileData } from "lib/types";
import avatarImage from "./images/ryan/avatar-ryan.png";
import nftMetakey10004Image from "./images/ryan/nft-metakey-10004.png";
import nftAoArtBall5766Image from "./images/ryan/nft-ao-artball-5766.png";
import nftLand31159Image from "./images/ryan/nft-land-31159.png";
import nftPOAP12060Image from "./images/ryan/nft-poap-12060.png";
import nftThorchain78Image from "./images/ryan/nft-thorchain-78.png";
import nftLens85835Image from "./images/ryan/nft-lens-85835.png";
import nftArbitrum426456Image from "./images/ryan/nft-arbitrum-426456.png";
import nftZerion5Image from "./images/ryan/nft-zerion-5.png";
import twitterAccountBadge from "./images/badges/twitter-account.png";
import discordAccountBadge from "./images/badges/discord-account.png";
import facebookAccountBadge from "./images/badges/facebook-account.png";
import veridaIdentityBadge from "./images/badges/verida-identity.png";

export const identityInfo: IdentityInfo = {
  did: "did:vda:0x4F984180236a323d90346e36D848792b26b4049E",
  avatarUri: avatarImage,
  name: "Ryan Kris",
  username: "ryan.vda",
  description:
    "Cofounder @ Verida. Building web3 identity and personal data storage",
};

export const profileData: ProfileData = {
  customLinks: [
    {
      label: "ryankris.com",
      url: "https://www.ryankris.com/",
      featured: true,
      order: 1,
    },
    {
      label: "Ryan on Medium",
      url: "https://ryankris.medium.com/",
      order: 2,
    },
  ],
  platformLinks: [
    {
      category: "socialMedia",
      platform: SocialMedia.TWITTER,
      accountId: "RyanJKris",
      url: "https://twitter.com/RyanJKris",
      verificationProof: {
        type: "",
        proof: "RyanJKris-verified",
      },
      order: 1,
    },
  ],
  walletAddresses: [
    {
      chainId: Chains.ETHEREUM,
      address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
      verificationProof: {
        type: "",
        proof: "verified",
      },
      order: 1,
    },
  ],
  featureAssets: [
    {
      chainId: Chains.ETHEREUM,
      contractAddress: "0x10daa9f4c0f985430fde4959adb2c791ef2ccf83",
      tokenId: "10004",
      ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
      order: 1,
    },
    {
      chainId: Chains.ETHEREUM,
      contractAddress: "0x22C1f6050E56d2876009903609a2cC3fEf83B415",
      tokenId: "12060",
      ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
      order: 2,
    },
    {
      chainId: Chains.POLYGON,
      contractAddress: "0xdb46d1dc155634fbc732f92e853b10b288ad5a1d",
      tokenId: "85835",
      ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
      order: 3,
    },
  ],
};

export const collectibles: Collectible[] = [
  {
    chainId: Chains.ETHEREUM,
    contractAddress: "0x10daa9f4c0f985430fde4959adb2c791ef2ccf83",
    tokenId: "10004",
    collectionLabel: "The Meta Key",
    tokenLabel: "Metakey: Edition 4 - The Captain",
    description:
      "We are the Metakey — a platform-agnostic and massively interoperable web3 utility creator. Our core product is a single token that can integrate with multiple platforms and games to transform into avatars; weapons; vehicles; exp bonuses; grant access to virtual land and exclusive educational content; VIP experiences at virtual events; and much more.",
    ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    media: nftMetakey10004Image,
    priceUnit: "ETH",
    floorPrice: 0.129,
  },
  {
    chainId: Chains.ETHEREUM,
    contractAddress: "0x22C1f6050E56d2876009903609a2cC3fEf83B415",
    tokenId: "12060",
    collectionLabel: "POAP",
    tokenLabel: "Bankless Member - 2020",
    description: "The Proof of Attendance Protocole",
    ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    media: nftPOAP12060Image,
    priceUnit: "WETH",
    floorPrice: 0.0043,
  },
  {
    chainId: Chains.POLYGON,
    contractAddress: "0xdb46d1dc155634fbc732f92e853b10b288ad5a1d",
    tokenId: "85835",
    collectionLabel: "Lens Protocol Profiles",
    tokenLabel: "@hotsauce.lens",
    description:
      "Planted in this collection, you’ll find all the Lens Protocol Profile NFTs that have been claimed so far. By owning a Lens Profile NFT, you are in control. You can choose where and how you use it. Welcome to a new era of decentralized social media, welcome to Lens!",
    ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    media: nftLens85835Image,
  },
  {
    chainId: Chains.ETHEREUM,
    contractAddress: "0x05844e9aE606f9867ae2047c93cAc370d54Ab2E1",
    tokenId: "5766",
    collectionLabel: "AO ArtBall",
    tokenLabel: "AO Art Ball #5766",
    description:
      "The AO Art Ball, the first official Australian Open (AO) NFT. One court sectioned into 6776 plots, each assigned a unique randomly generated Art Ball and updated with official winning match data. Own the court, own the moment. Dunlop is the Official Ball of the AO.",
    ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    media: nftAoArtBall5766Image,
    priceUnit: "WETH",
    floorPrice: 0.095,
  },
  {
    chainId: Chains.ETHEREUM,
    contractAddress: "0x5CC5B05a8A13E3fBDB0BB9FcCd98D38e50F90c38",
    tokenId: "31159",
    collectionLabel: "The Sandbox",
    tokenLabel: "LAND (-53,-128)",
    description:
      "A LAND is a digital piece of real estate in The Sandbox metaverse that players can buy to build experiences on top of. Once you own a LAND, you will be able to populate it with Games and Assets. Each LAND is a unique (non-fungible) token lying on the public Ethereum blockchain (ERC-721).",
    ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    media: nftLand31159Image,
    priceUnit: "WETH",
    floorPrice: 0.685,
  },
  {
    chainId: Chains.ETHEREUM,
    contractAddress: "0xb85070695a7599e3f6a8d46e8bd716d1923769b8",
    tokenId: "78",
    collectionLabel: "Thorchain Collectibles",
    tokenLabel: "Burnhild",
    description: "The valkyrie who is the love of Sigurd.",
    ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    media: nftThorchain78Image,
    priceUnit: "WETH",
    floorPrice: 0.2,
  },
  {
    chainId: Chains.ETHEREUM,
    contractAddress: "0xfae39ec09730ca0f14262a636d2d7c5539353752",
    tokenId: "426456",
    collectionLabel: "Arbitrum Odyssey NFT",
    tokenLabel: "Enter The Odyssey",
    description:
      "Arbitrum is an Optimistic Rollup built to scale Ethereum by @OffchainLabs",
    ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    media: nftArbitrum426456Image,
  },
  {
    chainId: Chains.ETHEREUM,
    contractAddress: "0x74ee68a33f6c9f113e22b3b77418b75f85d07d22",
    tokenId: "5",
    collectionLabel: "Zerion Genesis Collection",
    tokenLabel: "#5 Element",
    description:
      "Zerion Genesis Collection, 2021. The Genesis Collection was designed in collaboration with Nikolay Ironov, an AI artist created by the design studio Art. Lebedev. Each card displays a novel representation of Zerion's logo - a metaphor for the myriad ways in which DeFi, and Web3 in general, can be valuable to the people who use it. This limited-edition series accompanies Zerion's first support of NFTs, allowing anyone to view their digital collectibles alongside their decentralized finance (DeFi) assets. The evolution of decentralized finance and web 3.0 is one in which the lines between money, debt, ownership and creative works are ultimately blurred. The narrative underlying this series is that the new economy is open to anyone - and technology aids how we define this.",
    ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    media: nftZerion5Image,
  },
];

export const badges: Badge[] = [
  {
    chainId: Chains.POLYGON,
    contractAddress: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270",
    tokenId: "twitter-account",
    collectionLabel: "Verida Badges",
    tokenLabel: "Twitter Account",
    description: "",
    ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    media: twitterAccountBadge,
    proofLabel: "Twitter Account",
    proofValue: "@RyanJKris",
  },
  {
    chainId: Chains.POLYGON,
    contractAddress: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD271",
    tokenId: "verida-identity",
    collectionLabel: "Verida Badges",
    tokenLabel: "Verida Identity",
    description: "",
    ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    media: veridaIdentityBadge,
    proofLabel: "Verida Identity",
    proofValue: "ryan",
  },
  {
    chainId: Chains.POLYGON,
    contractAddress: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD272",
    tokenId: "discord-account",
    collectionLabel: "Verida Badges",
    tokenLabel: "Discord Account",
    description: "",
    ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    media: discordAccountBadge,
    proofLabel: "Discord Account",
    proofValue: "ryan#7622",
  },
  {
    chainId: Chains.POLYGON,
    contractAddress: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD273",
    tokenId: "facebook-account",
    collectionLabel: "Verida Badges",
    tokenLabel: "Facebook Account",
    description: "",
    ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    media: facebookAccountBadge,
    proofLabel: "Facebook Account",
    proofValue: "@RyanJKris",
  },
];
