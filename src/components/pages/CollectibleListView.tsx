import React from "react";
import { PageWrapper, RedirectionCard } from "components/molecules";
import { CollectibleGrid } from "components/organisms";
import { useCollectibles, useProfileData } from "lib/hooks";
import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";

export const CollectibleListView: React.FunctionComponent = () => {
  const i18n = useIntl();
  const { identity } = useParams();

  const { data: profileData } = useProfileData(identity);
  const walletAddresses = profileData?.walletAddresses;
  const {
    data: collectibles,
    isLoading,
    isError,
  } = useCollectibles(walletAddresses);

  const redirectPath = identity ? `/${identity}` : `/`;

  const redirectionCardButtonLabel = i18n.formatMessage({
    id: "CollectibleListView.redirectionCardButtonLabel",
    description: "Label of the redirection link to go to the Profile poage",
    defaultMessage: "Go to profile",
  });

  const redirectionCardTitle = i18n.formatMessage({
    id: "CollectibleListView.redirectionCardTitle",
    defaultMessage: "It's empty here",
    description:
      "Title of the redirection card indicating the list of collectibles is empty.",
  });

  const redirectionCardMessage = i18n.formatMessage({
    id: "CollectibleListView.redirectionCardMessage",
    defaultMessage: "There are no collectibles to see",
    description:
      "Message of the redirection card indicating the list of collectibles is empty.",
  });

  const pageTitle = i18n.formatMessage({
    id: "CollectibleListView.pageTitle",
    description: "Title of the 'Collectibles' page",
    defaultMessage: "Collectibles",
  });

  if (collectibles || isLoading) {
    return (
      <PageWrapper title={pageTitle} badgeValue={collectibles?.length}>
        {collectibles?.length || isLoading ? (
          <CollectibleGrid className="pt-2" collectibles={collectibles} />
        ) : (
          <RedirectionCard
            redirectPath={redirectPath}
            title={redirectionCardTitle}
            message={redirectionCardMessage}
            buttonLabel={redirectionCardButtonLabel}
            className="flex flex-grow flex-col justify-center"
          />
        )}
      </PageWrapper>
    );
  }

  if (isError) {
    // TODO: Handle depending on error type
    return (
      <PageWrapper title={pageTitle} badgeValue={0}>
        <RedirectionCard
          redirectPath={redirectPath}
          title={redirectionCardTitle}
          message={redirectionCardMessage}
          buttonLabel={redirectionCardButtonLabel}
          className="flex flex-grow flex-col justify-center"
        />
      </PageWrapper>
    );
  }

  // At this point, there is no data, the data is not being loaded, there is no handled errors.
  // So, throw an error that will be caught by the closest Error boundary.
  // TODO: Re-throw the error from the query after cleaning it
  throw new Error("Something went wrong");
};
