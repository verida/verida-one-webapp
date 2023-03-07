import { AssetPropertyInfo } from "lib/types";
import React from "react";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

type AssetDetailsPropertyItemProps = {
  assetProperty: AssetPropertyInfo;
} & Omit<React.ComponentPropsWithRef<"div">, "children">;

export const AssetDetailsPropertyItem: React.FunctionComponent<
  AssetDetailsPropertyItemProps
> = (props) => {
  const { assetProperty, ...divProps } = props;

  return (
    <div {...divProps}>
      <div className="flex items-center justify-between text-sm">
        <div>{assetProperty.propertyLabel}</div>
        <div className="flex max-w-[50%] items-center">
          {assetProperty.enableCopyToClipboard && assetProperty.valueToCopy && (
            <CopyToClipboardButton
              value={assetProperty.valueToCopy}
              iconSize={14}
              className="-my-[0.1875rem]"
            />
          )}
          <div className="truncate" title={assetProperty.valueForTitle}>
            {assetProperty.valueToDisplay}
          </div>
        </div>
      </div>
    </div>
  );
};
