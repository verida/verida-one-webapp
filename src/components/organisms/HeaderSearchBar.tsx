import React, { useCallback, useState } from "react";
import { SearchResult } from "./SearchResult";
import { useSearchIdentity } from "lib/hooks";
import { SearchInputField } from "components/molecules";
import { Icon, IconButton } from "components/atoms";

type HeaderSearchBarProps = {
  onClickResultItem: (identity: string) => void;
  onClickBack: () => void;
} & Omit<
  React.ComponentPropsWithRef<typeof SearchInputField>,
  "query" | "onQueryUpdate" | "onClear" | "onFocus" | "onBlur"
>;

export const HeaderSearchBar: React.FunctionComponent<HeaderSearchBarProps> = (
  props
) => {
  const { onClickResultItem, onClickBack, inputRef, ...otherProps } = props;

  const [showResults, setShowResults] = useState(true);
  const { query, setQuery, isSearching, results } = useSearchIdentity();

  const clean = useCallback(() => {
    setQuery("");
    setShowResults(true);
  }, [setQuery]);

  const handleClear = useCallback(() => {
    clean();
    inputRef.current?.focus();
  }, [clean, inputRef]);

  const handleClickAway = useCallback(() => {
    setShowResults(false);
  }, [setShowResults]);

  const handleClickResultItem = useCallback(
    (identity: string) => {
      onClickResultItem(identity);
      clean();
    },
    [onClickResultItem, clean]
  );

  const handleClickBack = useCallback(() => {
    onClickBack();
    clean();
  }, [onClickBack, clean]);

  const handleInputFocus = useCallback(() => {
    setShowResults(true);
  }, []);

  return (
    <>
      <IconButton
        variant="text"
        size="no-margin"
        onClick={handleClickBack}
        className="mr-2 sm:hidden"
        icon={<Icon type="arrow-left" />}
      />
      <SearchInputField
        {...otherProps}
        inputRef={inputRef}
        query={query}
        onQueryUpdate={setQuery}
        onClear={handleClear}
        onFocus={handleInputFocus}
      />
      {query && showResults ? (
        <SearchResult
          results={results}
          isSearching={isSearching}
          onClickResultItem={handleClickResultItem}
          onClickAway={handleClickAway}
        />
      ) : null}
    </>
  );
};
