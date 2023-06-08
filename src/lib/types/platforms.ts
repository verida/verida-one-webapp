import { PlatformIconType } from "components/atoms";

// TODO: Replace enum
/** Enum for the categories of Platform Links  */
export enum PlatformLinkCategories {
  SOCIAL = "social",
}

// TODO: Replace enum
/** TODO: write doc */
export enum Platforms {
  DISCORD = "discord",
  FACEBOOK = "facebook",
  GITHUB = "github",
  INSTAGRAM = "instagram",
  LINKEDIN = "linkedin",
  MEDIUM = "medium",
  REDDIT = "reddit",
  TELEGRAM = "telegram",
  TWITTER = "twitter",
  WHATSAPP = "whatsapp",
  YOUTUBE = "youtube",
}

/** TODO: write doc */
export type PlatformDefinition = {
  platformId: Platforms;
  label: string;
  iconId: PlatformIconType;
};
