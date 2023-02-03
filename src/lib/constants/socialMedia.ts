export enum SocialMedia {
  TWITTER = "twitter",
  DISCORD = "discord",
  TELEGRAM = "telegram",
  WHATSAPP = "whatsapp",
  FACEBOOK = "facebook",
  EMAIL = "email", // Remove from social media types ?
}

export const socialMediaLabels = {
  [SocialMedia.TWITTER]: "Twitter",
  [SocialMedia.DISCORD]: "Discord",
  [SocialMedia.TELEGRAM]: "Telegram",
  [SocialMedia.WHATSAPP]: "Whatsapp",
  [SocialMedia.FACEBOOK]: "Facebook",
  [SocialMedia.EMAIL]: "Email", // Remove from social media types ?
};

export const TELEGRAM_URL = "https://telegram.me";
export const WHATSAPP_URL = "https://api.whatsapp.com";
export const TWITTER_URL = "https://twitter.com";
export const FACEBOOK_URL = "https://facebook.com";
export const EMAIL_URL = "mailto:";
