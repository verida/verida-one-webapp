import React from "react";

type ButtonVariant = "text" | "contained";
type ButtonLinkSize = "no-margin" | "small" | "medium" | "large" | "xlarge";
type ButtonLinkShape = "standard" | "square" | "circle";

type ButtonLinkBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonLinkSize;
  shape?: ButtonLinkShape;
  url: string;
} & React.ComponentPropsWithoutRef<"a">;

export const ButtonLinkBase: React.FunctionComponent<ButtonLinkBaseProps> = (
  props
) => {
  const {
    variant = "contained",
    size = "medium",
    shape = "standard",
    children,
    url,
    className = "",
    ...otherProps
  } = props;

  const padding =
    size === "no-margin"
      ? `p-0`
      : size === "small"
      ? `py-1.5 ${shape === "standard" ? "px-2" : "px-1.5"}`
      : size === "xlarge"
      ? `py-4.5 ${shape === "standard" ? "px-5" : "px-4.5"} w-full`
      : size === "large"
      ? `py-3.5 ${shape === "standard" ? "px-4" : "px-3.5"} w-full`
      : `py-2.5 ${shape === "standard" ? "px-4" : "px-2.5"}`;

  const radius =
    shape === "circle"
      ? "rounded-full"
      : size === "no-margin" || size === "small"
      ? "rounded-lg"
      : "rounded-xl";

  const background =
    variant === "text"
      ? "hover:bg-background-button"
      : "bg-background-button hover:bg-background-button-hover";

  return (
    <a
      {...otherProps}
      href={url}
      className={`flex items-center justify-center space-x-2.5 font-medium disabled:opacity-20 ${background} ${padding} ${radius} ${className}`}
    >
      {children}
    </a>
  );
};
