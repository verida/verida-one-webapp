import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { Icon, IconButton } from "components/atoms";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

type shareItems = {
  value: string | undefined;
};

type ShareProfileDataProps = {
  shareItems?: shareItems[];
  username?: string;
  QRlink: string;
  handleShareProfileData: () => void;
};

export const ShareProfileData: React.FunctionComponent<
  ShareProfileDataProps
> = ({ shareItems = [], QRlink, username, handleShareProfileData }) => {
  return (
    <div>
      <div className="mb-6 flex flex-col items-center justify-center md:mb-10">
        <QRCodeSVG
          includeMargin={true}
          className="h-52 w-52 rounded-[19px] md:h-96 md:w-96"
          value={QRlink}
        />
        <span className="mt-1 text-gray-light">{username}</span>
      </div>
      {shareItems
        .filter((item) => item.value)
        .map((item) => (
          <div
            className={`mb-2 rounded-xl bg-gray-dark py-4.5 px-4`}
            key={item.value}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold" title={item.value}>
                {item.value}
              </span>
              <div className="flex items-center justify-center space-x-3">
                <CopyToClipboardButton value={item?.value as string} />
                <IconButton
                  size="small"
                  variant="text"
                  icon={<Icon type="share" />}
                  onClick={handleShareProfileData}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
