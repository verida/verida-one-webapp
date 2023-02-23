import React, { useState, useCallback, useRef } from "react";
import { useIntl } from "react-intl";
import { IconButton, Icon, ButtonLink } from "components/atoms";
import { ReactComponent as VeridaOneLogoWithText } from "assets/images/verida_one_logo_with_text.svg";
import { ReactComponent as VeridaOneLogo } from "assets/images/verida_one_logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { HeaderSearchBar } from "./HeaderSearchBar";

export const Header: React.FC = () => {
  const i18n = useIntl();
  const [isSearchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate();

  const searchFieldRef = useRef<HTMLInputElement>(null);

  const handleOpenSearchButton = useCallback(() => {
    setSearchOpen(true);
    // Give the time for the input to be visible, otherwise focus has no effect
    setTimeout(() => searchFieldRef.current?.focus(), 500);
  }, []);

  const handleCloseSearchButton = useCallback(() => {
    setSearchOpen(false);
  }, []);

  const handleClickSearchResultItem = useCallback(
    (identity: string) => {
      navigate(`/${identity}`);
      setSearchOpen(false);
    },
    [navigate]
  );

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

  // TODO: Follow the Figma design downsizing the logo and the button internal padding on small viewport (keep current size on large one)

  const hideWhenSearch = isSearchOpen ? `hidden sm:block` : "";
  const searchVisibility = isSearchOpen ? "col-span-full" : "hidden";

  return (
    <header
      className={`grid grid-cols-[minmax(165px,_1fr)_minmax(min-content,696px)_minmax(165px,_1fr)] border-b border-solid border-gray-dark bg-background/80 px-4 pt-3 pb-[calc(0.75rem_-_1px)] backdrop-blur-[10px] sm:px-6`}
    >
      <h1 className={`col-start-1 justify-self-start ${hideWhenSearch}`}>
        <Link to="/">
          <div className="aspect-[10/6.97] h-10 sm:hidden">
            <VeridaOneLogo height="100%" width="100%" />
          </div>
          <div className="hidden aspect-[10/3] h-10 sm:block">
            <VeridaOneLogoWithText height="100%" width="100%" />
          </div>
        </Link>
      </h1>
      <div
        className={`${searchVisibility} flex sm:col-auto sm:col-start-2 sm:block sm:max-w-screen-sm sm:px-4`}
      >
        <HeaderSearchBar
          inputRef={searchFieldRef}
          className="flex-grow sm:bg-white/0"
          onClickResultItem={handleClickSearchResultItem}
          onClickBack={handleCloseSearchButton}
        />
      </div>
      <div
        className={`col-start-3 flex items-center justify-between justify-self-end ${hideWhenSearch}`}
      >
        <IconButton
          size="medium"
          className="mr-3 sm:hidden"
          icon={<Icon type="search" />}
          onClick={handleOpenSearchButton}
        />
        {/* {config.features.isVeridaConnectEnabled && (
          <Button size="medium">{connectButtonLabel}</Button>
        )} */}
        <ButtonLink
          url="https://www.verida.one/"
          target="_blank"
          rel="noopener"
          size="medium"
          className="whitespace-nowrap"
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
