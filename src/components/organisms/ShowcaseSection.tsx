import React from "react";
import { useIntl } from "react-intl";
import { LandingPageSectionContent } from "components/molecules";
import showCasePhonesImage from "assets/landingpage/showcase-phones.png";

export const ShowcaseSection: React.FunctionComponent<
  React.ComponentPropsWithRef<"div">
> = ({ ...otherProps }) => {
  const i18n = useIntl();

  const sectionTitle = i18n.formatMessage({
    id: "ShowcaseSection.sectionTitle",
    defaultMessage: "Showcase yourself",
  });

  const sectionMessage = i18n.formatMessage({
    id: "ShowcaseSection.sectionMessage",
    defaultMessage:
      "Connect your socials, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.",
  });

  const sectionButtonLabel = i18n.formatMessage({
    id: "ShowcaseSection.sectionButtonLabel",
    defaultMessage: "Get Started",
  });

  return (
    <section {...otherProps}>
      <LandingPageSectionContent
        bgImageClass="bg-showcase"
        title={sectionTitle}
        message={sectionMessage}
        buttonLabel={sectionButtonLabel}
        contentImage={showCasePhonesImage}
      />
    </section>
  );
};
