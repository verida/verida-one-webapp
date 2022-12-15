import React from "react";
import {
  ActivitySection,
  BadgeSection,
  CollectibleSection,
  FeaturedSection,
  LinkSection,
  ProfileSection,
  SocialSection,
  WalletSection,
} from "components/organisms";
import { Instagram, Right, Twitter, Telegram } from "@icon-park/react";
import { ReactComponent as DiscordIcon } from "assets/icons/discord.svg";
import { ReactComponent as GithubIcon } from "assets/icons/github.svg";
import { ReactComponent as SolanaIcon } from "assets/icons/networks/solana_icon.svg";
import { ReactComponent as ETHIcon } from "assets/icons/networks/ethereum_icon.svg";
import defaultAvatar from "assets/photo.png";
import activityBgImage from "assets/post_image.png";
import nftImage from "assets/nft_image.png";

const collectiblesList = [
  {
    title: "Moonbirds",
    tagNumber: "Keeper #8697",
    price: "0.0074",
    tokenSymbol: "SOL",
    image: nftImage,
    icon: <SolanaIcon />,
  },
  {
    title: "Keepers",
    tagNumber: "#8374",
    price: "0.0074",
    tokenSymbol: "SOL",
    image: nftImage,
    icon: <SolanaIcon />,
  },
];

const socialsData = [
  {
    icon: <Instagram />,
    connected: true,
  },
  {
    icon: <Twitter />,
    connected: true,
  },
  {
    icon: <DiscordIcon />,
    connected: true,
  },
  {
    icon: <GithubIcon />,
    connected: true,
  },
  {
    icon: <Telegram />,
    connected: false,
  },
];

const nftList = [
  {
    price: "0.44 ",
    symbol: "SOL",
    title: "Keepers",
    tagNumber: "#8374",
    image: nftImage,
  },
  {
    price: "0.44 ",
    symbol: "SOL",
    title: "Keepers",
    tagNumber: "#8374",
    image: nftImage,
  },
  {
    price: "0.8 ",
    symbol: "ETH",
    title: "Keepers",
    tagNumber: "#8374",
    image: nftImage,
  },
  {
    price: "3.2 ",
    symbol: "ETH",
    title: "Keepers",
    tagNumber: "#8374",
    image: nftImage,
  },
];

const linksList = [
  {
    title: "Verida website",
    link: "/",
  },
  {
    title: "Download Vault",
    link: "/",
  },
  {
    title: "Merch shop",
    link: "/",
  },
  {
    title: "Book a call with me ",
    link: "/",
  },
];

const defaultProfile = {
  avatar: defaultAvatar,
  userName: "@cmcWebCode",
  name: "Mike Dev",
  timeStamp: "2 hours",
};

const walletListData = [
  {
    address: "0x23qws4e...",
    icon: <ETHIcon />,
    link: "/",
    connected: true,
  },
  {
    address: "0x23qws4e...",
    icon: <ETHIcon />,
    link: "/",
    connected: true,
  },
  {
    address: "0x23qws4e...",
    icon: <ETHIcon />,
    link: "/",
    connected: true,
  },
];

const activityList = [
  {
    profile: {
      avatar: defaultAvatar,
      name: "@cmcWebCode",
      timeStamp: "2 hours ago",
    },

    image: activityBgImage,
    bodyText: `One of my minor gripes with many mainstream media publications is how unwilling they are to link directly to primary sources.`,
    connected: true,
    icon: <Twitter />,
  },
  {
    profile: {
      avatar: defaultAvatar,
      name: "@cmcWebCode",
      timeStamp: "2 hours ago",
    },
    bodyText: `One of my minor gripes with many mainstream media publications is how unwilling they are to link directly to primary sources.`,
    connected: true,
    icon: <Instagram />,
  },
  {
    profile: {
      avatar: defaultAvatar,
      name: "@cmcWebCode",
      timeStamp: "2 hours ago",
    },
    image: activityBgImage,
    bodyText: `One of my minor gripes with many mainstream media publications is how unwilling they are to link directly to primary sources.`,
    connected: true,
    icon: <Twitter />,
  },
];

type Data = {
  connected: boolean;
  icon: React.ReactElement;
};

export const ProfileView: React.FC = () => {
  const text = "Create your own profile";

  return (
    <div>
      <div className="mb-7 mt-[17px]">
        <ProfileSection
          email="johndoe@gmail.com"
          profileInfo={defaultProfile}
        />
      </div>
      <div className="space-y-[46px]">
        <FeaturedSection data={nftList} />
        <SocialSection data={socialsData as Data[]} />
        <CollectibleSection data={collectiblesList} />
        <BadgeSection />
        <LinkSection data={linksList} />
        <WalletSection data={walletListData} />
        <ActivitySection data={activityList} />
        <div className="my-10 flex items-center justify-center space-x-1">
          <h5>{text}</h5>
          <Right />
        </div>
      </div>
    </div>
  );
};
