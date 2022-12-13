import React from "react";
import { useIntl } from "react-intl";
import { Modal } from "./components/molecules";
import { Header } from "./components/organisms";

export const App = () => {
  const i18n = useIntl();

  const comingSoonMessage = i18n.formatMessage({
    id: "App.ComingSoon",
    description: "Message stating that the app will be available soon",
    defaultMessage: "Coming Soon",
  });

  return (
    <div className=" h-screen bg-background">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl text-white md:text-4xl">{comingSoonMessage}</p>
      </div>
    </div>
  );
};
