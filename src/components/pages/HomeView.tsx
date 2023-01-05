import React from "react";
import logo from "assets/images/verida_one_logo.png";
import { useIntl } from "react-intl";

export const HomeView: React.FunctionComponent = () => {
  const i18n = useIntl();

  const comingSoonMessage = i18n.formatMessage({
    id: "HomeView.ComingSoon",
    description: "Message stating that the app will be available soon",
    defaultMessage: "Coming Soon",
  });

  const logoAlt = i18n.formatMessage({
    id: "HomeView.LogoAlt",
    description: "Alternate text for the logo image",
    defaultMessage: "Verida One Logo",
  });

  return (
    <div className="flex flex-grow flex-col items-center justify-center space-y-12 p-8">
      <img src={logo} alt={logoAlt} className="w-full max-w-fit" />
      <p className="text-xl md:text-4xl">{comingSoonMessage}</p>
    </div>
  );
};
