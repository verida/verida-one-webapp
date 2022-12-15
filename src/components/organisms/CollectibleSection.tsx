import React from "react";
import { useIntl } from "react-intl";
import { ArrowRight } from "@icon-park/react";
import { AssetsCard } from "components/molecules";
import { Link } from "react-router-dom";

type CollectibleSectionProps = {
  data: {
    title: string;
    tagNumber: string;
    price: string;
    tokenSymbol: string;
    image: string;
    icon: React.ReactElement;
  }[];
};

export const CollectibleSection: React.FC<CollectibleSectionProps> = ({
  data,
}) => {
  const i18n = useIntl();

  const contentTitle = i18n.formatMessage({
    id: "App.CollectibleSectionTitle",
    description: "Collectibles",
    defaultMessage: "Collectibles",
  });

  //TODO: Implement carousel feature

  return (
    <section className="text-white">
      <div className="mb-3.5 flex items-center justify-between">
        <div className="flex items-center">
          <h3 className="mr-1.5 text-sm font-semibold ">{contentTitle}</h3>
          <span className="rounded bg-gray-dark p-0.5 text-[11px]">
            {data.length}
          </span>
        </div>
        <Link to="/" className="mr-2">
          <ArrowRight />
        </Link>
      </div>
      <div className="flex space-x-2">
        {data.map((item, index) => (
          <AssetsCard
            key={index}
            image={item.image}
            price={item.price}
            tokenSymbol={item.tokenSymbol}
            chipIcon={item.icon}
            title={item.title}
            tagNumber={item.tagNumber}
            variant="lg"
          />
        ))}
      </div>
    </section>
  );
};
