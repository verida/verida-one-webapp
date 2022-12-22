import React from "react";

type AssetMediaProps = {
  src: string; // Making src mandatory
  alt: string; // Making alt mandatory
  radius?: "rounded-lg" | "rounded-xl";
} & Omit<React.ComponentPropsWithoutRef<"img">, "src" | "alt">;

export const AssetMedia: React.FunctionComponent<AssetMediaProps> = (props) => {
  const {
    src,
    alt,
    radius = "rounded-xl",
    className = "",
    ...otherProps
  } = props;

  // TODO: Add an intermediary div/span to avoid classes conflicts?
  return (
    <img
      {...otherProps}
      src={src}
      alt={alt}
      className={`aspect-square bg-cover ${radius} ${className}`}
    />
  );
};
