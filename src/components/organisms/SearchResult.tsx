import { IdentityInfo } from "lib/types";
import React from "react";
import { useIntl } from "react-intl";
import {
  SearchResultItem,
  NoSearchResultItem,
  SearchResultItemSkeleton,
  PortalWrapper,
} from "components/molecules";

type SearchResultProps = {
  isSearching: boolean;
  results?: IdentityInfo[];
  onClickResultItem: (identity: string) => void;
  onClickAway: () => void;
};

export const SearchResult: React.FunctionComponent<SearchResultProps> = (
  props
) => {
  const { results, isSearching, onClickResultItem, onClickAway } = props;

  const i18n = useIntl();

  const noSearchResultMessage = i18n.formatMessage({
    id: "SearchResult.noSearchResultMessage",
    defaultMessage: "No profile found",
    description:
      "Message indicating that no profiles were found in the search list",
  });

  return (
    <SearchResultWrapper onClickAway={onClickAway}>
      {results && results.length > 0 ? (
        <ul className="flex flex-col space-y-6">
          {results.map((resultItem) => (
            <li key={resultItem.did}>
              <SearchResultItem
                did={resultItem.did}
                name={resultItem?.name}
                avatar={resultItem?.avatarUri}
                username={resultItem?.username}
                onClick={() =>
                  onClickResultItem(resultItem?.username || resultItem.did)
                }
              />
            </li>
          ))}
        </ul>
      ) : isSearching ? (
        <SearchResultItemSkeleton />
      ) : (
        <NoSearchResultItem message={noSearchResultMessage} />
      )}
    </SearchResultWrapper>
  );
};

type SearchResultWrapperProps = {
  children: React.ReactNode;
  onClickAway: () => void;
};

const SearchResultWrapper: React.FunctionComponent<SearchResultWrapperProps> = (
  props
) => {
  const { children, onClickAway } = props;

  return (
    <PortalWrapper>
      <div
        className="fixed inset-0 mt-16 bg-background/80 backdrop-blur-[10px] sm:bg-background/0 sm:backdrop-blur-0"
        onClick={onClickAway}
      />
      <div className="fixed top-0 z-50 mt-16 w-full sm:left-1/2 sm:max-w-screen-sm sm:-translate-x-1/2 sm:px-4">
        <div className="relative p-4 sm:rounded-xl sm:border sm:border-solid sm:border-gray-dark sm:bg-background/80 sm:backdrop-blur-[10px]">
          {children}
        </div>
      </div>
    </PortalWrapper>
  );
};
