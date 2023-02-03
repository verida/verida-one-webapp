import React from "react";
import { Icon } from "components/atoms";
import {
  EMAIL_URL,
  FACEBOOK_URL,
  SocialMedia,
  socialMediaLabels,
  TELEGRAM_URL,
  TWITTER_URL,
  WHATSAPP_URL,
} from "lib/constants";

export const getSocialMediaLabel = (socialMedia: SocialMedia): string => {
  return socialMediaLabels[socialMedia];
};

export const getSocialMediaLogo = (
  socialMedia: SocialMedia,
  size?: number | string
): React.ReactNode => {
  switch (socialMedia) {
    case SocialMedia.DISCORD:
      return <Icon type="social-discord" size={size} />;
    case SocialMedia.EMAIL:
      return <Icon type="social-email" size={size} />;
    case SocialMedia.FACEBOOK:
      return <Icon type="social-messenger" size={size} />;
    case SocialMedia.TELEGRAM:
      return <Icon type="social-telegram" size={size} />;
    case SocialMedia.TWITTER:
      return <Icon type="social-twitter" size={size} />;
    case SocialMedia.WHATSAPP:
      return <Icon type="social-whatsapp" size={size} />;
    default:
      throw new Error("Social Media not supported");
  }
};

export const getSocialMediaShareUrl = (
  socialMedia: SocialMedia,
  content: string,
  title: string
): string => {
  const encodedTitle = encodeURI(title);
  const encodedContent = encodeURI(content);

  const combinedText = `${encodedTitle}%0A%0A${encodedContent}`;

  switch (socialMedia) {
    case SocialMedia.TWITTER:
      return `${TWITTER_URL}/intent/tweet?text=${combinedText}`;
    case SocialMedia.FACEBOOK:
      return `${FACEBOOK_URL}/sharer/sharer.php?u=${encodedContent}&t=${encodedTitle}`;
    case SocialMedia.TELEGRAM:
      return `${TELEGRAM_URL}/share/?url=${encodedContent}&text=${encodedTitle}`;
    case SocialMedia.WHATSAPP:
      return `${WHATSAPP_URL}/send?phone=&text=${combinedText}`;
    case SocialMedia.EMAIL:
      return `${EMAIL_URL}?to=&subject=${encodedTitle}&body=${encodedContent}`;
    default:
      throw new Error("Social Media not supported");
  }
};
