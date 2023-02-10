import React, { useState, useCallback } from "react";
import { SearchResult } from "./SearchResult";
import { useDebounce, useIdentityInfo } from "lib/hooks";
import { PortalWrapper, SearchInputField } from "components/molecules";

type SearchBarProps = {
  onCloseSearchBar: () => void;
};
// Delay time in milliseconds to make request to the profile  datastore
const DEBOUNCE_DELAY = 1000;
export const SearchBar: React.FunctionComponent<SearchBarProps> = ({
  onCloseSearchBar,
}) => {
  const [identityField, setIdentityField] = useState<string | undefined>(
    undefined
  );
  const IdentityQuery = useDebounce(identityField, DEBOUNCE_DELAY);
  const { data, isLoading } = useIdentityInfo(IdentityQuery);

  const onClose = useCallback(() => {
    setIdentityField(undefined);
    onCloseSearchBar();
  }, [onCloseSearchBar]);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIdentityField(e.target.value);
  }, []);

  const handleClearInput = useCallback(() => setIdentityField(undefined), []);

  return (
    <PortalWrapper>
      <div className="fixed inset-0 z-50 w-full sm:left-1/2 sm:top-0 sm:max-w-screen-sm sm:-translate-x-1/2 md:mt-2.5 md:w-2/4">
        <SearchInputField
          onClose={onClose}
          onSearch={handleSearch}
          identityField={identityField}
          onClearSearchField={handleClearInput}
        />
      </div>
      <SearchResult
        data={data}
        isLoading={isLoading}
        onCloseSearchBar={onClose}
      />
    </PortalWrapper>
  );
};
