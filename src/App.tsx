import React from "react";
import logo from "./verida_one_logo.png";
import { useIntl } from "react-intl";
import { useVerida } from "./lib/hooks/useVerida";

export const App = () => {
  const i18n = useIntl();
  const { connect } = useVerida();

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

  const connectMessage = i18n.formatMessage({
    id: "btn",
    description: "connect",
    defaultMessage: "Verida Connect",
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-12 bg-background p-8 text-white">
      <img src={logo} alt={logoAlt} className="w-full max-w-fit" />
      <p className="text-xl md:text-4xl">{comingSoonMessage}</p>
      <button onClick={() => void connect()}>{connectMessage}</button>
    </div>
  );
};
