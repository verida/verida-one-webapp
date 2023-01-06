import React from "react";
import { useIntl } from "react-intl";

type AssetDetailCardProps = {
  collectionLabel: string;
  description?: string;
  tokenLabel: string;
} & React.ComponentPropsWithRef<"div">;

export const AssetDetailsCard: React.FC<AssetDetailCardProps> = ({
  collectionLabel,
  tokenLabel,
  description,
  ...otherProps
}) => {
  const i18n = useIntl();

  const descriptionText = i18n.formatMessage({
    id: "AssetDetailsCard.description",
    defaultMessage: "Description",
  });

  return (
    <div {...otherProps}>
      <h3 className="mb-1 text-sm font-normal text-gray-light">
        {collectionLabel}
      </h3>
      <h4 className="mb-4 text-xl font-bold">
        {collectionLabel}
        {tokenLabel}
      </h4>
      {description && (
        <div>
          <span className="mb-2 text-lg">{descriptionText}</span>
          <p className="text-sm text-gray-light  transition-all">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};
