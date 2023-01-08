import React from "react";

export type AssetPropertyInfo = {
  propertyLabel: string;
  value?: string;
  formattedValue?: React.ReactNode;
  enableCopyToClipboard?: boolean;
};
