// Temporary data for development purpose

import { PlatformLinkCategories, SocialMedia } from "lib/constants";
import { Badge, Chains, IdentityInfo, ProfileData } from "lib/types";
import avatarImage from "./images/avatar-ryan.png";
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
