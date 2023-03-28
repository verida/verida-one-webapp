import { Avatar, SkeletonBase } from "components/atoms";
import { IdentityInfo } from "lib/types";
import React from "react";

type SearchResultItemProps = {
  identityInfo: IdentityInfo;
  onClick: () => void;
} & React.ComponentPropsWithRef<"div">;

export const SearchResultItem: React.FunctionComponent<
  SearchResultItemProps
> = (props) => {
  const { identityInfo, onClick, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <button
        className="flex w-full rounded-lg p-2 hover:bg-gray-dark active:bg-gray-dark"
        onClick={onClick}
      >
        <Avatar
          className="mr-3 aspect-square h-10"
          image={identityInfo.avatarUri}
          alt={identityInfo.name}
        />
        <div className="flex min-w-0 flex-col text-start">
          <span className="truncate font-semibold">{identityInfo.name}</span>
          <span className="truncate text-gray-light">
            {identityInfo.username || identityInfo.did}
          </span>
        </div>
      </button>
    </div>
  );
};

export const SearchResultItemSkeleton: React.FunctionComponent = () => {
  return (
    <div className="flex animate-pulse p-2">
      <SkeletonBase className="mr-3 aspect-square h-10 opacity-5" />
      <div className="flex flex-col space-y-2">
        <SkeletonBase className="h-4 w-32 opacity-10" />
        <SkeletonBase className="h-4 w-24 opacity-5" />
      </div>
    </div>
  );
};
