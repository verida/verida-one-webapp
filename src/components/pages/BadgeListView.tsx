import { PageWrapper, RedirectionCard } from "components/molecules";
import { BadgeGrid } from "components/organisms";
import { Badge } from "lib/types";
import { getBadges } from "lib/utils";
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
      setBadges(await getBadges(identity));
    };
    void getData();
  }, [identity]);

  const redirectionCardButtonLabel = i18n.formatMessage({
    id: "BadgeListView.redirectionCardButtonLabel",
    description: "Label of the redirection link to go to the Profile poage",
    defaultMessage: "Go to profile",
  });

  const redirectionCardTitle = i18n.formatMessage({
    id: "BadgeListView.redirectionCardTitle",
    defaultMessage: "Item not found",
    description:
      "Title of the redirection card indicating the badge has not been found.",
  });

  const redirectionCardMessage = i18n.formatMessage({
    id: "BadgeListView.redirectionCardMessage",
    defaultMessage: "This item doesn't exist or is not available",
    description:
      "Message of the redirection card indicating the badges has not been found.",
  });

  if (!badges.length) {
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
    id: "BadgeListView.pageTitle",
    description: "Title of the 'Badges' page",
    defaultMessage: "Badges",
  });

  return (
    <PageWrapper title={pageTitle} badgeValue={badges.length}>
      <BadgeGrid className="pt-2" badges={badges} />
    </PageWrapper>
  );
};
