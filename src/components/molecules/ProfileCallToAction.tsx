import React from "react";
import { ButtonLink, Icon } from "components/atoms";
import { useIntl } from "react-intl";
import { CTA_CREATE_OWN_PROFILE_URL } from "lib/constants";

export const ProfileCallToAction: React.FunctionComponent = () => {
  const i18n = useIntl();

  const createOwnProfileMessage = i18n.formatMessage({
    id: "ProfileCallToAction.createOwnProfileMessage",
    description: "Call to action for viewer to create their own profile",
    defaultMessage: "Create your own profile",
  });

  return (
    <div className="flex items-center justify-center space-x-1">
      <ButtonLink
        variant="text"
        url={CTA_CREATE_OWN_PROFILE_URL}
        target="_blank"
        rel="noopener"
        className="font-semibold"
      >
        <span>{createOwnProfileMessage}</span>
        <Icon type="chevron-right" />
      </ButtonLink>
    </div>
  );
};
