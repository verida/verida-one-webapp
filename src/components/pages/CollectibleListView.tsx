import { AssetPageWrapper } from "components/molecules";
import { CollectiblesList } from "components/organisms";
import { Collectible } from "lib/types";
import { getCollectibles } from "lib/utils";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";

export const CollectibleListView: React.FunctionComponent = () => {
  const i18n = useIntl();
  const [collectibles, setCollectibles] = useState<Collectible[]>([]);

  const sectionTitle = i18n.formatMessage({
    id: "CollectiblesListPage.sectionTitle",
    description:
      "Title of the 'Collectibles' section in the 'Collectible list view' page",
    defaultMessage: "Collectibles",
  });

  useEffect(() => {
    const getData = async () => {
      setCollectibles(await getCollectibles());
    };
    void getData();
  }, []);

  return (
    <AssetPageWrapper title={sectionTitle} badgeCount={collectibles.length}>
      <CollectiblesList collectibles={collectibles} />
    </AssetPageWrapper>
  );
};
