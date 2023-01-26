import React from "react";
import { IconButton, Icon, Avatar, SkeletonBase } from "components/atoms";
import { IdentityInfo } from "lib/types";

type IdentityInfoSectionProps = {
  identityInfo?: IdentityInfo;
};

/** Section for the Profile page rendering the main information */
export const IdentityInfoSection: React.FC<IdentityInfoSectionProps> = (
  props
) => {
  const { identityInfo } = props;

  if (identityInfo) {
    return (
      <section>
        <div className="flex items-start justify-between space-x-3">
          <div className="flex items-center">
            <Avatar
              image={identityInfo.avatar}
              alt={identityInfo.name}
              size="large"
              className="mr-3"
            />
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-bold">{identityInfo.name}</h2>
              {identityInfo.veridaName && (
                <span className="font-normal text-primary/60">
                  {identityInfo.veridaName}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between space-x-3">
            <IconButton icon={<Icon type="share" />} />
            <IconButton icon={<Icon type="more" />} />
          </div>
        </div>
        {identityInfo.description && (
          <p className="mt-4">{identityInfo.description}</p>
        )}
      </section>
    );
  }

  return <IdentityInfoSectionSkeleton />;
};

function IdentityInfoSectionSkeleton() {
  return (
    <section className="animate-pulse">
      <SkeletonBase className="mr-3 aspect-square h-16 opacity-10 sm:h-40" />
      <div className="mt-4 flex flex-col space-y-2">
        <SkeletonBase className="h-4 w-1/4 opacity-10" />
        <SkeletonBase className="h-4 w-1/3 opacity-10" />
      </div>
      <div className="mt-4 flex flex-col space-y-2">
        <SkeletonBase className="h-4 w-full opacity-10" />
        <div className="flex space-x-1">
          <SkeletonBase className="h-4 w-2/3 opacity-10" />
          <SkeletonBase className="h-4 flex-grow opacity-10" />
        </div>
        <SkeletonBase className="h-4 w-1/3 opacity-10" />
      </div>
    </section>
  );
}
