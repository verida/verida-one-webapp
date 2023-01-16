import { PageWrapper } from "components/molecules";
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

  useEffect(() => {
    const getData = async () => {
      setBadges(await getBadges(identity));
    };
    void getData();
  }, [identity]);

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
