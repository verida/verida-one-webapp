// Temporary data for development purpose

import { Chains, SocialMedia } from "lib/constants";
import { Badge, Collectible, IdentityInfo, ProfileData } from "lib/types";
import avatarImage from "./images/6529/avatar-6529.jpg";
import nftFidenza313Image from "./images/6529/nft-fidenza-313.png";
import nftFidenza119Image from "./images/6529/nft-fidenza-119.png";
import nftPunk6529Image from "./images/6529/nft-punk-6529.png";
import nftPunk4372Image from "./images/6529/nft-punk-4372.png";
import nftPunk9082Image from "./images/6529/nft-punk-9082.png";
import nftBAYC4969Image from "./images/6529/nft-bayc-4969.png";
import nftCryptoKitties29Image from "./images/6529/nft-cryptokitties-29.png";
import nftPudgyPenguins2974Image from "./images/6529/nft-pudgypenguins-2974.png";
import nftAzuki2146Image from "./images/6529/nft-azuki-2146.png";

export const identityInfo: IdentityInfo = {
  did: "did:vda:0x4F984180236a323d90346e36D848792b26b4049E",
  avatarUri: avatarImage,
  name: "6529",
  username: "6529.vda",
  description: "NFT collector",
};

export const profileData: ProfileData = {
  customLinks: [
    {
      label: "6529.io",
      url: "https://6529.io/",
      featured: true,
      order: 1,
    },
    {
      label: "6529 Museum District",
      url: "https://oncyber.io/6529om",
      featured: true,
      order: 2,
    },
    {
      label: "Personal collection on OpenSea",
      url: "https://opensea.io/punk6529",
      order: 3,
    },
    {
      label: "6529 Museum on OpenSea",
      url: "https://opensea.io/6529museum",
      order: 4,
    },
    {
      label: "The Memes by 6529 on OpenSea",
      url: "https://opensea.io/collection/thememes6529",
      order: 5,
    },
  ],
  platformLinks: [
    {
      category: "socialMedia",
      platform: SocialMedia.TWITTER,
      accountId: "punk6529",
      url: "https://twitter.com/punk6529",
      verificationProof: {
        type: "",
        proof: "",
      },
      order: 1,
    },
    {
      category: "socialMedia",
      platform: SocialMedia.DISCORD,
      accountId: "om",
      url: "https://discord.com/invite/join-om",
      order: 2,
    },
  ],
  walletAddresses: [
    {
      chainId: Chains.ETHEREUM,
      label: "Personal collection of the 6529 museum",
      address: "0xfD22004806A6846EA67ad883356be810F0428793",
      verificationProof: {
        type: "",
        proof: "",
      },
      order: 1,
    },
    {
      chainId: Chains.ETHEREUM,
      address: "0xc6400A5584db71e41B0E5dFbdC769b54B91256CD",
      verificationProof: {
        type: "",
        proof: "",
      },
      order: 2,
    },
  ],
  featureAssets: [
    {
      chainId: Chains.ETHEREUM,
      contractAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      tokenId: "6529",
      ownerAddress: "0xc6400A5584db71e41B0E5dFbdC769b54B91256CD",
      order: 1,
    },
    {
      chainId: Chains.ETHEREUM,
      contractAddress: "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d",
      tokenId: "29",
      ownerAddress: "0xc6400A5584db71e41B0E5dFbdC769b54B91256CD",
      order: 2,
    },
    {
      chainId: Chains.ETHEREUM,
      contractAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      tokenId: "4372",
      ownerAddress: "0xc6400A5584db71e41B0E5dFbdC769b54B91256CD",
      order: 3,
    },
    {
      chainId: Chains.ETHEREUM,
      contractAddress: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270",
      tokenId: "78000313",
      ownerAddress: "0xc6400A5584db71e41B0E5dFbdC769b54B91256CD",
      order: 4,
    },
  ],
};

