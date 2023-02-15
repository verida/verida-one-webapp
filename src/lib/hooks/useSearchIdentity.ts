import { useState } from "react";
import { useDebounce } from "./useDebounce";
import { useIdentityInfo } from "./useIdentityInfo";

// Delay time in milliseconds to make request to the profile datastore
const REQUEST_DELAY = 1000;

// Currently search for exact did entered into the search input field
export const useSearchIdentity = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce<string>(query, REQUEST_DELAY);
  const identityQuery = debouncedQuery !== "" ? debouncedQuery : undefined;

  // Currently getting the information of a single DID
  const { data, isLoading, isError } = useIdentityInfo(identityQuery);

  // In case of error, currently returning a empty array of results, so the UI will simply shows "No profile found".
  // TODO: Handle errors?

  return {
    results: isError ? [] : data ? [data] : undefined,
    isSearching: isError ? false : isLoading && query !== "",
    setQuery,
    query,
  };
};
