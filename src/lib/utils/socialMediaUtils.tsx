import React from "react";
import { Icon } from "components/atoms";
import { SocialMedia } from "lib/constants";

export const getSocialMediaLogo = (
  socialMedia: SocialMedia,
  size?: number
): React.ReactNode => {
  // TODO: introduce variants such as coloured, white, black, ...

  switch (socialMedia) {
    case SocialMedia.TWITTER:
      return <Icon type="social-twitter" size={size} />;
    case SocialMedia.DISCORD:
      return <Icon type="social-discord" size={size} />;
    case SocialMedia.LINKEDIN: // TODO: Provide an icon for LinkedIn
    default:
      return null;
  }
};
