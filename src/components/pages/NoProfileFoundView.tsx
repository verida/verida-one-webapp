import React from "react";
import { useIntl } from "react-intl";

export const NoProfileFoundView: React.FunctionComponent = () => {
  const i18n = useIntl();

  // Temporary message, to delete when implementing the component
  const message = i18n.formatMessage({
    id: "NotProfileFoundView.message",
    defaultMessage: "No Profile Found",
  });

  return (
    <div className="flex flex-grow flex-col items-center space-y-12 p-8">
      <p className="text-xl md:text-4xl">{message}</p>
    </div>
  );
};
