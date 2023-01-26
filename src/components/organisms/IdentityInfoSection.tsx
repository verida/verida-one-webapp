import React, { useMemo } from "react";
import { IconButton, Icon, Avatar } from "components/atoms";
import { IdentityInfo } from "lib/types";
import { truncateProfileDid } from "lib/utils";

type IdentityInfoSectionProps = {
  identityInfo: IdentityInfo;
};

/** Section for the Profile page rendering the main information */
export const IdentityInfoSection: React.FC<IdentityInfoSectionProps> = (
  props
) => {
  const { identityInfo } = props;

  const identityInfoDid = useMemo(
    () => identityInfo.did && truncateProfileDid(identityInfo.did),
    [identityInfo.did]
  );

  return (
    <section>
      <div className="flex items-end justify-between">
        <Avatar
          image={identityInfo.avatar}
          alt={identityInfo.name}
          size="large"
          className="mr-3"
        />
        <div className="flex items-center justify-between space-x-3">
          <IconButton icon={<Icon type="share" />} />
          <IconButton icon={<Icon type="more" />} />
        </div>
      </div>
      <div className="mt-3">
        <h2 className="text-xl font-bold">{identityInfo.name}</h2>
        {identityInfo.veridaName && (
          <span className="font-normal text-primary/60">
            {identityInfo.veridaName}
          </span>
        )}
        {!identityInfo.veridaName && identityInfoDid && (
          <span className="font-normal text-primary/60">{identityInfoDid}</span>
        )}
      </div>
      {identityInfo.description && (
        <p className="mt-3">{identityInfo.description}</p>
      )}
    </section>
  );
};
