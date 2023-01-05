import React from "react";
import { useIntl } from "react-intl";

export const BadgeListView: React.FunctionComponent = () => {
  const i18n = useIntl();

  // Temporary message, to delete when implementing the component
  const message = i18n.formatMessage({
    id: "BadgeListView.message",
    defaultMessage: "Badge list",
  });

  return (
    <div className="flex flex-grow flex-col items-center space-y-12 p-8">
      <p className="text-xl md:text-4xl">{message}</p>
    </div>
  );
};