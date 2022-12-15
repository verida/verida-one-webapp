import React from "react";
import { useIntl } from "react-intl";
import { IconButton } from "components/atoms";

type Data = {
  connected: boolean;
  icon: React.ReactElement;
};

type SocialSectionProps = {
  data: Data[];
};

export const SocialSection: React.FC<SocialSectionProps> = ({ data }) => {
  const i18n = useIntl();

  const contentTitle = i18n.formatMessage({
    id: "App.SocialSectionTitle",
    description: "Socials",
    defaultMessage: "Socials",
  });

  return (
    <section>
      <h3 className="mb-3.5 text-sm font-semibold text-white">
        {contentTitle}
      </h3>
      <div className="flex space-x-2">
        {data.map((item, index) => (
          <div key={index}>
            {
              <IconButton
                variant="rounded-full"
                icon={item.icon}
                connected={item.connected}
              />
            }
          </div>
        ))}
      </div>
    </section>
  );
};
