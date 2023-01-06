import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Collectible } from "lib/types";
import { collectibles } from "mock/data-6529";
import CollectibleDetailGrid from "components/organisms/CollectibleDetailGrid";
import { PageWrapper } from "components/molecules";

export const CollectibleDetailsView: React.FunctionComponent = () => {
  const params = useParams();
  const [collectible, setCollectible] = useState<Collectible | undefined>(
    undefined
  );

  useEffect(() => {
    getCollectiblesByID(collectibles);
  });

  const getCollectiblesByID = (collectibles: Collectible[]) => {
    const data = collectibles.find(
      (item) => item.contractAddress === params?.collectibleId
    );
    setCollectible(data);
  };

  if (!collectible) {
    return null;
  }

  return (
    <PageWrapper>
      <CollectibleDetailGrid collectible={collectible} />
    </PageWrapper>
  );
};
