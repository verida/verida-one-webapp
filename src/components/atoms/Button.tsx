import React from "react";
import Icon, { IconType, Theme } from "@icon-park/react/es/all";

type ButtonColorVariant = "primary" | "secondary";

type ButtonProps = {
  label: string;
  styles?: string;
  iconType?: IconType;
  onClickHandler: () => void;
  iconTheme?: Theme;
  variant?: ButtonColorVariant;
} & React.ComponentPropsWithoutRef<"button">;

export const Button: React.FC<ButtonProps> = ({
  onClickHandler,
  styles = "w-fit",
  iconType,
  label,
  iconTheme = "outline",
  variant = "primary",
  ...rest
}) => {
  const variantColor =
    variant === "primary" ? "bg-gray-dark" : "bg-white text-black";

  return (
    <button
      {...rest}
      className={`${styles} flex items-center justify-center space-x-2.5 rounded-xl ${variantColor} px-4 py-2.5 text-sm font-medium text-white hover:opacity-30 disabled:opacity-20`}
      type="button"
      onClick={onClickHandler}
    >
      {iconType && (
        <span className=" mr-2">
          <Icon
            type={iconType}
            theme={iconTheme}
            fill={variant === "primary" ? "#fff" : "#000"}
          />
        </span>
      )}
      {label}
    </button>
  );
};
