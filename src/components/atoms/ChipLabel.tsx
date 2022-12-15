import React from "react";

type ChipLabelProps = {
  price: string;
  styles?: string;
  tokenSymbol: string;
  variant?: "lg" | "sm";
  icon?: React.ReactElement;
};

export const ChipLabel: React.FC<ChipLabelProps> = ({
  icon,
  price,
  variant,
  tokenSymbol,
  styles = "",
}) => {
  const variantStyle = variant === "sm" ? "text-[10px] p-0.5" : "text-sm p-1";
  return (
    <div className="inline text-white">
      <div
        className={`${styles} flex items-center justify-center rounded-[100px] bg-transparent  ${variantStyle}  backdrop-blur-xs`}
      >
        {variant !== "sm" && icon}
        <span className="ml-1">
          {price}
          {tokenSymbol}
        </span>
      </div>
    </div>
  );
};
