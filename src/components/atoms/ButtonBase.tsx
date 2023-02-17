import React from "react";

type ButtonVariant = "text" | "contained";
type ButtonSize = "no-margin" | "small" | "medium" | "large" | "xlarge";
type ButtonShape = "standard" | "square";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
} & Omit<React.ComponentPropsWithoutRef<"button">, "type">;

export const ButtonBase: React.FunctionComponent<ButtonBaseProps> = (props) => {
  const {
    variant = "contained",
    size = "medium",
    shape = "standard",
    children,
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
    size === "no-margin" || size === "small" ? "rounded-lg" : "rounded-xl";

  const background =
    variant === "text"
      ? "hover:bg-background-button"
      : "bg-background-button hover:bg-background-button-hover";

  return (
    <button
      {...otherProps}
      type="button"
      className={`flex items-center justify-center space-x-2.5 font-medium disabled:opacity-20 ${background} ${padding} ${radius} ${className}`}
    >
      {children}
    </button>
  );
};