export const collectibles: Collectible[] = [
  {
    chain: Chains.ETHEREUM,
    contractAddress: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270",
    tokenId: "78000313",
    collectionLabel: "Fidenza by Tyler Hobbs",
    tokenLabel: "Fidenza #313",
    description:
      "Fidenza is by far my most versatile algorithm to date. Although the program stays focused on structured curves and blocks, the varieties of scale, organization, texture, and color usage it can employ create a wide array of generative possibilities.",
    ownerAddress: "0xc6400A5584db71e41B0E5dFbdC769b54B91256CD",
    media: nftFidenza313Image,
    priceUnit: "ETH",
    floorPrice: 1000,
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
    tokenId: "6529",
    collectionLabel: "CryptoPunks",
    tokenLabel: "CryptoPunk #6529",
    ownerAddress: "0xc6400A5584db71e41B0E5dFbdC769b54B91256CD",
    media: nftPunk6529Image,
    priceUnit: "ETH",
    floorPrice: 99,
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    tokenId: "4969",
    collectionLabel: "Bored Ape Yacht Club",
    tokenLabel: "#4969",
    ownerAddress: "0xc6400A5584db71e41B0E5dFbdC769b54B91256CD",
    media: nftBAYC4969Image,
    priceUnit: "ETH",
    floorPrice: 70,
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d",
    tokenId: "29",
    collectionLabel: "CryptoKitties",
    tokenLabel: "Founder Cat #29",
    description:
      "Shalom! I'm Founder Cat #29. I enjoy hitting on yo' man, fighting the patriarchy, and riding unicorns. When no one's home, I invite my pals over and we listen to Rihanna. I look forward to chasing string with you.",
    ownerAddress: "0xc6400A5584db71e41B0E5dFbdC769b54B91256CD",
    media: nftCryptoKitties29Image,
    priceUnit: "ETH",
    floorPrice: 100,
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
    tokenId: "4372",
    collectionLabel: "CryptoPunks",
    tokenLabel: "CryptoPunk #4372",
    ownerAddress: "0xc6400A5584db71e41B0E5dFbdC769b54B91256CD",
    media: nftPunk4372Image,
    priceUnit: "ETH",
    floorPrice: 44,
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270",
    tokenId: "78000119",
    collectionLabel: "Fidenza by Tyler Hobbs",
    tokenLabel: "Fidenza #119",
    description:
      "Fidenza is by far my most versatile algorithm to date. Although the program stays focused on structured curves and blocks, the varieties of scale, organization, texture, and color usage it can employ create a wide array of generative possibilities.",
    ownerAddress: "0xc6400A5584db71e41B0E5dFbdC769b54B91256CD",
    media: nftFidenza119Image,
    priceUnit: "ETH",
    floorPrice: 55,
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8",
    tokenId: "2974",
    collectionLabel: "Pudgy Penguins",
    tokenLabel: "Pudgy Penguin #2974",
    description:
      "A collection 8888 Cute Chubby Pudgy Penquins sliding around on the freezing ETH blockchain.",
    ownerAddress: "0xc6400A5584db71e41B0E5dFbdC769b54B91256CD",
    media: nftPudgyPenguins2974Image,
    priceUnit: "ETH",
    floorPrice: 25,
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "0xED5AF388653567Af2F388E6224dC7C4b3241C544",
    tokenId: "2146",
    collectionLabel: "Azuki",
    tokenLabel: "Azuki #2146",
    ownerAddress: "0xc6400A5584db71e41B0E5dFbdC769b54B91256CD",
    media: nftAzuki2146Image,
    priceUnit: "ETH",
    floorPrice: 18.99,
  },
  {
    chain: Chains.ETHEREUM,
    contractAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
    tokenId: "9082",
    collectionLabel: "CryptoPunks",
    tokenLabel: "CryptoPunk #9082",
    ownerAddress: "0xc6400A5584db71e41B0E5dFbdC769b54B91256CD",
    media: nftPunk9082Image,
    priceUnit: "ETH",
    floorPrice: 39.95,
  },
];

export const badges: Badge[] = [];
