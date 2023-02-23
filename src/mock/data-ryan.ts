// Temporary data for development purpose

import { PlatformLinkCategories, SocialMedia } from "lib/constants";
import { Badge, Chains, IdentityInfo, NftToken, ProfileData } from "lib/types";
import avatarImage from "./images/ryan/avatar-ryan.png";
import nftMetakey10004Image from "./images/ryan/nft-metakey-10004.png";
import nftAoArtBall5766Image from "./images/ryan/nft-ao-artball-5766.png";
import nftLand31159Image from "./images/ryan/nft-land-31159.png";
import nftPOAP12060Image from "./images/ryan/nft-poap-12060.png";
import nftThorchain78Image from "./images/ryan/nft-thorchain-78.png";
import nftLens85835Image from "./images/ryan/nft-lens-85835.png";
import nftArbitrum426456Image from "./images/ryan/nft-arbitrum-426456.png";
import nftZerion5Image from "./images/ryan/nft-zerion-5.png";
import facebookAccountBadge from "./images/badges/facebook-account-badge.png";
import twitterAccountBadge from "./images/badges/twitter-account-badge.png";

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
      category: PlatformLinkCategories.SOCIAL,
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

export const collectibles: NftToken[] = [
  {
    chain_id: Chains.ETHEREUM,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0x10daa9f4c0f985430fde4959adb2c791ef2ccf83",
    token_id: "10004",
    name: "The Meta Key",
    metadata: {
      name: "Metakey: Edition 4 - The Captain",
      description:
        "We are the Metakey — a platform-agnostic and massively interoperable web3 utility creator. Our core product is a single token that can integrate with multiple platforms and games to transform into avatars; weapons; vehicles; exp bonuses; grant access to virtual land and exclusive educational content; VIP experiences at virtual events; and much more.",
      image: nftMetakey10004Image,
      animation_url: null,
      external_link: null,
    },
    isSBT: false,
  },
  {
    chain_id: Chains.ETHEREUM,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0x22C1f6050E56d2876009903609a2cC3fEf83B415",
    token_id: "12060",
    name: "POAP",
    metadata: {
      name: "Bankless Member - 2020",
      description: "The Proof of Attendance Protocole",
      image: nftPOAP12060Image,
      animation_url: null,
      external_link: null,
    },
    isSBT: false,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xdb46d1dc155634fbc732f92e853b10b288ad5a1d",
    token_id: "85835",
    name: "Lens Protocol Profiles",
    metadata: {
      name: "@hotsauce.lens",
      description:
        "Planted in this collection, you’ll find all the Lens Protocol Profile NFTs that have been claimed so far. By owning a Lens Profile NFT, you are in control. You can choose where and how you use it. Welcome to a new era of decentralized social media, welcome to Lens!",
      image: nftLens85835Image,
      animation_url: null,
      external_link: null,
    },
    isSBT: false,
  },
  {
    chain_id: Chains.ETHEREUM,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0x05844e9aE606f9867ae2047c93cAc370d54Ab2E1",
    token_id: "5766",
    name: "AO ArtBall",
    metadata: {
      name: "AO Art Ball #5766",
      description:
        "The AO Art Ball, the first official Australian Open (AO) NFT. One court sectioned into 6776 plots, each assigned a unique randomly generated Art Ball and updated with official winning match data. Own the court, own the moment. Dunlop is the Official Ball of the AO.",
      image: nftAoArtBall5766Image,
      animation_url: null,
      external_link: null,
    },
    isSBT: false,
  },
  {
    chain_id: Chains.ETHEREUM,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0x5CC5B05a8A13E3fBDB0BB9FcCd98D38e50F90c38",
    token_id: "31159",
    name: "The Sandbox",
    metadata: {
      name: "LAND (-53,-128)",
      description:
        "A LAND is a digital piece of real estate in The Sandbox metaverse that players can buy to build experiences on top of. Once you own a LAND, you will be able to populate it with Games and Assets. Each LAND is a unique (non-fungible) token lying on the public Ethereum blockchain (ERC-721).",
      image: nftLand31159Image,
      animation_url: null,
      external_link: null,
    },
    isSBT: false,
  },
  {
    chain_id: Chains.ETHEREUM,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xb85070695a7599e3f6a8d46e8bd716d1923769b8",
    token_id: "78",
    name: "Thorchain Collectibles",
    metadata: {
      name: "Burnhild",
      description: "The valkyrie who is the love of Sigurd.",
      image: nftThorchain78Image,
      animation_url: null,
      external_link: null,
    },
    isSBT: false,
  },
  {
    chain_id: Chains.ETHEREUM,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xfae39ec09730ca0f14262a636d2d7c5539353752",
    token_id: "426456",
    name: "Arbitrum Odyssey NFT",
    metadata: {
      name: "Enter The Odyssey",
      description:
        "Arbitrum is an Optimistic Rollup built to scale Ethereum by @OffchainLabs",
      image: nftArbitrum426456Image,
      animation_url: null,
      external_link: null,
    },
    isSBT: false,
  },
  {
    chain_id: Chains.ETHEREUM,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0x74ee68a33f6c9f113e22b3b77418b75f85d07d22",
    token_id: "5",
    name: "Zerion Genesis Collection",
    metadata: {
      name: "#5 Element",
      description:
        "Zerion Genesis Collection, 2021. The Genesis Collection was designed in collaboration with Nikolay Ironov, an AI artist created by the design studio Art. Lebedev. Each card displays a novel representation of Zerion's logo - a metaphor for the myriad ways in which DeFi, and Web3 in general, can be valuable to the people who use it. This limited-edition series accompanies Zerion's first support of NFTs, allowing anyone to view their digital collectibles alongside their decentralized finance (DeFi) assets. The evolution of decentralized finance and web 3.0 is one in which the lines between money, debt, ownership and creative works are ultimately blurred. The narrative underlying this series is that the new economy is open to anyone - and technology aids how we define this.",
      image: nftZerion5Image,
      animation_url: null,
      external_link: null,
    },
    isSBT: false,
  },
];

