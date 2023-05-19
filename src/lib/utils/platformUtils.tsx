import React from "react";
import { Icon } from "components/atoms";
import { Platforms, PlatformDefinition } from "lib/types";

export const socialPlatformDefinitions: Record<Platforms, PlatformDefinition> =
  {
    [Platforms.DISCORD]: {
      platformId: Platforms.DISCORD,
      label: "Discord",
      iconId: "platform-discord",
    },
    [Platforms.FACEBOOK]: {
      platformId: Platforms.FACEBOOK,
      label: "Facebook",
      iconId: "platform-facebook",
    },
    [Platforms.GITHUB]: {
      platformId: Platforms.GITHUB,
      label: "GitHub",
      iconId: "platform-github",
    },
    [Platforms.LINKEDIN]: {
      platformId: Platforms.LINKEDIN,
      label: "LinkedIn",
      iconId: "platform-linkedin",
    },
    [Platforms.INSTAGRAM]: {
      platformId: Platforms.INSTAGRAM,
      label: "Instagram",
      iconId: "platform-instagram",
    },
    [Platforms.TELEGRAM]: {
      platformId: Platforms.TELEGRAM,
      label: "Telegram",
      iconId: "platform-telegram",
    },
    [Platforms.TWITTER]: {
      platformId: Platforms.TWITTER,
      label: "Twitter",
      iconId: "platform-twitter",
    },
    [Platforms.WHATSAPP]: {
      platformId: Platforms.WHATSAPP,
      label: "WhatsApp",
      iconId: "platform-whatsapp",
    },
    [Platforms.YOUTUBE]: {
      platformId: Platforms.YOUTUBE,
      label: "YouTube",
      iconId: "platform-youtube",
    },
  };

export const getPlatformLabel = (socialPlatform: Platforms): string => {
  const label = socialPlatformDefinitions[socialPlatform]?.label;
  if (label === undefined) {
    throw new Error(
      `Social platform not supported${
        socialPlatform ? ` (${socialPlatform as string})` : ""
      }`
    );
  }
  return label;
};

export const getPlatformLogo = (
  socialPlatform: Platforms,
  size?: number | string
): React.ReactNode => {
  const iconId = socialPlatformDefinitions[socialPlatform]?.iconId;
  if (iconId === undefined) {
    throw new Error(
      `Social platform not supported${
        socialPlatform ? ` (${socialPlatform as string})` : ""
      }`
    );
  }
  return <Icon type={iconId} size={size} />;
};
