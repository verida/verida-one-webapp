import React from "react";
import { useIntl } from "react-intl";

type AssetDetailCardProps = {
  collectionLabel?: string;
  tokenLabel?: string;
  description?: string;
} & React.ComponentPropsWithRef<"div">;

export const AssetDetailsMainInfo: React.FC<AssetDetailCardProps> = (props) => {
  const { collectionLabel, tokenLabel, description, ...divProps } = props;

  const i18n = useIntl();

  // TODO: Add in the messages file
  const descriptionTitle = i18n.formatMessage({
    id: "AssetDetailsMainInfo.descriptionTitle",
    defaultMessage: "Description",
    description: "Title above the description of an asset in the details page",
  });

  return (
    <div {...divProps}>
      {collectionLabel && (
        <div className="mb-1 text-sm font-normal text-gray-light line-clamp-1 sm:font-semibold">
          {collectionLabel}
        </div>
      )}
      {tokenLabel && (
        <h2 className="mb-4 text-xl font-bold leading-6 line-clamp-2">
          {tokenLabel}
        </h2>
      )}
      {description && (
        <div>
          <div className="mb-2 text-lg leading-5">{descriptionTitle}</div>
          <p className="text-sm text-gray-light">{description}</p>
          {/* TODO: Add line clamp on description showing a show more */}
        </div>
      )}
    </div>
  );
};
