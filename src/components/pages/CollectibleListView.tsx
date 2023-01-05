import { AssetPageWrapper } from "components/molecules";
import { CollectiblesList } from "components/organisms";
import { Collectible } from "lib/types";
import { getCollectibles } from "lib/utils";
import React, { useEffect, useState } from "react";

export const CollectibleListView: React.FunctionComponent = () => {
  const [collectibles, setCollectibles] = useState<Collectible[]>([]);

  useEffect(() => {
    const getData = async () => {
      setCollectibles(await getCollectibles());
    };
    void getData();
  }, []);

  return (
    <AssetPageWrapper title="Collectibles" badgeCount={collectibles.length}>
      <CollectiblesList collectibles={collectibles} />
    </AssetPageWrapper>
  );
};
