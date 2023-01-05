import { PageWrapper } from "components/molecules";
import { CollectibleGrid } from "components/organisms";
import { Collectible } from "lib/types";
import { getCollectibles } from "lib/utils";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";

export const CollectibleListView: React.FunctionComponent = () => {
  const i18n = useIntl();
  const [collectibles, setCollectibles] = useState<Collectible[]>([]);

  const pageTitle = i18n.formatMessage({
    id: "CollectibleListView.pageTitle",
    description: "Title of the 'Collectibles' page",
    defaultMessage: "Collectibles",
  });

  useEffect(() => {
    const getData = async () => {
      setCollectibles(await getCollectibles());
    };
    void getData();
  }, []);

  return (
    <PageWrapper title={pageTitle} badgeValue={collectibles.length}>
      <CollectibleGrid collectibles={collectibles} />
    </PageWrapper>
  );
};
