import React from "react";
import { useIntl } from "react-intl";
import { LandingPageSectionContent } from "components/molecules";
import curateContentImage from "assets/landingpage/curate-content-phone.png";

export const CurateContentSection: React.FunctionComponent<
  React.ComponentPropsWithRef<"div">
> = ({ ...otherProps }) => {
  const i18n = useIntl();

  const sectionTitle = i18n.formatMessage({
    id: "CurateContentSection.sectionTitle",
    defaultMessage: "Curate your content",
  });

  const sectionMessage = i18n.formatMessage({
    id: "CurateContentSection.sectionMessage",
    defaultMessage:
      "Connect your socials, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.",
  });

  const sectionButtonLabel = i18n.formatMessage({
    id: "CurateContentSection.sectionButtonLabel",
    defaultMessage: "Get Started",
  });

  return (
    <section {...otherProps}>
      <LandingPageSectionContent
        title={sectionTitle}
        message={sectionMessage}
        buttonLabel={sectionButtonLabel}
        bgImageClass={"bg-curate-content"}
        contentImage={curateContentImage}
      />
    </section>
  );
};
