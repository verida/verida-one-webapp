import React from "react";
import { Icon } from "components/atoms";
import {
  EMAIL_URL,
  FACEBOOK_URL,
  SocialMedia,
  TELEGRAM_URL,
  TWITTER_URL,
  WHATSAPP_URL,
} from "lib/constants";

export const getSocialMediaLogo = (
  socialMedia: SocialMedia,
  size?: number | string
): React.ReactNode => {
  switch (socialMedia) {
    case SocialMedia.TWITTER:
      return <Icon type="social-twitter" size={size} />;
    case SocialMedia.DISCORD:
      return <Icon type="social-discord" size={size} />;
    default:
      throw new Error("Social Media not supported");
  }
};

export const getSocialMediaShareUrl = (
  socialMedia: SocialMedia,
  url: string,
  title: string
): string => {
  switch (socialMedia) {
    case SocialMedia.TWITTER:
      return `${TWITTER_URL}/share?url=${url}&text=${title}`;
    case SocialMedia.FACEBOOK:
      return `${FACEBOOK_URL}/sharer.php?u=${url}&t=${title}`;
    case SocialMedia.TELEGRAM:
      return `${TELEGRAM_URL}/share/?url=${url}&text=${title}`;
    case SocialMedia.WHATSAPP:
      return `${WHATSAPP_URL}/send?text=${title}${url}`;
    case SocialMedia.EMAIL:
      return `${EMAIL_URL}&subject=${title}&body=${url}`;
    default:
      throw new Error("Social Media not supported");
  }
};
