import React from "react";
import { IconButton, Icon, Avatar } from "components/atoms";
import { IdentityInfo } from "lib/types";
import { truncateDid } from "lib/utils";

type IdentityInfoSectionProps = {
  identityInfo: IdentityInfo;
};

/** Section for the Profile page rendering the main information */
export const IdentityInfoSection: React.FC<IdentityInfoSectionProps> = (
  props
) => {
  const { identityInfo } = props;

  const displayedId = identityInfo.veridaName
    ? identityInfo.veridaName
    : truncateDid(identityInfo.id);

  return (
    <section>
      <div className="flex items-end justify-between">
        <Avatar
          image={identityInfo.avatar}
          alt={identityInfo.name}
          size="large"
        />
        <div className="flex items-center justify-between space-x-3">
          <IconButton icon={<Icon type="share" />} />
          <IconButton icon={<Icon type="more" />} />
        </div>
      </div>
      <div className="mt-3">
        <h2 className="text-xl font-bold">{identityInfo.name}</h2>
        <span className="font-normal text-primary/60">{displayedId}</span>
      </div>
      {identityInfo.description && (
        <p className="mt-3">{identityInfo.description}</p>
      )}
    </section>
  );
};
