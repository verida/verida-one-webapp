import React from "react";

type ChainIconContainerProps = {
  icon: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

export const ChainIconContainer: React.FunctionComponent<
  ChainIconContainerProps
> = (props) => {
  const { icon, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <div className="flex items-center justify-center rounded-full bg-background-button p-2 backdrop-blur">
        {icon}
      </div>
    </div>
  );
};
