import React from "react";
import logo from "./verida_one_logo.png";
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
    <div className="flex min-h-screen flex-col items-center justify-center space-y-12 bg-background p-8 text-white">
      <img src={logo} alt={logoAlt} className="w-full max-w-fit" />
      <p className="text-xl md:text-4xl">{comingSoonMessage}</p>
      <p className="font-light">{comingSoonMessage}</p>
      <p className="font-normal">{comingSoonMessage}</p>
      <p className="font-medium">{comingSoonMessage}</p>
      <p className="font-semibold">{comingSoonMessage}</p>
      <h1 className="font-bold">{comingSoonMessage}</h1>
    </div>
  );
};
