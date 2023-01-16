import { PageWrapper, RedirectionCard } from "components/molecules";
import { BadgeGrid } from "components/organisms";
import { Badge } from "lib/types";
import { getMockBadges } from "lib/utils";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";

export const BadgeListView: React.FunctionComponent = () => {
  const [badges, setBadges] = useState<Badge[]>([]);
  const i18n = useIntl();
  const { identity } = useParams();

  const redirectPath = identity ? `/${identity}` : `/`;

  useEffect(() => {
    const getData = async () => {
      setBadges(await getMockBadges(identity));
    };
    void getData();
  }, [identity]);

  const redirectionCardButtonLabel = i18n.formatMessage({
    id: "BadgeListView.redirectionCardButtonLabel",
    description: "Label of the redirection link to go to the Profile poage",
    defaultMessage: "Go to profile",
  });

  const redirectionCardTitle = i18n.formatMessage({
    id: "CollectibleListView.redirectionCardTitle",
    defaultMessage: "It’s empty here",
    description:
      "Title of the redirection card indicating that there are no list of badges available.",
  });

  const redirectionCardMessage = i18n.formatMessage({
    id: "CollectibleListView.redirectionCardMessage",
    defaultMessage: "There are no badges to see",
    description:
      "Message of the redirection card indicating that there are no list of badges available.",
  });

  const pageTitle = i18n.formatMessage({
    id: "BadgeListView.pageTitle",
    description: "Title of the 'Badges' page",
    defaultMessage: "Badges",
  });

  if (!badges.length) {
    return (
      <PageWrapper title={pageTitle} badgeValue={`${badges.length}`}>
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

  return (
    <PageWrapper title={pageTitle} badgeValue={badges.length}>
      <BadgeGrid className="pt-2" badges={badges} />
    </PageWrapper>
  );
};
