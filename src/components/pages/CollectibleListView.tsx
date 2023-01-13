import { PageWrapper } from "components/molecules";
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
