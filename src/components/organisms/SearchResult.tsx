import { SkeletonBase } from "components/atoms";
import { IdentityInfo } from "lib/types";
import React, { useCallback } from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { SearchResultItem, NoProfileDataCard } from "components/molecules";

type SearchResultProps = {
  data?: IdentityInfo;
  isLoading: boolean;
  identityFieldValue: string;
  onCloseSearchBar: () => void;
};

export const SearchResult: React.FunctionComponent<SearchResultProps> = ({
  data,
  isLoading,
  identityFieldValue,
  onCloseSearchBar,
}) => {
  const i18n = useIntl();
  const navigate = useNavigate();
  const noProfileMessage = i18n.formatMessage({
    id: "SearchResult.noProfileMessage",
    defaultMessage: "No profile found",
    description:
      "Message indicating that no profiles were found in the search list",
  });

  const handleProfileNavigation = useCallback(
    (identity?: string) => {
      onCloseSearchBar();
      if (identity) {
        navigate(`/${identity}`);
      }
    },
    [navigate, onCloseSearchBar]
  );

  // check if weather the data is available or loading state is true and identityFieldValue is not an empty string
  const isSearchInProgress = data || (isLoading && identityFieldValue !== "");

  if (isSearchInProgress) {
    return (
      <>
        <div
          onClick={onCloseSearchBar}
          className="sm:bg-inherit e fixed inset-0 top-[62px] z-50 h-screen bg-background/80 backdrop-blur-[10px] sm:top-16   sm:bg-background/10 sm:backdrop-blur-0"
        />
        <div className="fixed top-0 z-50 mt-16 w-full border-t border-solid border-gray-dark sm:left-1/2 sm:top-0 sm:mx-auto sm:w-2/4 sm:max-w-screen-sm sm:-translate-x-1/2 sm:rounded-xl sm:bg-background/80 sm:backdrop-blur-[10px]">
          <div className="relative overflow-hidden p-4">
            {isLoading ? (
              <SearchResultSkeleton />
            ) : data ? (
              <div className="space-y-6">
                <SearchResultItem
                  did={data?.did}
                  name={data?.name}
                  avatar={data?.avatarUri}
                  onClickedItem={handleProfileNavigation}
                />
              </div>
            ) : (
              <NoProfileDataCard message={noProfileMessage} />
            )}
          </div>
        </div>
      </>
    );
  }

  return null;
};

const SearchResultSkeleton: React.FunctionComponent = () => {
  return (
    <div className="flex animate-pulse">
      <SkeletonBase className="mr-3 aspect-square h-10 opacity-10 sm:h-16" />
      <div className="flex flex-col space-y-2">
        <SkeletonBase className="h-4 w-32 opacity-5" />
        <SkeletonBase className="block h-4 w-24 opacity-5" />
      </div>
    </div>
  );
};
