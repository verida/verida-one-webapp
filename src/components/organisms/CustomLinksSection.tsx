import React from "react";
import { useIntl } from "react-intl";
import { CustomLink, ProfileSectionContainer } from "components/molecules";
import { CustomLink as CustomLinkType } from "lib/types";

type LinkSectionProps = {
  links: CustomLinkType[];
};

/** Section for the Profile page redenring the list of custom links */
export const CustomLinksSection: React.FC<LinkSectionProps> = (props) => {
  const { links } = props;

  const i18n = useIntl();

  if (links.length === 0) {
    return null;
  }

  const sectionTitle = i18n.formatMessage({
    id: "CustomLinksSection.sectionTitle",
    description: "Title of the 'Links' section in the 'Profile' page",
    defaultMessage: "Links",
  });

  return (
    <ProfileSectionContainer title={sectionTitle}>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.url}>
            <CustomLink link={link} />
          </li>
        ))}
      </ul>
    </ProfileSectionContainer>
  );
};
