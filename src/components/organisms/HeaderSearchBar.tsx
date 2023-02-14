import React, { useCallback } from "react";
import { SearchResult } from "./SearchResult";
import { useSearchIdentity } from "lib/hooks";
import { SearchInputField } from "components/molecules";

type HeaderSearchBarProps = {
  onClose?: () => void;
} & Pick<React.ComponentPropsWithRef<"div">, "className">;

export const HeaderSearchBar: React.FunctionComponent<HeaderSearchBarProps> = ({
  onClose,
  className,
}) => {
  const { query, setQuery, isSearching, results } = useSearchIdentity();

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const customClass = className || "";

  return (
    <>
      <div
        className={`${customClass} fixed inset-0 z-50 w-full sm:left-1/2 sm:top-[11.5px] sm:max-w-screen-sm sm:-translate-x-1/2 sm:px-4`}
      >
        <SearchInputField
          query={query}
          onQueryUpdate={setQuery}
          onClose={handleClose}
        />
      </div>
      {query ? (
        <SearchResult
          results={results}
          onClose={handleClose}
          isSearching={isSearching}
        />
      ) : null}
    </>
  );
};
