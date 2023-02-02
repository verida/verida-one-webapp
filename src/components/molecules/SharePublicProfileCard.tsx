import React from "react";
import { Icon, IconButton } from "components/atoms";
import { CopyToClipboardButton } from "./CopyToClipboardButton";
import { removeURLSubString } from "lib/utils";
import { IdentityInfo } from "lib/types";

type SharePublicProfileCardProps = {
  identityInfo: IdentityInfo;
  handleShareProfile: (arg: string) => Promise<void>;
};

export const SharePublicProfileCard: React.FunctionComponent<
  SharePublicProfileCardProps
> = ({ identityInfo, handleShareProfile }) => {
  const veridaOneUrl = window.origin;

  const trucatedUsername =
    identityInfo.username &&
    `${removeURLSubString(veridaOneUrl)}/${identityInfo.username}`;

  return (
    <div>
      {identityInfo.username && (
        <div className={`mb-2 rounded-xl bg-gray-dark py-3 px-4`}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">{trucatedUsername}</span>
            <div className="flex items-center justify-center space-x-3">
              <CopyToClipboardButton value={identityInfo.username} />
              <IconButton
                size="small"
                variant="text"
                icon={<Icon type="share" />}
                onClick={() =>
                  void handleShareProfile(identityInfo.username as string)
                }
              />
            </div>
          </div>
        </div>
      )}
      <div className={`mb-2 rounded-xl bg-gray-dark py-3 px-4`}>
        <div className="flex min-w-0 items-center justify-between">
          <span className="truncate text-sm font-semibold">
            {identityInfo.did}
          </span>
          <div className="flex items-center justify-center space-x-3">
            <CopyToClipboardButton value={identityInfo.did} />
            <IconButton
              size="small"
              variant="text"
              icon={<Icon type="share" />}
              onClick={() => void handleShareProfile(identityInfo.did)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
