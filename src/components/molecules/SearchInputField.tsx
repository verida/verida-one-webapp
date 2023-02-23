import React from "react";
import { useIntl } from "react-intl";
import { Icon, IconButton } from "components/atoms";

type SearchInputFieldProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  query: string;
  onQueryUpdate: (newQuery: string) => void;
  onClear: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
} & React.ComponentPropsWithRef<"div">;

export const SearchInputField: React.FunctionComponent<
  SearchInputFieldProps
> = (props) => {
  const {
    inputRef,
    query,
    onQueryUpdate,
    onClear,
    onFocus,
    onBlur,
    ...otherProps
  } = props;
  const i18n = useIntl();

  const searchInputPlaceholder = i18n.formatMessage({
    id: "SearchInputField.searchInputPlaceholder",
    description: "Placeholder for the search bar input field",
    defaultMessage: "Search a DID",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onQueryUpdate(e.target.value);
  };

  return (
    <div {...otherProps}>
      <div className="relative">
        <Icon
          type="search"
          className="absolute top-1/2 left-3 hidden -translate-y-1/2 text-gray-light sm:block"
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={searchInputPlaceholder}
          className="w-full rounded-xl border border-solid border-transparent bg-primary-10 py-[calc(0.625rem_-_1px)] pl-3 pr-10 text-base leading-5 hover:border-primary-15 focus:border-primary-15 focus:bg-[inherit] focus:outline-none sm:pl-10"
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {query ? (
          <IconButton
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-light hover:text-[inherit]"
            variant="text"
            size="no-margin"
            disableHover
            icon={<Icon type="close" />}
            onClick={onClear}
          />
        ) : null}
      </div>
    </div>
  );
};
