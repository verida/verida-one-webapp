import React from "react";
import { useIntl } from "react-intl";
import { Icon, IconButton } from "components/atoms";

type SearchInputFieldProps = {
  query: string;
  onQueryUpdate: (newQuery: string) => void;
  onClose?: () => void;
} & React.ComponentPropsWithRef<"div">;

export const SearchInputField: React.FunctionComponent<
  SearchInputFieldProps
> = (props) => {
  const { query, onClose, onQueryUpdate, ...otherProps } = props;
  const i18n = useIntl();

  const searchInputPlaceholder = i18n.formatMessage({
    id: "SearchInputField.searchInputPlaceholder",
    description: "Placeholder for the search bar input field",
    defaultMessage: "Search DID",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onQueryUpdate(e.target.value);
  };

  const handleClear = () => {
    onQueryUpdate("");
  };

  return (
    <div {...otherProps}>
      <div className="flex items-center px-3 py-2.5 sm:bg-white/0 sm:p-0">
        <IconButton
          variant="text"
          size="no-margin"
          onClick={onClose}
          className="mr-2 sm:hidden"
          icon={<Icon type="arrow-left" />}
        />
        <div className="gray-dark flex-grow rounded-xl border border-solid border-gray-dark sm:bg-white/10">
          <div className="flex items-center justify-between py-2.5 px-3">
            <Icon type="search" className="mr-2.5 hidden sm:block" />
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder={searchInputPlaceholder}
              className="flex-grow bg-white/0 text-sm outline-none disabled:opacity-10"
            />
            {query ? (
              <IconButton
                variant="text"
                size="no-margin"
                icon={<Icon type="close" />}
                onClick={handleClear}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
