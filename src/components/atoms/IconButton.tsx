import React from "react";
import Icon, { IconType, Theme } from "@icon-park/react/es/all";
import { ReactComponent as CheckedIcon } from "../../assets/icons/verida_tick.svg";

type IconButtonProps = {
  onClick?: () => void;
  label?: string;
  isActive?: boolean;
  variant?: "rounded" | "rounded-full";
  iconType: IconType;
  styles?: string;
  iconTheme?: Theme;
  iconSize?: number | string;
};

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  iconType,
  isActive,
  iconSize = "1.25em",
  iconTheme = "filled",
  variant = "rounded",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex p-2.5 ${variant} items-center justify-center bg-gray-dark text-white hover:opacity-30`}
    >
      <Icon type={iconType} theme={iconTheme} size={iconSize} />
      {isActive && <CheckedIcon className="absolute bottom-0 right-0" />}
    </button>
  );
};
