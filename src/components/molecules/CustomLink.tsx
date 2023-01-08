import React from "react";
import { CustomLink as CustomLinkType } from "lib/types";
import { ButtonLink } from "components/atoms";

type CustomLinkProps = {
  link: CustomLinkType;
} & Omit<
  React.ComponentPropsWithoutRef<typeof ButtonLink>,
  "size" | "url" | "target" | "rel" | "children"
>;

export const CustomLink: React.FunctionComponent<CustomLinkProps> = (props) => {
  const { link, ...otherProps } = props;

  return (
    <ButtonLink
      {...otherProps}
      size="xlarge"
      url={link.url}
      target="_blank"
      rel="noopener"
    >
      {link.label}
    </ButtonLink>
  );
};
