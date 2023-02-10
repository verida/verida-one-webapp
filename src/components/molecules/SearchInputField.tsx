import { Icon, IconButton } from "components/atoms";
import React from "react";
import { useIntl } from "react-intl";

type SearchInputFieldProps = {
  onClose: () => void;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearchField: () => void;
  identityFieldValue: string | undefined;
} & React.ComponentPropsWithRef<"div">;

export const SearchInputField: React.FunctionComponent<
  SearchInputFieldProps
> = ({
  onClose,
  onSearch,
  identityFieldValue,
  onClearSearchField,
  ...otherProps
}) => {
  const i18n = useIntl();
  const searchInputPlaceholder = i18n.formatMessage({
    id: "SearchInputField.searchInputPlaceholder",
    description: "Placeholder for the search bar input field",
    defaultMessage: "Search username, public name, DID",
  });
  return (
    <div {...otherProps}>
      <div className="flex items-center bg-background/80 px-3 py-2.5 backdrop-blur-[10px] sm:bg-background/10 sm:p-0">
        <IconButton
          className="mr-2 sm:hidden"
          size="no-margin"
          variant="text"
          icon={<Icon type="arrow-left" />}
          onClick={onClose}
        />
        <div className="gray-dark flex-grow  rounded-xl border border-solid border-gray-dark sm:bg-white/10">
          <div className="flex items-center justify-between py-2.5 px-3">
            <Icon type="search" className="mr-2.5 hidden sm:block" />
            <input
              type="text"
              onChange={onSearch}
              value={identityFieldValue}
              className="flex-grow bg-white/0 text-sm outline-none disabled:opacity-10"
              placeholder={searchInputPlaceholder}
            />
            {identityFieldValue && (
              <IconButton
                size="no-margin"
                variant="text"
                icon={<Icon type="close" />}
                onClick={onClearSearchField}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
