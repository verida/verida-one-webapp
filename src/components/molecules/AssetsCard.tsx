import React from "react";
import nftImage from "../../assets/nft_image.png";
import { ChipLabel } from "../atoms";

type AssetsCardProps = {
  image: string;
  title: string;
  tagNumber: string;
  chipLabel: string;
  variant?: "lg" | "sm";
  chipIcon?: React.ReactElement;
};

export const AssetsCard: React.FC<AssetsCardProps> = ({
  title,
  tagNumber,
  chipLabel,
  variant,
  chipIcon,
}) => {
  const sizeVariant = variant === "sm" ? "w-20 h-20" : "h-40 w-40 ";

  return (
    <div>
      <div
        className={`relative ${sizeVariant} rounded-lg bg-contain bg-center`}
        style={{
          backgroundImage: `url(${nftImage})`,
        }}
      >
        <ChipLabel
          styles="absolute -bottom-0 m-1"
          label={chipLabel}
          variant={variant}
          icon={chipIcon}
        />
      </div>
      {variant !== "sm" && (
        <div>
          <h3 className="mt-2 text-sm font-normal text-gray-light">{title}</h3>
          <span className="mt-1 font-bold text-white">{tagNumber}</span>
        </div>
      )}
    </div>
  );
};
