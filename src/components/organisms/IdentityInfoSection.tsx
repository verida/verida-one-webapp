import React from "react";
import { IconButton, Icon, Avatar, SkeletonBase } from "components/atoms";
import { IdentityInfo } from "lib/types";
import { truncateDid } from "lib/utils";
import { config } from "lib/config";

type IdentityInfoSectionProps = {
  identityInfo?: IdentityInfo;
};

/** Section for the Profile page rendering the main information */
export const IdentityInfoSection: React.FC<IdentityInfoSectionProps> = (
  props
) => {
  const { identityInfo } = props;

  if (identityInfo) {
    const displayedId = identityInfo.username
      ? identityInfo.username
      : truncateDid(identityInfo.did);

    return (
      <section>
        <div className="flex items-end justify-between">
          <Avatar
            image={identityInfo.avatarUri}
            alt={identityInfo.name}
            className="h-16 sm:h-24" // TODO: Update tailwind config to have 6.5rem
          />
          <div className="flex items-center justify-between space-x-3">
            {config.features.isSharingEnabled && (
              <IconButton icon={<Icon type="share" />} />
            )}
            {/* <IconButton icon={<Icon type="more" />} /> */}
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
  }

  return <IdentityInfoSectionSkeleton />;
};

const IdentityInfoSectionSkeleton: React.FunctionComponent = () => {
  return (
    <section className="animate-pulse">
      <SkeletonBase className="mr-3 aspect-square h-16 opacity-10 sm:h-24" />
      <div className="mt-4 flex flex-col space-y-2">
        <SkeletonBase className="h-4 w-1/4 opacity-10" />
        <SkeletonBase className="h-4 w-1/3 opacity-5" />
      </div>
      <div className="mt-4 flex flex-col space-y-2">
        <SkeletonBase className="h-4 w-full opacity-5" />
        <div className="flex space-x-1">
          <SkeletonBase className="h-4 w-2/3 opacity-5" />
          <SkeletonBase className="h-4 flex-grow opacity-5" />
        </div>
        <SkeletonBase className="h-4 w-1/3 opacity-5" />
      </div>
    </section>
  );
};
