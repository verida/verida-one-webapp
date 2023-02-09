import { Icon } from "components/atoms";
import React from "react";
import { useIntl } from "react-intl";

type SearchInputFieldProps = {
  onClose: () => void;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearchField: () => void;
  identityField: string | undefined;
} & React.ComponentPropsWithRef<"div">;

export const SearchInputField: React.FunctionComponent<
  SearchInputFieldProps
> = ({
  onClose,
  onSearch,
  identityField,
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
      <div className="flex items-center">
        <Icon className="mr-2 md:hidden" type="arrow-left" onClick={onClose} />
        <div className="gray-dark flex-grow rounded-xl border border-solid border-gray-dark md:bg-white/10">
          <div className="bg-inherit flex w-full items-center justify-between py-2.5 px-3">
            <Icon type="search" className="mr-2.5 hidden md:block" />
            <input
              type="text"
              onChange={onSearch}
              className="flex-grow bg-transparent text-sm outline-none disabled:opacity-10"
              placeholder={searchInputPlaceholder}
            />
            {identityField && (
              <Icon type="close" onClick={onClearSearchField} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
