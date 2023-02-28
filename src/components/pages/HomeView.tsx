import React from "react";
import { ReactComponent as VeridaOneLogo } from "assets/images/verida_one_logo_with_text.svg";
import { useIntl } from "react-intl";

export const HomeView: React.FunctionComponent = () => {
  const i18n = useIntl();

  const comingSoonMessage = i18n.formatMessage({
    id: "HomeView.ComingSoon",
    description: "Message stating that the app will be available soon",
    defaultMessage: "Coming Soon",
  });

  return (
    <div className="flex flex-grow flex-col items-center justify-center space-y-12 p-8">
      <div className="aspect-[10/3] w-full">
        <VeridaOneLogo height="100%" width="100%" />
      </div>
      <p className="text-xl md:text-4xl">{comingSoonMessage}</p>
    </div>
  );
};
