import React from "react";
import { Icon } from "./Icon";

type AvatarProps = {
  image?: string;
  alt?: string;
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

export const Avatar: React.FunctionComponent<AvatarProps> = (props) => {
  const { image, alt = "avatar", ...otherProps } = props;

  const avatar = image ? (
    <img
      src={image}
      alt={alt}
      className={`border-1 aspect-square h-full rounded-full border border-primary/60 object-cover`}
    />
  ) : (
    <Icon
      type="user"
      size="70%"
      className={`flex aspect-square h-full items-center justify-center rounded-full border-2 border-primary/60 bg-gray-dark`}
    />
  );

  return <div {...otherProps}>{avatar}</div>;
};
