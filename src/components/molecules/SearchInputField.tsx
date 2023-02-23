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
    defaultMessage: "Search DID",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onQueryUpdate(e.target.value);
  };

  return (
    <div {...otherProps}>
      <div className="gray-dark box-border rounded-xl border border-solid border-gray-dark sm:border-none sm:bg-white/10">
        <div className="flex items-center justify-between space-x-2 py-[calc(0.625rem_-_1px)] px-3 sm:py-2.5">
          <Icon type="search" className="hidden text-gray-light sm:block" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder={searchInputPlaceholder}
            className="flex-grow bg-white/0 text-sm outline-none disabled:opacity-10"
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {query ? (
            <IconButton
              className="text-gray-light hover:text-[inherit]"
              variant="text"
              size="no-margin"
              disableHover
              icon={<Icon type="close" />}
              onClick={onClear}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