export const badges: Badge[] = [
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270",
    token_id: "twitter-account",
    name: "Verida Badges",
    metadata: {
      name: "Twitter Account",
      description: "",
      image: twitterAccountBadge,
      proofLabel: "Twitter Account",
      proofValue: "@RyanJKris",
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD271",
    token_id: "verida-identity",
    name: "Verida Badges",
    metadata: {
      name: "Verida Identity",
      description: "",
      image: facebookAccountBadge,
      proofLabel: "Verida Identity",
      proofValue: "ryan",
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD272",
    token_id: "discord-account",
    name: "Verida Badges",
    metadata: {
      name: "Discord Account",
      description: "",
      image: twitterAccountBadge,
      proofLabel: "Discord Account",
      proofValue: "ryan#7622",
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD273",
    token_id: "facebook-account",
    name: "Verida Badges",
    metadata: {
      name: "Facebook Account",
      description: "",
      image: facebookAccountBadge,
      proofLabel: "Facebook Account",
      proofValue: "@RyanJKris",
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270",
    token_id: "twitter-account-2",
    name: "Verida Badges",
    metadata: {
      name: "Twitter Account",
      description: "",
      image: twitterAccountBadge,
      proofLabel: "Twitter Account",
      proofValue: "@RyanJKris",
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD271",
    token_id: "verida-identity-2",
    name: "Verida Badges",
    metadata: {
      name: "Verida Identity",
      description: "",
      image: facebookAccountBadge,
      proofLabel: "Verida Identity",
      proofValue: "ryan",
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD272",
    token_id: "discord-account-2",
    name: "Verida Badges",
    metadata: {
      name: "Discord Account",
      description: "",
      image: twitterAccountBadge,
      proofLabel: "Discord Account",
      proofValue: "ryan#7622",
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD273",
    token_id: "facebook-account-2",
    name: "Verida Badges",
    metadata: {
      name: "Facebook Account",
      description: "",
      image: facebookAccountBadge,
      proofLabel: "Facebook Account",
      proofValue: "@RyanJKris",
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270",
    token_id: "twitter-account-3",
    name: "Verida Badges",
    metadata: {
      name: "Twitter Account",
      description: "",
      image: twitterAccountBadge,
      proofLabel: "Twitter Account",
      proofValue: "@RyanJKris",
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD271",
    token_id: "verida-identity-3",
    name: "Verida Badges",
    metadata: {
      name: "Verida Identity",
      description: "",
      image: facebookAccountBadge,
      proofLabel: "Verida Identity",
      proofValue: "ryan",
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD272",
    token_id: "discord-account-3",
    name: "Verida Badges",
    metadata: {
      name: "Discord Account",
      description: "",
      image: twitterAccountBadge,
      proofLabel: "Discord Account",
      proofValue: "ryan#7622",
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD273",
    token_id: "facebook-account-3",
    name: "Verida Badges",
    metadata: {
      name: "Facebook Account",
      description: "",
      image: facebookAccountBadge,
      proofLabel: "Facebook Account",
      proofValue: "@RyanJKris",
    },
    isSBT: true,
  },
];
