import React from "react";
import { Icon } from "./Icon";

type AvatarSize = "small" | "large";

type AvatarProps = {
  image?: string;
  alt?: string;
  size?: AvatarSize;
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

export const Avatar: React.FunctionComponent<AvatarProps> = (props) => {
  const { image, alt = "avatar", size = "large", ...otherProps } = props;

  // Using the tailwind values for sizing, 10 = 2.5rem = 40px, 16 = 4rem = 64px
  const sizeValue = size === "large" ? 16 : 10;

  const avatar = image ? (
    <img
      src={image}
      alt={alt}
      className={`h-${sizeValue} border-1 aspect-square rounded-full border border-primary/60`}
    />
  ) : (
    <Icon
      type="user"
      size={sizeValue * 2.5} // The Icon takes a size px directly, hence the multiplicator, set at 2.5 (instead of 4) so the icon is smaller than the the container
      className={`h-${sizeValue} flex aspect-square items-center justify-center rounded-full border-2 border-primary/60 bg-gray-dark`}
    />
  );

  return <div {...otherProps}>{avatar}</div>;
};
