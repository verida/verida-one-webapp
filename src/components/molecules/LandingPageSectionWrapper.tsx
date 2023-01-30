import React from "react";

type LandingPageSectionWrapperProps = {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<"div">;

export const LandingPageSectionWrapper: React.FunctionComponent<
  LandingPageSectionWrapperProps
> = ({ title, subTitle, children, ...otherProps }) => {
  return (
    <div {...otherProps}>
      <div className="text-center">
        <div className="mb-4">
          <span className="landing-page-heading text-[64px] font-bold leading-[70px] tracking-wider">
            {title}
          </span>
        </div>
        {subTitle && (
          <span className="text-xl text-primary/60">{subTitle}</span>
        )}
        {children}
      </div>
    </div>
  );
};
