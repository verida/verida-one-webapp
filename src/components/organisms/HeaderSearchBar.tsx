import React, { useState, useCallback } from "react";
import { SearchResult } from "./SearchResult";
import { useDebounce, useIdentityInfo } from "lib/hooks";
import { PortalWrapper, SearchInputField } from "components/molecules";

type HeaderSearchBarProps = {
  onCloseSearchBar: () => void;
};
// Delay time in milliseconds to make request to the profile datastore
const DEBOUNCE_DELAY = 1000;
export const HeaderSearchBar: React.FunctionComponent<HeaderSearchBarProps> = ({
  onCloseSearchBar,
}) => {
  const [identityFieldValue, setIdentityFieldValue] = useState("");
  const IdentityQuery = useDebounce<string>(identityFieldValue, DEBOUNCE_DELAY);

  const identityInfoQuery = IdentityQuery !== "" ? IdentityQuery : undefined;
  const { data, isLoading } = useIdentityInfo(identityInfoQuery);

  const onClose = useCallback(() => {
    setIdentityFieldValue("");
    onCloseSearchBar();
  }, [onCloseSearchBar]);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      setIdentityFieldValue(e.target.value);
    }
  }, []);

  const handleClearInput = useCallback(() => setIdentityFieldValue(""), []);

  return (
    <PortalWrapper>
      <div className="fixed inset-0 z-50 w-full sm:left-1/2 sm:top-3 sm:mt-0 sm:w-2/4 sm:max-w-screen-sm sm:-translate-x-1/2">
        <SearchInputField
          onClose={onClose}
          onSearch={handleSearch}
          identityFieldValue={identityFieldValue}
          onClearSearchField={handleClearInput}
        />
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
