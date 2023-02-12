import React, { useCallback, useRef, useEffect, useState } from "react";
import { SearchResult } from "./SearchResult";
import { useSearchIdentity } from "lib/hooks";
import { PortalWrapper, SearchInputField } from "components/molecules";
import { IdentityInfo } from "lib/types";

type HeaderSearchBarProps = {
  onCloseSearchBar?: () => void;
} & Pick<React.ComponentPropsWithRef<"div">, "className">;

// Delay time in milliseconds to make request to the profile datastore
const REQUEST_DELAY = 400;
const EVENT_CLICK = "click";

export const HeaderSearchBar: React.FunctionComponent<HeaderSearchBarProps> = ({
  onCloseSearchBar,
  className,
}) => {
  const [result, setResult] = useState<IdentityInfo | undefined>(undefined);
  const resultDivRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, handleSearch, identityFieldValue } =
    useSearchIdentity(REQUEST_DELAY);

  const onClose = useCallback(() => {
    if (onCloseSearchBar) {
      onCloseSearchBar();
    }
  }, [onCloseSearchBar]);

  useEffect(() => {
    setResult(data);
    const handleCloseResult = (event: MouseEvent) => {
      if (
        resultDivRef.current &&
        resultDivRef.current.contains(event.target as Node)
      ) {
        setResult(undefined);
      }
    };
    document.addEventListener(EVENT_CLICK, handleCloseResult);
    return () => {
      document.removeEventListener(EVENT_CLICK, handleCloseResult);
    };
  }, [data]);

  const customClass = className || "";

  return (
    <>
      <div>
        <div
          className={`${customClass} fixed inset-0 z-50 w-full sm:left-1/2 sm:top-[11.5px] sm:max-w-screen-sm sm:-translate-x-1/2 sm:px-4`}
        >
          <SearchInputField onClose={onClose} onSearch={handleSearch} />
        </div>
      </div>
      <PortalWrapper>
        <div ref={resultDivRef}>
          <SearchResult
            result={result}
            onClose={onClose}
            isLoading={isLoading}
            identityFieldValue={identityFieldValue}
          />
        </div>
      </PortalWrapper>
    </>
  );
};
