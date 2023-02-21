import React from "react";
import { Icon, IconButton } from "components/atoms";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

type ShareInfoCardProps = {
  value: string;
  displayedValue: string;
  onClickShare: () => void;
} & React.ComponentPropsWithoutRef<"div">;

export const ShareInfoCard: React.FunctionComponent<ShareInfoCardProps> = ({
  value,
  displayedValue,
  onClickShare,
  ...divProps
}) => {
  return (
    <div {...divProps}>
      <div className="rounded-xl bg-gray-dark py-3 px-4">
        <div className="flex min-w-0 items-center justify-between space-x-3">
          <span className="truncate text-sm font-semibold" title={value}>
            {displayedValue}
          </span>
          <div className="flex items-center justify-center space-x-3">
            <CopyToClipboardButton value={value} />
            <IconButton
              size="small"
              variant="text"
              icon={<Icon type="share" />}
              onClick={onClickShare}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
