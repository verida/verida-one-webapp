import React from "react";

type SkeletonBaseProps = {
  rounded?: "rounded-full" | "rounded-lg" | "rounded-xl" | "rounded-none";
} & React.ComponentPropsWithoutRef<"div">;

export const SkeletonBase: React.FunctionComponent<SkeletonBaseProps> = (
  props
) => {
  const { rounded = "rounded-full", ...divProps } = props;

  return (
    <div {...divProps}>
      <div className={`h-full w-full bg-primary ${rounded}`}></div>
    </div>
  );
};
