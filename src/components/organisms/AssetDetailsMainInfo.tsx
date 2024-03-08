import React from "react";
import { useIntl } from "react-intl";

type AssetDetailCardProps = {
  collectionLabel?: string | null;
  tokenLabel?: string | null;
  description?: string | null;
} & React.ComponentPropsWithRef<"div">;

/** Component displaying the main information of an asset: collection label, token label and description. */
export const AssetDetailsMainInfo: React.FC<AssetDetailCardProps> = (props) => {
  const { collectionLabel, tokenLabel, description, ...divProps } = props;

  const i18n = useIntl();

  const descriptionTitle = i18n.formatMessage({
    id: "AssetDetailsMainInfo.descriptionTitle",
    defaultMessage: "Description",
    description: "Title above the description of an asset in the details page",
  });

  return (
    <div {...divProps}>
      {collectionLabel && (
        <div className="mb-1 line-clamp-1 text-sm font-normal text-gray-light sm:font-semibold">
          {collectionLabel}
        </div>
      )}
      {tokenLabel && (
        <h2 className="mb-4 line-clamp-2 text-xl font-bold leading-6">
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
