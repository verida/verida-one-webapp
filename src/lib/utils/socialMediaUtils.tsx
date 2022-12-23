import React from "react";
import { Icon } from "components/atoms";
import { SocialMedia } from "lib/constants";

export const getSocialMediaLogo = (
  socialMedia: SocialMedia,
  size?: number
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
