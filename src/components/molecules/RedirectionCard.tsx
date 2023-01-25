import { Button } from "components/atoms";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleRedirectButtonClick = useCallback(() => {
    navigate(redirectPath);
  }, [navigate, redirectPath]);

  return (
    <div {...otherProps}>
      <div className="flex flex-col items-center justify-center rounded-xl bg-gray p-4">
        <span className="mb-2 text-lg font-semibold">{title}</span>
        <p className="mb-4 text-sm text-white text-opacity-60">{message}</p>
        <div className="w-full">
          <Button
            variant="contained"
            size="large"
            onClick={handleRedirectButtonClick}
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
