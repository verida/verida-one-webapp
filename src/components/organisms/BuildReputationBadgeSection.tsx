import React from "react";
import { useIntl } from "react-intl";
import { LandingPageSectionWrapper } from "components/molecules";

export const BuildReputationBadgeSection: React.FunctionComponent<
  React.ComponentPropsWithRef<"div">
> = ({ ...otherProps }) => {
  const i18n = useIntl();

  const sectionTitle = i18n.formatMessage({
    id: "BuildReputationBadgeSection.sectionTitle",
    defaultMessage: "Share your identity",
  });

  const sectionSubTitle = i18n.formatMessage({
    id: "BuildReputationBadgeSection.sectionMessage",
    defaultMessage: "Bring your web2 identities to web3",
  });

  return (
    <section {...otherProps}>
      <div>
        <LandingPageSectionWrapper
          title={sectionTitle}
          subTitle={sectionSubTitle}
        >
          <div></div>
        </LandingPageSectionWrapper>
      </div>
    </section>
  );
};
