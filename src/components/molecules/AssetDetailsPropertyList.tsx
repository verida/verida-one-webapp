import { AssetPropertyInfo } from "lib/types";
import React from "react";
import { AssetDetailsPropertyItem } from "./AssetDetailsPropertyItem";

type AssetDetailsPropertyListProps = {
  properties: AssetPropertyInfo[];
} & React.ComponentPropsWithRef<"div">;

export const AssetDetailsPropertyList: React.FC<
  AssetDetailsPropertyListProps
> = (props) => {
  const { properties, ...divProps } = props;

  return (
    <div {...divProps}>
      <ul className="space-y-4">
        {properties.map((property) => (
          <li key={property.propertyLabel}>
            <AssetDetailsPropertyItem
              label={property.propertyLabel}
              valueToCopyToClipboard={
                property.enableCopyToClipboard ? property.value : undefined
              }
            >
              {property.formattedValue}
            </AssetDetailsPropertyItem>
          </li>
        ))}
      </ul>
    </div>
  );
};
