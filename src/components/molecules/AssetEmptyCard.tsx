import { Button } from "components/atoms";
import React from "react";
import { Link } from "react-router-dom";

type AssetEmptyCardProps = {
  title: string;
  message: string;
  redirectPath: string;
  buttonLabel: string;
} & React.ComponentPropsWithRef<"div">;

/** Card to display empty assets list or details in assets pages*/
export const AssetEmptyCard: React.FunctionComponent<AssetEmptyCardProps> = ({
  message,
  title,
  buttonLabel,
  redirectPath,
  ...otherProps
}) => {
  return (
    <div {...otherProps}>
      <div className="flex flex-col items-center justify-center rounded-xl bg-gray-dark p-4">
        <span className="mb-2 text-lg font-semibold">{title}</span>
        <p className="mb-4 text-sm">{message}</p>
        <div className="w-full">
          <Link to={redirectPath}>
            <Button variant="contained" size="large">
              {buttonLabel}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
