import React, { useCallback } from "react";
import { SearchResult } from "./SearchResult";
import { useSearchIdentity } from "lib/hooks";
import { PortalWrapper, SearchInputField } from "components/molecules";

type HeaderSearchBarProps = {
  onCloseSearchBar: () => void;
};
// Delay time in milliseconds to make request to the profile datastore
const DEBOUNCE_DELAY = 1000;
export const HeaderSearchBar: React.FunctionComponent<HeaderSearchBarProps> = ({
  onCloseSearchBar,
}) => {
  const { data, isLoading, identityFieldValue, handleSearch } =
    useSearchIdentity(DEBOUNCE_DELAY);

  const onClose = useCallback(() => {
    handleSearch("");
    onCloseSearchBar();
  }, [handleSearch, onCloseSearchBar]);

  return (
    <PortalWrapper>
      <div className="fixed inset-0 z-50 w-full sm:left-1/2 sm:top-3 sm:mt-0 sm:w-2/4 sm:max-w-screen-sm sm:-translate-x-1/2">
        <SearchInputField onClose={onClose} onSearch={handleSearch} />
      </div>
      <SearchResult
        data={data}
        isLoading={isLoading}
        onCloseSearchBar={onClose}
        identityFieldValue={identityFieldValue}
      />
    </PortalWrapper>
  );
};
