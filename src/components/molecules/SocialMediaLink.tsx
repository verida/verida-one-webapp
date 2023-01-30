import React from "react";
import { PlatformLink } from "lib/types";
import { Icon, IconButtonLink } from "components/atoms";
import { getSocialMediaLogo } from "lib/utils";

type SocialMediaLinkProps = {
  link: PlatformLink;
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

export const SocialMediaLink: React.FunctionComponent<SocialMediaLinkProps> = (
  props
) => {
  const { link, ...otherProps } = props;

  const platformIcon = getSocialMediaLogo(link.platform);

  // TODO: Consider verifying the proof rather than checking it exists.
  return (
    <div {...otherProps}>
      <div className="relative">
        <IconButtonLink
          url={link.url}
          icon={platformIcon}
          shape="circle"
          size="large"
          target="_blank"
          rel="noopener"
        />
        {link.verificationProof?.proof && (
          <Icon
            type="verida-tick"
            size={16}
            className="absolute bottom-0 right-0"
          />
        )}
      </div>
    </div>
  );
};
