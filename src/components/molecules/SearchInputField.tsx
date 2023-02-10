import { Icon, IconButton } from "components/atoms";
import React, { useState } from "react";
import { useIntl } from "react-intl";

type SearchInputFieldProps = {
  onClose: () => void;
  onSearch: (arg: string) => void;
} & React.ComponentPropsWithRef<"div">;

export const SearchInputField: React.FunctionComponent<
  SearchInputFieldProps
> = ({ onClose, onSearch, ...otherProps }) => {
  const [searchValue, setSearchValue] = useState("");
  const i18n = useIntl();
  const searchInputPlaceholder = i18n.formatMessage({
    id: "SearchInputField.searchInputPlaceholder",
    description: "Placeholder for the search bar input field",
    defaultMessage: "Search username, public name, DID",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  const clearSearchField = () => {
    setSearchValue("");
    onSearch("");
  };

  return (
    <div {...otherProps}>
      <div className="flex items-center bg-background/80 px-3 py-2.5 backdrop-blur-[10px] sm:bg-background/10 sm:p-0">
        <IconButton
          variant="text"
          size="no-margin"
          onClick={onClose}
          className="mr-2 sm:hidden"
          icon={<Icon type="arrow-left" />}
        />
        <div className="gray-dark flex-grow  rounded-xl border border-solid border-gray-dark sm:bg-white/10">
          <div className="flex items-center justify-between py-2.5 px-3">
            <Icon type="search" className="mr-2.5 hidden sm:block" />
            <input
              type="text"
              value={searchValue}
              onChange={handleInputChange}
              placeholder={searchInputPlaceholder}
              className="flex-grow bg-white/0 text-sm outline-none disabled:opacity-10"
            />
            {searchValue && (
              <IconButton
                variant="text"
                size="no-margin"
                icon={<Icon type="close" />}
                onClick={clearSearchField}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
