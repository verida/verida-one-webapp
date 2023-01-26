import React from "react";
import { RedirectionCard } from "components/molecules";
import { useIntl } from "react-intl";

export const NoProfileFoundView: React.FunctionComponent = () => {
  const i18n = useIntl();

  const redirectionCardTitle = i18n.formatMessage({
    id: "NoProfileFoundView.redirectionCardTitle",
    defaultMessage: "Profile not found",
    description:
      "The title of the redirection card indicating that the profile could not be found",
  });

  const redirectCardMessage = i18n.formatMessage({
    id: "NoProfileFoundView.redirectCardMessage",
    defaultMessage: "The profile you're looking for doesn't exist",
    description:
      "Message from the redirection card indicating that the profile could not be found",
  });

  const redirectionCardButtonlabel = i18n.formatMessage({
    id: "NoProfileFoundView.redirectionCardButtonlabel",
    defaultMessage: "Verida One Home",
    description: "The label of the redirection link button to the home page",
  });

  return (
    <div className="flex flex-grow flex-col">
      <RedirectionCard
        redirectPath="/"
        title={redirectionCardTitle}
        message={redirectCardMessage}
        buttonLabel={redirectionCardButtonlabel}
        className="flex flex-grow flex-col justify-center"
      />
    </div>
  );
};
