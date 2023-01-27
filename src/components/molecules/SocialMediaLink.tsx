import React from "react";
import { SocialMediaLink as SocialMediaLinkType } from "lib/types";
import { Icon, IconButtonLink } from "components/atoms";
import { getSocialMediaLogo } from "lib/utils";

type SocialMediaLinkProps = {
  link: SocialMediaLinkType;
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

export const SocialMediaLink: React.FunctionComponent<SocialMediaLinkProps> = (
  props
) => {
  const { link, ...otherProps } = props;

  const platformIcon = getSocialMediaLogo(link.platform);

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
        {link.verified && (
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
