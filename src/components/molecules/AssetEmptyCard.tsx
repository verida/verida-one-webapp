import { Button } from "components/atoms";
import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

type AssetEmptyCardProps = {
  title: string;
  message: string;
  identity?: string;
} & React.ComponentPropsWithRef<"div">;

/** Card to display empty assets list or details in assets pages*/
export const AssetEmptyCard: React.FunctionComponent<AssetEmptyCardProps> = ({
  message,
  title,
  identity,
  ...otherProps
}) => {
  const i18n = useIntl();
  const goToProfilePageLink = identity ? `/${identity}` : `/`;

  const goToProfilePageLinkLabel = i18n.formatMessage({
    id: "AssetEmptyCard.goToProfilePageLinkLabel",
    description: "Go to 'profile' page link label",
    defaultMessage: "Go to profile",
  });

  return (
    <div {...otherProps}>
      <div className="flex flex-col items-center justify-center rounded-xl bg-gray-dark p-4">
        <span className="mb-2 text-lg font-semibold">{title}</span>
        <p className="mb-4 text-sm">{message}</p>
        <div className="w-full">
          <Link to={goToProfilePageLink}>
            <Button variant="contained" size="large">
              {goToProfilePageLinkLabel}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
