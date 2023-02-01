import React, { useCallback } from "react";
import QRCode from "react-qr-code";
import { useIntl } from "react-intl";
import { Icon, IconButton } from "components/atoms";
import { CopyToClipboardButton } from "./CopyToClipboardButton";
import { removeURLSubString, shareProfile, truncateDid } from "lib/utils";
import { VERIDA_NETWORK_EXPLORER_URL, VERIDA_ONE_URL } from "lib/constants";
import { IdentityInfo } from "lib/types";

type SharePublicProfileProps = {
  identityInfo: IdentityInfo;
  handleFallbackProfileSharing: () => void;
};

export const SharePublicProfile: React.FunctionComponent<
  SharePublicProfileProps
> = ({ identityInfo, handleFallbackProfileSharing }) => {
  const i18n = useIntl();

  const profileDidUrl = `${VERIDA_NETWORK_EXPLORER_URL}/${identityInfo.did}`;
  const profileUsernameUrl = `${removeURLSubString(VERIDA_ONE_URL)}/${
    identityInfo.username || truncateDid(identityInfo.did)
  }`;

  const socialMediaShareTitle = i18n.formatMessage({
    id: "SharePublicProfile.socialMediaShareTitle",
    defaultMessage: "Checkout my verida one profile",
    description: "Title for the social media sharing",
  });

  const handleShareProfile = useCallback(
    async (info: string) => {
      const response = await shareProfile({
        url: `${VERIDA_ONE_URL}/${info}`,
        title: socialMediaShareTitle,
      });

      if (!response) {
        handleFallbackProfileSharing();
      }
    },
    [handleFallbackProfileSharing, socialMediaShareTitle]
  );

  const shareItems = [
    {
      value: truncateDid(identityInfo.did),
    },
    {
      value: identityInfo.username as string,
    },
  ];

  return (
    <div>
      <div className="mb-6 flex flex-col items-center justify-center md:mb-10">
        <div className="rounded-[19px] bg-white p-3">
          <QRCode value={profileDidUrl} />
        </div>
        <span className="mt-1 text-gray-light">{profileUsernameUrl}</span>
      </div>
      {shareItems
        .filter((item) => item.value)
        .map((item) => (
          <div
            className={`mb-2 rounded-xl bg-gray-dark py-3 px-4`}
            key={item.value}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold" title={item.value}>
                {item.value}
              </span>
              <div className="flex items-center justify-center space-x-3">
                <CopyToClipboardButton value={item?.value} />
                <IconButton
                  size="small"
                  variant="text"
                  icon={<Icon type="share" />}
                  onClick={() => void handleShareProfile(item.value)}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
