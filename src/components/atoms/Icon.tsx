import React from "react";
import {
  Copy,
  Check,
  Search,
  More,
  Right,
  User,
  Close,
  ArrowRight,
  ArrowLeft,
  ErrorPicture,
} from "@icon-park/react";
import { ReactComponent as Share } from "assets/icons/share.svg";
import { ReactComponent as Outside } from "assets/icons/outside.svg";
import { ReactComponent as VeridaTick } from "assets/icons/verida_tick.svg";

// Chains
import { ReactComponent as Algorand } from "assets/logos/chains/algorand.svg";
import { ReactComponent as Ethereum } from "assets/logos/chains/ethereum.svg";
import { ReactComponent as Near } from "assets/logos/chains/near.svg";
import { ReactComponent as Polygon } from "assets/logos/chains/polygon.svg";

// Platforms
import { ReactComponent as Discord } from "assets/logos/platforms/discord.svg";
import { ReactComponent as Email } from "assets/logos/platforms/email.svg";
import { ReactComponent as Facebook } from "assets/logos/platforms/facebook.svg";
import { ReactComponent as GitHub } from "assets/logos/platforms/github.svg";
import { ReactComponent as Instagram } from "assets/logos/platforms/instagram.svg";
import { ReactComponent as LinkedIn } from "assets/logos/platforms/linkedin.svg";
import { ReactComponent as Medium } from "assets/logos/platforms/medium.svg";
import { ReactComponent as Reddit } from "assets/logos/platforms/reddit.svg";
import { ReactComponent as Telegram } from "assets/logos/platforms/telegram.svg";
import { ReactComponent as Twitter } from "assets/logos/platforms/twitter.svg";
import { ReactComponent as Whatsapp } from "assets/logos/platforms/whatsapp.svg";
import { ReactComponent as Youtube } from "assets/logos/platforms/youtube.svg";

// TODO: Need a variant for the logos (coloured, white, black, ...)

export type GenericIconType =
  | "user"
  | "check"
  | "close"
  | "share"
  | "copy"
  | "outside"
  | "search"
  | "more"
  | "error-picture"
  | "chevron-right"
  | "arrow-right"
  | "arrow-left"
  | "verida-tick";
export type PlatformIconType =
  | "platform-discord"
  | "platform-email"
  | "platform-facebook"
  | "platform-github"
  | "platform-instagram"
  | "platform-linkedin"
  | "platform-medium"
  | "platform-reddit"
  | "platform-telegram"
  | "platform-twitter"
  | "platform-whatsapp"
  | "platform-youtube";
export type ChainIconType =
  | "chain-algorand"
  | "chain-ethereum"
  | "chain-near"
  | "chain-polygon";
export type IconType = GenericIconType | PlatformIconType | ChainIconType;

type IconProps = {
  type: IconType;
  size?: number | string;
} & Omit<React.ComponentPropsWithoutRef<typeof IconContainer>, "children">;

export const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { type, size = 20, ...otherProps } = props;

  switch (type) {
    case "share":
      return (
        <IconContainer {...otherProps}>
          <Share height={size} width={size} />
        </IconContainer>
      );
    case "outside":
      return (
        <IconContainer {...otherProps}>
          <Outside height={size} width={size} />
        </IconContainer>
      );
    case "user":
      return <User size={size} {...otherProps} />;
    case "copy":
      return <Copy size={size} {...otherProps} />;
    case "close":
      return <Close size={size} {...otherProps} />;
    case "check":
      return <Check size={size} {...otherProps} />;
    case "search":
      return <Search size={size} {...otherProps} />;
    case "error-picture":
      return <ErrorPicture size={size} {...otherProps} />;
    case "chevron-right":
      return <Right size={size} {...otherProps} />;
    case "arrow-right":
      return <ArrowRight size={size} {...otherProps} />;
    case "arrow-left":
      return <ArrowLeft size={size} {...otherProps} />;
    case "more":
      return <More size={size} {...otherProps} />;
    case "verida-tick":
      return (
        <IconContainer {...otherProps}>
          <VeridaTick height={size} width={size} />
        </IconContainer>
      );

    // Chains
    case "chain-algorand":
      return (
        <IconContainer {...otherProps}>
          <Algorand height={size} width={size} />
        </IconContainer>
      );
    case "chain-ethereum":
      return (
        <IconContainer {...otherProps}>
          <Ethereum height={size} width={size} />
        </IconContainer>
      );
    case "chain-near":
      return (
        <IconContainer {...otherProps}>
          <Near height={size} width={size} />
        </IconContainer>
      );
    case "chain-polygon":
      return (
        <IconContainer {...otherProps}>
          <Polygon height={size} width={size} />
        </IconContainer>
      );

    // Platforms
    case "platform-discord":
      return (
        <IconContainer {...otherProps}>
          <Discord height={size} width={size} />
        </IconContainer>
      );
    case "platform-email":
      return (
        <IconContainer {...otherProps}>
          <Email height={size} width={size} />
        </IconContainer>
      );
    case "platform-facebook":
      return (
        <IconContainer {...otherProps}>
          <Facebook height={size} width={size} />
        </IconContainer>
      );
    case "platform-github":
      return (
        <IconContainer {...otherProps}>
          <GitHub height={size} width={size} />
        </IconContainer>
      );
    case "platform-instagram":
      return (
        <IconContainer {...otherProps}>
          <Instagram height={size} width={size} />
        </IconContainer>
      );
    case "platform-linkedin":
      return (
        <IconContainer {...otherProps}>
          <LinkedIn height={size} width={size} />
        </IconContainer>
      );
    case "platform-medium":
      return (
        <IconContainer {...otherProps}>
          <Medium height={size} width={size} />
        </IconContainer>
      );
    case "platform-reddit":
      return (
        <IconContainer {...otherProps}>
          <Reddit height={size} width={size} />
        </IconContainer>
      );
    case "platform-telegram":
      return (
        <IconContainer {...otherProps}>
          <Telegram height={size} width={size} />
        </IconContainer>
      );
    case "platform-twitter":
      return (
        <IconContainer {...otherProps}>
          <Twitter height={size} width={size} />
        </IconContainer>
      );
    case "platform-whatsapp":
      return (
        <IconContainer {...otherProps}>
          <Whatsapp height={size} width={size} />
        </IconContainer>
      );
    case "platform-youtube":
      return (
        <IconContainer {...otherProps}>
          <Youtube height={size} width={size} />
        </IconContainer>
      );

    default:
      throw new Error("A supported type must be defined for the icon");
  }
};

const IconContainer: React.FunctionComponent<
  React.ComponentPropsWithoutRef<"span">
> = (props) => {
  const { children, ...otherProps } = props;
  return <span {...otherProps}>{children}</span>;
};
