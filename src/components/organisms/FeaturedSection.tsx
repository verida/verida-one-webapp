import React from "react";
import { useIntl } from "react-intl";
import { AssetsCard } from "components/molecules";
import { LinkButton } from "components/atoms";

type Data = {
  price: string;
  symbol: string;
  image: string;
  title: string;
  tagNumber: string;
};

type FeaturedSectionProps = {
  data: Data[];
};
export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ data }) => {
  const i18n = useIntl();

  const featuredTitle = i18n.formatMessage({
    id: "App.FeaturedSectionTitle",
    description: "Featured",
    defaultMessage: "Featured",
  });

  return (
    <div>
      <h3 className="mb-3.5 text-sm font-semibold text-white">
        {featuredTitle}
      </h3>
      <div className="flex space-x-2">
        {data.map((item, index) => (
          <AssetsCard
            variant="sm"
            key={index}
            title={item.title}
            image={item.image}
            price={item.price}
            tokenSymbol={item.symbol}
            tagNumber={item.tagNumber}
          />
        ))}
      </div>
      <div className="mt-3 space-y-2">
        <LinkButton label="Visit my website" link="/" />
        <LinkButton label="Check out my artworks" link="/" />
      </div>
    </div>
  );
};
