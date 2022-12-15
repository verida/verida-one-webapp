import React from "react";
import { ChipLabel } from "components/atoms";

type AssetsCardProps = {
  image: string;
  title?: string;
  tagNumber?: string;
  price: string;
  tokenSymbol: string;
  variant?: "lg" | "sm";
  chipIcon?: React.ReactElement;
};

export const AssetsCard: React.FC<AssetsCardProps> = ({
  title,
  price,
  image,
  variant,
  tagNumber,
  chipIcon,
  tokenSymbol,
}) => {
  const query = `(min-width: 640px)`;
  const mediaMatch = window.matchMedia(query).matches;
  const sizeVariant =
    variant === "sm" && mediaMatch
      ? "h-40 w-40 "
      : variant === "lg"
      ? "h-40 w-40 "
      : "h-20 w-20";

  return (
    <div>
      <div className={`relative ${sizeVariant}`}>
        <img src={image} className="rounded-lg bg-cover" alt={tagNumber} />
        <ChipLabel
          styles="absolute -bottom-0 m-1"
          price={price}
          icon={chipIcon}
          variant={variant}
          tokenSymbol={tokenSymbol}
        />
      </div>
      {((variant === "sm" && mediaMatch) || variant === "lg") && (
        <div>
          <h3 className="mt-2 text-sm font-normal text-gray-light">{title}</h3>
          <span className="mt-1 font-bold text-white">{tagNumber}</span>
        </div>
      )}
    </div>
  );
};
