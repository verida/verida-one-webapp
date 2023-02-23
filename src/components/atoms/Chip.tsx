import React from "react";

type ChipProps = React.ComponentPropsWithoutRef<"div">;

export const Chip: React.FunctionComponent<ChipProps> = (props) => {
  const { children, className = "", ...otherProps } = props;

  // TODO: Maybe add an intermediate div to avoid conflicting classes?
  return (
    <div
      {...otherProps}
      className={`bg-translucent rounded-full p-1 backdrop-blur-xs ${className}`}
    >
      {children}
    </div>
  );
};
