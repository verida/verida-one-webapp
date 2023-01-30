import React from "react";
import { Button } from "components/atoms";

type LandingPageSectionContentPops = {
  title: string;
  message: string;
  buttonLabel: string;
  contentImage: string;
  bgImageClass: string;
  reverseLayout?: boolean;
  handleButtonClick?: () => void;
} & React.ComponentPropsWithRef<"div">;

export const LandingPageSectionContent: React.FunctionComponent<
  LandingPageSectionContentPops
> = ({
  buttonLabel,
  contentImage,
  reverseLayout = false,
  handleButtonClick,
  bgImageClass,
  message,
  title,
  ...otherProps
}) => {
  const isdisplayReverse = reverseLayout ? "flex-row-reverse" : "";
  return (
    <div {...otherProps}>
      <div
        className={`${bgImageClass} flex ${isdisplayReverse} items-center justify-between rounded-3xl bg-gray px-[88px] pt-[88px] pb-14`}
      >
        <div className="flex w-full flex-1 flex-col items-start justify-center">
          <span className="mb-3 text-5xl font-bold">{title}</span>
          <p className="mb-4 text-xl font-normal text-primary/60 line-clamp-3">
            {message}
          </p>
          <div>
            <Button
              variant="contained"
              size="large"
              onClick={handleButtonClick}
            >
              {buttonLabel}
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <img src={contentImage} alt={title} />
        </div>
      </div>
    </div>
  );
};
