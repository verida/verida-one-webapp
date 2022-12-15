import React from "react";
import { ReactComponent as CheckedIcon } from "assets/icons/verida_tick.svg";

type IconButtonProps = {
  onClick?: () => void;
  label?: string;
  connected?: boolean;
  variant?: "rounded" | "rounded-full";
  styles?: string;
  icon: React.ReactElement;
  iconSize?: number | string;
  customIcon?: React.ReactElement;
} & React.ComponentPropsWithoutRef<"button">;

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  connected,
  customIcon,
  iconSize = "1.25em",
  variant = "rounded-xl",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex p-2.5 ${variant} items-center justify-center bg-gray-dark text-white hover:opacity-30`}
    >
      {icon}
      {connected && <CheckedIcon className="absolute bottom-0 right-0" />}
    </button>
  );
};
