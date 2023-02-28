import React from "react";

export type AssetPropertyInfo = {
  propertyLabel: string;
  valueToDisplay?: React.ReactNode;
  valueToCopy?: string;
  valueForTitle?: string;
  enableCopyToClipboard?: boolean;
};
