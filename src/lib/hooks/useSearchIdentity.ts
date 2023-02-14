import { useState } from "react";
import { useDebounce } from "./useDebounce";
import { useIdentityInfo } from "./useIdentityInfo";

// Delay time in milliseconds to make request to the profile datastore
const REQUEST_DELAY = 500;

// Currently search for exact did entered into the search input field
export const useSearchIdentity = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce<string>(query, REQUEST_DELAY);
  const identityQuery = debouncedQuery !== "" ? debouncedQuery : undefined;

  // Currently getting the information of a single DID
  const { data, isLoading } = useIdentityInfo(identityQuery);

  return {
    results: data ? [data] : undefined,
    isSearching: isLoading && query !== "",
    setQuery,
    query,
  };
};
