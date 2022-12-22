import React from "react";
import { ButtonBase } from "./ButtonBase";

type IconButtonProps = {
  icon: React.ReactNode;
} & Omit<
  React.ComponentPropsWithoutRef<typeof ButtonBase>,
  "children" | "shape"
>;

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const { icon, ...otherProps } = props;

  return (
    <ButtonBase {...otherProps} shape={"square"}>
      {icon}
    </ButtonBase>
  );
};
