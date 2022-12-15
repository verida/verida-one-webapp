import React from "react";

type ButtonColorVariant = "primary" | "secondary";

type ButtonProps = {
  label: string;
  styles?: string;
  icon?: React.ReactElement;
  onClickHandler?: () => void;
  variant?: ButtonColorVariant;
} & React.ComponentPropsWithoutRef<"button">;

export const Button: React.FC<ButtonProps> = ({
  icon,
  label,
  onClickHandler,
  styles = "w-fit",
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
      <span className=" mr-2">{icon}</span>
      {label}
    </button>
  );
};
