import React from "react";

type ChipProps = React.ComponentPropsWithoutRef<"div">;

export const Chip: React.FunctionComponent<ChipProps> = (props) => {
  const { children, className = "", ...otherProps } = props;

  // TODO: Maybe add an intermediate div to avoid conflicting classes?
  return (
    <div
      {...otherProps}
      className={`rounded-full bg-transparent p-1 backdrop-blur-xs ${className}`}
    >
      {children}
    </div>
  );
};
