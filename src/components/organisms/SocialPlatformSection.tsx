import React from "react";
import { useIntl } from "react-intl";
import { PlatformLink as PlatformLinkType } from "lib/types";
import { ProfileSectionWrapper, PlatformLink } from "components/molecules";

type SocialPlatformSectionProps = {
  socialPlatformLinks?: PlatformLinkType[];
};

/** Section for the Profile page rendering the list of Social Media links */
export const SocialPlatformSection: React.FC<SocialPlatformSectionProps> = (
  props
) => {
  const { socialPlatformLinks } = props;

  const i18n = useIntl();

  if (!socialPlatformLinks?.length) {
    return null;
  }

  const sectionTitle = i18n.formatMessage({
    id: "SocialPlatformSection.sectionTitle",
    description: "Title of the 'Socials' section in the 'Profile' page",
    defaultMessage: "Socials",
  });

  return (
    <ProfileSectionWrapper title={sectionTitle}>
      <ul className="flex flex-wrap gap-3">
        {socialPlatformLinks.map((link) => (
          <li key={link.url}>
            <PlatformLink link={link} />
          </li>
        ))}
      </ul>
    </ProfileSectionWrapper>
  );
};
