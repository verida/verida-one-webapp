import { SkeletonBase } from "components/atoms";
import { IdentityInfo } from "lib/types";
import React, { useCallback } from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { SearchResultItem, NoProfileDataCard } from "components/molecules";

type SearchResultProps = {
  isLoading: boolean;
  result: IdentityInfo | undefined;
  identityFieldValue: string;
  onClose: () => void;
};

export const SearchResult: React.FunctionComponent<SearchResultProps> = ({
  result,
  isLoading,
  identityFieldValue,
  onClose,
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
      onClose();
      if (identity) {
        navigate(`/${identity}`);
      }
    },
    [navigate, onClose]
  );

  // check if weather the data is available or loading state is true and identityFieldValue is not an empty string
  const isSearchInProgress = result || (isLoading && identityFieldValue !== "");

  if (isSearchInProgress) {
    return (
      <>
        <div className="sm:bg-inherit fixed inset-0 top-[62px] h-screen bg-background/80 backdrop-blur-[10px] sm:top-16 sm:bg-background/10 sm:backdrop-blur-0" />
        <div className="bg-inherit fixed top-0 z-50 mt-16 w-full sm:left-1/2 sm:top-0 sm:mx-auto sm:max-w-screen-sm sm:-translate-x-1/2 sm:px-4">
          <div className="relative z-50 overflow-hidden p-4 sm:rounded-xl sm:bg-background/80 sm:backdrop-blur-[10px]">
            {isLoading ? (
              <SearchResultSkeleton />
            ) : result ? (
              <div className="space-y-6">
                <SearchResultItem
                  did={result?.did}
                  name={result?.name}
                  avatar={result?.avatarUri}
                  username={result?.username}
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

  //TODO handle error state

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
