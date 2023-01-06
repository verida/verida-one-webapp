import { ArrowRight } from "@icon-park/react";
import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

type BadgeSectionProps = {
  data?: [];
};

// TODO: To rework when needed
export const BadgesSection: React.FC<BadgeSectionProps> = ({ data = [] }) => {
  const i18n = useIntl();

  const sectionTitle = i18n.formatMessage({
    id: "BadgesSection.sectionTitle",
    description: "Title of the 'Badges' section in the 'Profile' page",
    defaultMessage: "Badges",
  });

  //TODO: Implement Badges hexagon UI

  return (
    <section>
      <div className="mb-3.5 flex items-center justify-between">
        <div className="flex items-center">
          <h3 className="mr-1.5 font-semibold ">{sectionTitle}</h3>
          <span className="rounded bg-gray-dark p-0.5 text-[11px]">
            {data.length}
          </span>
        </div>
        <Link to="/" className="mr-2">
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
};
