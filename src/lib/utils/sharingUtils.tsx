import React from "react";
import { Icon } from "components/atoms";
import { SharingPlatform, SharingPlatformDefinition } from "lib/types";
import { SHARING_PLATFORMS } from "lib/constants";

/** TODO: Write doc */
export const sharingPlatformDefinitions: Record<
  SharingPlatform,
  SharingPlatformDefinition
> = {
  [SHARING_PLATFORMS.TWITTER]: {
    platformId: SHARING_PLATFORMS.TWITTER,
    label: "Twitter",
    iconId: "platform-twitter",
    getUrl: (content: string, title: string): string => {
      const combinedText = `${encodeURI(title)}%0A%0A${encodeURI(content)}`;
      return `https://twitter.com/intent/tweet?text=${combinedText}`;
    },
  },
  [SHARING_PLATFORMS.TELEGRAM]: {
    platformId: SHARING_PLATFORMS.TELEGRAM,
    label: "Telegram",
    iconId: "platform-telegram",
    getUrl: (content: string, title: string): string => {
      return `https://telegram.me/share/?url=${encodeURI(
        content
      )}&text=${encodeURI(title)}`;
    },
  },
  [SHARING_PLATFORMS.WHATSAPP]: {
    platformId: SHARING_PLATFORMS.WHATSAPP,
    label: "WhatsApp",
    iconId: "platform-whatsapp",
    getUrl: (content: string, title: string): string => {
      const combinedText = `${encodeURI(title)}%0A%0A${encodeURI(content)}`;
      return `https://api.whatsapp.com/send?phone=&text=${combinedText}`;
    },
  },
  [SHARING_PLATFORMS.EMAIL]: {
    platformId: SHARING_PLATFORMS.EMAIL,
    label: "Email",
    iconId: "platform-email",
    getUrl: (content: string, title: string): string => {
      return `mailto:?to=&subject=${encodeURI(title)}&body=${encodeURI(
        content
      )}`;
    },
  },
};

/** TODO: Write doc */
export const getSharingPlatformLogo = (
  socialPlatform: SharingPlatform,
  size?: number | string
): React.ReactNode => {
  const iconId = sharingPlatformDefinitions[socialPlatform]?.iconId;
  if (iconId === undefined) {
    throw new Error(
      `Social platform not supported${
        socialPlatform ? ` (${socialPlatform as string})` : ""
      }`
    );
  }
  return <Icon type={iconId} size={size} />;
};
