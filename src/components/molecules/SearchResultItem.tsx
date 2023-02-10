import { Avatar } from "components/atoms";
import React from "react";
import { useCallback } from "react";

type SearchResultItemProps = {
  avatar?: string;
  name?: string;
  did: string;
  username?: string;
  onClickedItem: (arg?: string) => void;
} & React.ComponentPropsWithRef<"div">;

export const SearchResultItem: React.FunctionComponent<
  SearchResultItemProps
> = ({ avatar, name, did, onClickedItem, ...otherProps }) => {
  const handleClickedItem = useCallback(() => {
    onClickedItem(name);
  }, [name, onClickedItem]);
  return (
    <div {...otherProps}>
      <div className="flex cursor-pointer" onClick={handleClickedItem}>
        <Avatar className="mr-3 h-10" image={avatar} alt={name} />
        <div className="flex min-w-0 flex-col">
          <span className="text-sm font-semibold">{name}</span>
          <span className="truncate text-clip text-sm font-normal text-gray-light">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};
