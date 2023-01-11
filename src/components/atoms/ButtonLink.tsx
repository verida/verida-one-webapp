import React from "react";
import { ButtonLinkBase } from "./ButtonLinkBase";

type ButtonLinkProps = Omit<
  React.ComponentPropsWithoutRef<typeof ButtonLinkBase>,
  "shape"
>;

export const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
  return <ButtonLinkBase shape="standard" {...props} />;
};
