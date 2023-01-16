import { PageWrapper, RedirectionCard } from "components/molecules";
import { CollectibleGrid } from "components/organisms";
import { Collectible } from "lib/types";
import { getMockCollectibles } from "lib/utils";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";

export const CollectibleListView: React.FunctionComponent = () => {
  const [collectibles, setCollectibles] = useState<Collectible[]>([]);
  const i18n = useIntl();
  const { identity } = useParams();

  useEffect(() => {
    const getData = async () => {
      setCollectibles(await getMockCollectibles(identity));
    };
    void getData();
  }, [identity]);

  const redirectPath = identity ? `/${identity}` : `/`;

  const redirectionCardButtonLabel = i18n.formatMessage({
    id: "CollectibleListView.redirectionCardButtonLabel",
    description: "Label of the redirection link to go to the Profile poage",
    defaultMessage: "Go to profile",
  });

  const redirectionCardTitle = i18n.formatMessage({
    id: "CollectibleListView.redirectionCardTitle",
    defaultMessage: "Item not found",
    description:
      "Title of the redirection card indicating the collectible has not been found.",
  });

  const redirectionCardMessage = i18n.formatMessage({
    id: "CollectibleListView.redirectionCardMessage",
    defaultMessage: "This item doesn't exist or is not available",
    description:
      "Message of the redirection card indicating the collectibles has not been found.",
  });

  if (!collectibles.length) {
    return (
      <PageWrapper>
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

  const pageTitle = i18n.formatMessage({
    id: "CollectibleListView.pageTitle",
    description: "Title of the 'Collectibles' page",
    defaultMessage: "Collectibles",
  });

  return (
    <PageWrapper title={pageTitle} badgeValue={collectibles.length}>
      <CollectibleGrid className="pt-2" collectibles={collectibles} />
    </PageWrapper>
  );
};
