import React from "react";
import { useIntl } from "react-intl";
import { LinkButton } from "components/atoms";

type LinksData = {
  title: string;
  link: string;
};

type LinkSectionProps = {
  data: LinksData[];
};

export const LinkSection: React.FC<LinkSectionProps> = ({ data }) => {
  const i18n = useIntl();

  const contentTitle = i18n.formatMessage({
    id: "App.LinkSectionTitle",
    description: "Links",
    defaultMessage: "Links",
  });

  return (
    <section>
      <h3 className="mb-3.5 text-sm font-semibold text-white">
        {contentTitle}
      </h3>
      <div className="space-y-2">
        {data.map((item, index) => (
          <LinkButton key={index} link={item.link} label={item.title} />
        ))}
      </div>
    </section>
  );
};
