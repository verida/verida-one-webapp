import React from "react";
import { PageWrapper, RedirectionCard } from "components/molecules";
import { useIntl } from "react-intl";

export const NoProfileFoundView: React.FunctionComponent = () => {
  const i18n = useIntl();

  const redirectionCardTitle = i18n.formatMessage({
    id: "NotProfileFoundView.redirectionCardTitle",
    defaultMessage: "Page not found",
    description:
      "The title of the redirection card indicating that the profile page could not be found",
  });

  const redirectCardMessage = i18n.formatMessage({
    id: "NotProfileFoundView.redirectCardMessage",
    defaultMessage: "The page you're looking for doesn't exist",
    description:
      "Message from the redirection card indicating that the profile page could not be found",
  });

  const redirectionCardButtonlabel = i18n.formatMessage({
    id: "NotProfileFoundView.redirectionCardButtonlabel",
    defaultMessage: "Verida One Home",
    description: "The label of the redirection link button to the home page",
  });

  return (
    <PageWrapper hideBackClickIcon={true}>
      <RedirectionCard
        redirectPath="/"
        title={redirectionCardTitle}
        message={redirectCardMessage}
        buttonLabel={redirectionCardButtonlabel}
        className="flex flex-grow flex-col justify-center"
      />
    </PageWrapper>
  );
};
