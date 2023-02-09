import React, { useState, useCallback } from "react";
import { useIntl } from "react-intl";
import { IconButton, Icon, ButtonLink } from "components/atoms";
import { ReactComponent as VeridaOneLogo } from "assets/images/verida_one_logo.svg";
import { Link } from "react-router-dom";
import { config } from "lib/config";
import { SearchBar } from "./SearchBar";

export const Header: React.FC = () => {
  const i18n = useIntl();
  const [isSearch, setIsSearchBarOpen] = useState(false);

  const handleOpenSearchBar = useCallback(() => {
    setIsSearchBarOpen(true);
  }, []);
  const handleCloseSearchBar = useCallback(() => {
    setIsSearchBarOpen(false);
  }, []);

  // TODO: Remove the create your profile CTA when implementing the Connect
  // const connectButtonLabel = i18n.formatMessage({
  //   id: "Header.connectButtonLabel",
  //   description: "Label of the Connect button in the Header",
  //   defaultMessage: "Connect",
  // });

  const createYourProfileButtonLabel = i18n.formatMessage({
    id: "Header.createYourProfileButtonLabel",
    description: "Label of the CTA button in the Header to create a profile",
    defaultMessage: "Create your profile",
  });

  /** Header height is based on its content (h-10) + padding (py-3) + the border bottom.
   * Because of this border of 1px, the padding bottom should be py-[3 - '1px']. */
  // TODO: Update Tailwind config to allow spacing of 2.75 for the padding bottom
  // TODO: Follow the Figma design downsizing the logo and the button internal padding on small viewport (keep current size on large one)

  // Classname style to hide the logo and create profile button so that the search bar takes full width on mobile view
  const searchMobileViewVisibility = isSearch ? `hidden md:block` : "";

  return (
    <header className="box-border flex items-center justify-between space-x-2 border-b border-solid border-gray-dark bg-background px-4 py-3 opacity-80 md:px-6">
      <h1 className={searchMobileViewVisibility}>
        <Link to="/">
          <div className="h-10">
            <VeridaOneLogo height="100%" width="auto" />
          </div>
        </Link>
      </h1>
      {isSearch && (
        <div className="max-w-screen-sm flex-grow">
          <SearchBar onCloseSearchBar={handleCloseSearchBar} />
        </div>
      )}
      <div
        className={`${searchMobileViewVisibility} flex items-center justify-between space-x-3`}
      >
        {config.features.isSearchEnabled && !isSearch && (
          <IconButton
            size="medium"
            icon={<Icon type="search" />}
            onClick={handleOpenSearchBar}
          />
        )}
        {/* <Button size="medium">{connectButtonLabel}</Button> */}
        <ButtonLink
          url="https://www.verida.one/"
          target="_blank"
          rel="noopener"
          size="medium"
        >
          {createYourProfileButtonLabel}
        </ButtonLink>
      </div>
    </header>
  );
};

/** Offset for the heigh of the Header */
export const HeaderOffset: React.FunctionComponent = () => {
  return <div className="h-16 w-full" />;
};
