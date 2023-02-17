import React from "react";
import { useIntl } from "react-intl";
import { CustomLink, ProfileSectionWrapper } from "components/molecules";
import { CustomLink as CustomLinkType } from "lib/types";

type LinkSectionProps = {
  links?: CustomLinkType[];
};

/** Section for the Profile page rendering the list of custom links */
export const CustomLinksSection: React.FC<LinkSectionProps> = (props) => {
  const { links } = props;

  const i18n = useIntl();

  if (!links?.length) {
    return null;
  }

  const sectionTitle = i18n.formatMessage({
    id: "CustomLinksSection.sectionTitle",
    description: "Title of the 'Links' section in the 'Profile' page",
    defaultMessage: "Links",
  });

  return (
    <ProfileSectionWrapper title={sectionTitle}>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.url}>
            <CustomLink link={link} />
          </li>
        ))}
      </ul>
    </ProfileSectionWrapper>
  );
};
