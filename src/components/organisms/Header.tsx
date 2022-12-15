import { Search } from "@icon-park/react";
import React from "react";
import { useIntl } from "react-intl";

import logo from "assets/verida_one_logo.png";
import { Button, IconButton } from "components/atoms";

export const Header: React.FC = () => {
  const i18n = useIntl();

  const logoAlt = i18n.formatMessage({
    id: "App.LogoAlt",
    description: "Alternate text for the logo image",
    defaultMessage: "Verida One Logo",
  });

  return (
    <header className="flex items-center justify-between border-b border-solid border-gray-dark bg-background px-4 py-3.5 opacity-80 backdrop-blur-md">
      <img src={logo} alt={logoAlt} className="h-10" />
      <div className="flex items-center justify-between space-x-2.5">
        <IconButton icon={<Search />} />
        <Button label="Connect" />
      </div>
    </header>
  );
};
