import React from "react";
import {
  Copy,
  Check,
  Twitter,
  Search,
  More,
  Right,
  User,
  Close,
  ArrowRight,
  ArrowLeft,
  Telegram,
} from "@icon-park/react";
import { ReactComponent as Share } from "assets/icons/share.svg";
import { ReactComponent as Outside } from "assets/icons/outside.svg";
import { ReactComponent as Messenger } from "assets/logos/socialMedia/messenger.svg";
import { ReactComponent as Whatsapp } from "assets/logos/socialMedia/whatsapp.svg";
import { ReactComponent as LinkedIn } from "assets/logos/socialMedia/linkedin.svg";
import { ReactComponent as Mail } from "assets/logos/socialMedia/mail.svg";
import { ReactComponent as VeridaTick } from "assets/icons/verida_tick.svg";
import { ReactComponent as Algorand } from "assets/logos/chains/algorand.svg";
import { ReactComponent as Ethereum } from "assets/logos/chains/ethereum.svg";
import { ReactComponent as Near } from "assets/logos/chains/near.svg";
import { ReactComponent as Polygon } from "assets/logos/chains/polygon.svg";
import { ReactComponent as Discord } from "assets/logos/socialMedia/discord.svg";

// TODO: Need a variant for the logos (coloured, white, black, ...)

type GenericIconType =
  | "user"
  | "check"
  | "close"
  | "share"
  | "copy"
  | "outside"
  | "search"
  | "more"
  | "chevron-right"
  | "arrow-right"
  | "arrow-left"
  | "verida-tick";
type SocialMediaIconType =
  | "social-twitter"
  | "social-discord"
  | "social-telegram"
  | "social-whatsapp"
  | "social-email"
  | "social-messenger"
  | "social-linkedin";
type ChainIconType =
  | "chain-algorand"
  | "chain-ethereum"
  | "chain-near"
  | "chain-polygon";
type IconType = GenericIconType | SocialMediaIconType | ChainIconType;

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
    case "social-discord":
      return (
        <IconContainer {...otherProps}>
          <Discord height={size} width={size} />
        </IconContainer>
      );
    case "social-whatsapp":
      return (
        <IconContainer {...otherProps}>
          <Whatsapp height={size} width={size} />
        </IconContainer>
      );
    case "social-messenger":
      return (
        <IconContainer {...otherProps}>
          <Messenger height={size} width={size} />
        </IconContainer>
      );
    case "social-email":
      return (
        <IconContainer {...otherProps}>
          <Mail height={size} width={size} />
        </IconContainer>
      );
    case "social-linkedin":
      return (
        <IconContainer {...otherProps}>
          <LinkedIn height={size} width={size} />
        </IconContainer>
      );
    case "social-twitter":
      return <Twitter size={size} {...otherProps} />;
    case "social-telegram":
      return <Telegram size={size} {...otherProps} />;

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
