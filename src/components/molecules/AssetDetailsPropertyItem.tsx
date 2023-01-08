import React from "react";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

type AssetDetailsPropertyItemProps = {
  label: string;
  children?: React.ReactNode;
  valueToCopyToClipboard?: string;
} & React.ComponentPropsWithRef<"div">;

export const AssetDetailsPropertyItem: React.FunctionComponent<
  AssetDetailsPropertyItemProps
> = (props) => {
  const { label, children, valueToCopyToClipboard, ...divProps } = props;

  return (
    <div {...divProps}>
      <div className="flex items-center justify-between text-sm">
        <div>{label}</div>
        {children && (
          <div className="flex max-w-[40%] items-center">
            {valueToCopyToClipboard && (
              <CopyToClipboardButton
                value={valueToCopyToClipboard}
                iconSize={14}
              />
            )}
            <div className="truncate">{children}</div>
          </div>
        )}
      </div>
    </div>
  );
};
