import React from "react";
import logo from "./verida_one_logo.png";
import "./App.css";
import { useIntl } from "react-intl";

export const App = () => {
  const i18n = useIntl();

  const comingSoonMessage = i18n.formatMessage({
    id: "App.ComingSoon",
    description: "Message stating that the app will be available soon",
    defaultMessage: "Coming Soon",
  });

  const logoAlt = i18n.formatMessage({
    id: "App.LogoAlt",
    description: "Alternate text for the logo image",
    defaultMessage: "Verida One Logo",
  });

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt={logoAlt} />
      <p>{comingSoonMessage}</p>
    </div>
  );
};
