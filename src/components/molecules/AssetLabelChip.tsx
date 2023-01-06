import { Icon, IconType } from "components/atoms";
import React from "react";

type AssetLabelChipProps = {
  label: string | number;
  iconType: IconType;
} & React.ComponentPropsWithRef<"div">;

export const AssetLabelChip: React.FC<AssetLabelChipProps> = ({
  label,
  iconType,
  ...otherProps
}) => {
  return (
    <div {...otherProps} className="flex space-x-1 ">
      <Icon type={iconType} />
      <span>{label}</span>
    </div>
  );
};
