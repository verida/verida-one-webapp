import React from "react";
import { useIntl } from "react-intl";
import { LinkButton } from "components/atoms";
import { ActivityCard } from "components/molecules";

type ActivityDataList = {
  profile: {
    avatar: string;
    name: string;
    timeStamp: string;
  };
  bodyText: string;
  image?: string;
  icon: React.ReactElement;
  connected: boolean;
};

type ActivitySectionProps = {
  data: ActivityDataList[];
};

export const ActivitySection: React.FC<ActivitySectionProps> = ({ data }) => {
  const i18n = useIntl();

  const contentTitle = i18n.formatMessage({
    id: "App.ActivitySectionTitle",
    description: "Activity",
    defaultMessage: "Activity",
  });

  return (
    <section>
      <h3 className="mb-3.5 text-sm font-semibold text-white">
        {contentTitle}
      </h3>
      <div className="space-y-2">
        {data.map((item, index) => (
          <ActivityCard
            key={index}
            icon={item.icon}
            profile={item.profile}
            bodyText={item.bodyText}
            image={item.image}
          />
        ))}
      </div>
      <div className="my-2">
        <LinkButton label="Show more" link="/" />
      </div>
    </section>
  );
};
