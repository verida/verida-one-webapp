// Temporary data for development purpose

import { config } from "lib/config";
import {
  Chains,
  IdentityInfo,
  NftToken,
  PlatformLinkCategories,
  Platforms,
  ProfileData,
} from "lib/types";
import avatarImage from "./images/avatar-ryan.png";
import veridaIdentityBadge from "./images/badges/verida-identity-badge.png";
import facebookAccountBadge from "./images/badges/facebook-account-badge.png";
import twitterAccountBadge from "./images/badges/twitter-account-badge.png";
import twitter1mFollowersBadge from "./images/badges/twitter-1mfollowers-badge.png";
import twitter100kFollowersBadge from "./images/badges/twitter-100kfollowers-badge.png";
import twitter10kFollowersBadge from "./images/badges/twitter-10kfollowers-badge.png";
import twitter1kFollowersBadge from "./images/badges/twitter-1kfollowers-badge.png";

export const MOCK_IDENTITY = "ryan-demo.vda";

function checkMockDataEnabled() {
  if (!config.isMockDataEnabled) {
    throw new Error("Mock data is not enabled");
  }
}

export const getMockIdentityInfo = async (): Promise<IdentityInfo> => {
  checkMockDataEnabled();
  return Promise.resolve(identityInfo);
};

export const getMockProfileData = async (): Promise<ProfileData> => {
  checkMockDataEnabled();
  return Promise.resolve(profileData);
};

export const getMockNfts = async (): Promise<NftToken[]> => {
  checkMockDataEnabled();
  return Promise.resolve(nfts);
};

const identityInfo: IdentityInfo = {
  did: "did:vda:0x4F984180236a323d90346e36D848792b26b4049E",
  avatarUri: avatarImage,
  name: "Ryan Kris",
  username: MOCK_IDENTITY,
  description:
    "Cofounder @ Verida. Building web3 identity and personal data storage",
};

const profileData: ProfileData = {
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
      platform: Platforms.TWITTER,
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
  featuredAssets: [
    {
      chainId: Chains.POLYGON,
      ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
      contractAddress: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD271",
      tokenId: "verida-identity",
      order: 1,
    },
    {
      chainId: Chains.POLYGON,
      ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
      contractAddress: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD271",
      tokenId: "twitter-account",
      order: 2,
    },
    {
      chainId: Chains.POLYGON,
      ownerAddress: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
      contractAddress: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD271",
      tokenId: "twitter-1mfollowers",
      order: 3,
    },
    {
      chainId: Chains.ETHEREUM_GOERLI,
      contractAddress: "0x2e60f8f0ded025c41454e151f75c300fba3bc62b",
      tokenId: "3",
      ownerAddress: "0xff71512c84096f55cdf5c5f3d3c6ace99b56fef0",
      order: 4,
    },
  ],
};

const nfts: NftToken[] = [
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD271",
    token_id: "verida-identity",
    name: "Verida Badges",
    metadata: {
      name: "Verida Identity",
      description: null,
      image: veridaIdentityBadge,
      animation_url: null,
      external_link: null,
      attributes: [
        {
          trait_type: "",
          display_type: "Verida Identity",
          value: "ryan",
        },
      ],
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD271",
    token_id: "twitter-account",
    name: "Verida Badges",
    metadata: {
      name: "Twitter Account",
      description: null,
      image: twitterAccountBadge,
      animation_url: null,
      external_link: null,
      attributes: [
        {
          trait_type: "",
          display_type: "Twitter Account",
          value: "@RyanJKris",
        },
      ],
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD271",
    token_id: "facebook-account",
    name: "Verida Badges",
    metadata: {
      name: "Facebook Account",
      description: null,
      image: facebookAccountBadge,
      animation_url: null,
      external_link: null,
      attributes: [
        {
          trait_type: "",
          display_type: "Facebook Account",
          value: "@ryan.kris",
        },
      ],
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD271",
    token_id: "twitter-1mfollowers",
    name: "Verida Badges",
    metadata: {
      name: "Twitter 1M followers",
      description: null,
      image: twitter1mFollowersBadge,
      animation_url: null,
      external_link: null,
      attributes: [
        {
          trait_type: "",
          display_type: "Twitter followers",
          value: "1M",
        },
      ],
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD271",
    token_id: "twitter-100kfollowers",
    name: "Verida Badges",
    metadata: {
      name: "Twitter 100k followers",
      description: null,
      image: twitter100kFollowersBadge,
      animation_url: null,
      external_link: null,
      attributes: [
        {
          trait_type: "",
          display_type: "Twitter followers",
          value: "100k",
        },
      ],
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD271",
    token_id: "twitter-10kfollowers",
    name: "Verida Badges",
    metadata: {
      name: "Twitter 10k followers",
      description: null,
      image: twitter10kFollowersBadge,
      animation_url: null,
      external_link: null,
      attributes: [
        {
          trait_type: "",
          display_type: "Twitter followers",
          value: "10k",
        },
      ],
    },
    isSBT: true,
  },
  {
    chain_id: Chains.POLYGON,
    owner_address: "0x378e4BCb49EE4B270A4808EA1Fc39B26BD89336E",
    token_address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD271",
    token_id: "twitter-1kfollowers",
    name: "Verida Badges",
    metadata: {
      name: "Twitter 1k followers",
      description: null,
      image: twitter1kFollowersBadge,
      animation_url: null,
      external_link: null,
      attributes: [
        {
          trait_type: "",
          display_type: "Twitter followers",
          value: "1k",
        },
      ],
    },
    isSBT: true,
  },
];
