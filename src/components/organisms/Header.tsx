import React, { useState, useCallback } from "react";
import { useIntl } from "react-intl";
import { IconButton, Icon, ButtonLink } from "components/atoms";
import { ReactComponent as VeridaOneLogo } from "assets/images/verida_one_logo.svg";
import { Link } from "react-router-dom";
import { config } from "lib/config";
import { HeaderSearchBar } from "./HeaderSearchBar";

export const Header: React.FC = () => {
  const i18n = useIntl();
  const [searchBarOpenStatus, setSearchBarOpenStatus] = useState(false);

  const handleManageSearchBarOpening = useCallback(() => {
    setSearchBarOpenStatus(true);
  }, []);

  const handleManageSearchBarClosing = useCallback(() => {
    setSearchBarOpenStatus(false);
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

  // Classname style to hide (display none) the logo and create profile button so that the search bar takes full width on mobile view
  const searchMobileViewVisibility = searchBarOpenStatus
    ? `hidden sm:block`
    : "";

  //Classname to give heaader a fixed hieght when search bar status is "true" because the header search bar has its position as :fixed
  const fixedHeightForMobileHeader = searchBarOpenStatus ? "h-16" : "";

  return (
    <header
      className={`${fixedHeightForMobileHeader} box-border flex items-center justify-between space-x-2 border-b border-solid border-gray-dark bg-background/80 px-4 py-3 backdrop-blur-[10px] md:px-6`}
    >
      <h1 className={searchMobileViewVisibility}>
        <Link to="/">
          <div className="h-10">
            <VeridaOneLogo height="100%" width="auto" />
          </div>
        </Link>
      </h1>
      <HeaderSearchBar className="hidden lg:block" />
      {searchBarOpenStatus && (
        <HeaderSearchBar
          className="lg:hidden"
          onClose={handleManageSearchBarClosing}
        />
      )}
      <div
        className={`${searchMobileViewVisibility} flex items-center justify-between space-x-3`}
      >
        {config.features.isSearchEnabled && !searchBarOpenStatus && (
          <IconButton
            size="medium"
            className="lg:hidden"
            icon={<Icon type="search" />}
            onClick={handleManageSearchBarOpening}
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
