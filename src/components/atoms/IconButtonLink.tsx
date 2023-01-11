import React from "react";
import { ButtonLinkBase } from "./ButtonLinkBase";

type IconButtonLinkProps = {
  icon: React.ReactNode;
  shape: "square" | "circle";
} & Omit<
  React.ComponentPropsWithoutRef<typeof ButtonLinkBase>,
  "children" | "shape"
>;

export const IconButtonLink: React.FunctionComponent<IconButtonLinkProps> = (
  props
) => {
  const { icon, shape, ...otherProps } = props;

  return (
    <ButtonLinkBase shape={shape} {...otherProps}>
      {icon}
    </ButtonLinkBase>
  );
};
