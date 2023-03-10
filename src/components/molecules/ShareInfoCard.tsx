import React from "react";
import { Icon, IconButton } from "components/atoms";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

type ShareInfoCardProps = {
  label: string;
  value: string;
  displayedValue: string;
  onClickShare: () => void;
} & React.ComponentPropsWithoutRef<"div">;

export const ShareInfoCard: React.FunctionComponent<ShareInfoCardProps> = ({
  label,
  value,
  displayedValue,
  onClickShare,
  ...divProps
}) => {
  return (
    <div {...divProps}>
      <div className="rounded-xl bg-gray-dark py-2 px-4">
        <div className="flex min-w-0 items-center justify-between space-x-3">
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-semibold">{label}</span>
            <span className="truncate text-primary/60" title={value}>
              {displayedValue}
            </span>
          </div>
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
