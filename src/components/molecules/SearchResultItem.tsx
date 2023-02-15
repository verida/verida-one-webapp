import { Avatar, SkeletonBase } from "components/atoms";
import React from "react";

type SearchResultItemProps = {
  did: string;
  avatar?: string;
  name?: string;
  username?: string;
  onClick: () => void;
} & React.ComponentPropsWithRef<"div">;

export const SearchResultItem: React.FunctionComponent<
  SearchResultItemProps
> = (props) => {
  const { avatar, name, did, username, onClick, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <div className="flex cursor-pointer" onClick={() => onClick()}>
        <Avatar className="mr-3 aspect-square h-10" image={avatar} alt={name} />
        <div className="flex min-w-0 flex-col">
          <span className="text-sm font-semibold">{name}</span>
          <span className="truncate text-clip text-sm font-normal text-gray-light">
            {username || did}
          </span>
        </div>
      </div>
    </div>
  );
};

export const SearchResultItemSkeleton: React.FunctionComponent = () => {
  return (
    <div className="flex animate-pulse">
      <SkeletonBase className="mr-3 aspect-square h-10 opacity-5" />
      <div className="flex flex-col space-y-2">
        <SkeletonBase className="h-4 w-32 opacity-10" />
        <SkeletonBase className="h-4 w-24 opacity-5" />
      </div>
    </div>
  );
};
