import { useCallback, useState } from "react";
import { useDebounce } from "./useDebounce";
import { useIdentityInfo } from "./useIdentityInfo";

// Currently search for exact did entered into the search iput field
export const useSearchIdentity = (delay: number) => {
  const [identityFieldValue, setIdentityFieldValue] = useState("");
  const IdentityQuery = useDebounce<string>(identityFieldValue, delay);

  const identityInfoQuery = IdentityQuery !== "" ? IdentityQuery : undefined;
  const { data, isLoading } = useIdentityInfo(identityInfoQuery);

  const handleSearch = useCallback((query: string) => {
    setIdentityFieldValue(query);
  }, []);
  return {
    data,
    isLoading,
    handleSearch,
    identityFieldValue,
  };
};
