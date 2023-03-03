// Temporary data for development purpose

import { PlatformLinkCategories, SocialMedia } from "lib/constants";
import { Badge, Chains, IdentityInfo, ProfileData } from "lib/types";
import avatarImage from "./images/avatar-ryan.png";
import facebookAccountBadge from "./images/badges/facebook-account-badge.png";
import twitterAccountBadge from "./images/badges/twitter-account-badge.png";
import veridaIdentityBadge from "./images/badges/verida-identity-badge.png";

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
      chainId: Chains.ETHEREUM_GOERLI,
      address: "0xff71512c84096f55cdf5c5f3d3c6ace99b56fef0",
      verificationProof: {
        type: "",
        proof: "verified",
      },
      order: 1,
    },
  ],
  featureAssets: [
    {
      chainId: Chains.ETHEREUM_GOERLI,
      contractAddress: "0x2e60f8f0ded025c41454e151f75c300fba3bc62b",
      tokenId: "3",
      ownerAddress: "0xff71512c84096f55cdf5c5f3d3c6ace99b56fef0",
      order: 1,
    },
  ],
};

export const badges: Badge[] = [
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD271",
    token_id: "verida-identity-0",
    name: "Verida Badges",
    metadata: {
      name: "Verida Identity",
      description: "",
      image: veridaIdentityBadge,
      proofLabel: "Verida Identity",
      proofValue: "ryan",
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270",
    token_id: "twitter-account-0",
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
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD273",
    token_id: "facebook-account-0",
    name: "Verida Badges",
    metadata: {
      name: "Facebook Account",
      description: "",
      image: facebookAccountBadge,
      proofLabel: "Facebook Account",
      proofValue: "@ryan.kris",
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD271",
    token_id: "verida-identity-1",
    name: "Verida Badges",
    metadata: {
      name: "Verida Identity",
      description: "",
      image: veridaIdentityBadge,
      proofLabel: "Verida Identity",
      proofValue: "ryan",
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270",
    token_id: "twitter-account-1",
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
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD273",
    token_id: "facebook-account-1",
    name: "Verida Badges",
    metadata: {
      name: "Facebook Account",
      description: "",
      image: facebookAccountBadge,
      proofLabel: "Facebook Account",
      proofValue: "@ryan.kris",
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
      image: veridaIdentityBadge,
      proofLabel: "Verida Identity",
      proofValue: "ryan",
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
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD273",
    token_id: "facebook-account-2",
    name: "Verida Badges",
    metadata: {
      name: "Facebook Account",
      description: "",
      image: facebookAccountBadge,
      proofLabel: "Facebook Account",
      proofValue: "@ryan.kris",
    },
    isSBT: true,
  },
];
