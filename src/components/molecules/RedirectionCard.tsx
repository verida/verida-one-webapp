import { Button } from "components/atoms";
import React from "react";
import { Link } from "react-router-dom";

type RedirectionCardProps = {
  title: string;
  message: string;
  redirectPath: string;
  buttonLabel: string;
} & React.ComponentPropsWithRef<"div">;

/** Card displaying a title, message and a redirection button*/
export const RedirectionCard: React.FunctionComponent<RedirectionCardProps> = ({
  message,
  title,
  buttonLabel,
  redirectPath,
  ...otherProps
}) => {
  // TODO: update the button to an internal button link when available
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
