import React from "react";
import { ButtonBase } from "./ButtonBase";

type ButtonProps = Omit<
  React.ComponentPropsWithoutRef<typeof ButtonBase>,
  "shape"
>;

export const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonBase {...props} shape={"standard"} />;
};
