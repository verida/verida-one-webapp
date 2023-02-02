import React, { useCallback } from "react";
import QRCode from "react-qr-code";
import { useIntl } from "react-intl";
import { removeURLSubString, shareProfile, truncateDid } from "lib/utils";
import { IdentityInfo } from "lib/types";
import { SharePublicProfileCard } from "./SharePublicProfileCard";

type SharePublicProfileProps = {
  identityInfo: IdentityInfo;
  handleFallbackProfileSharing: () => void;
};

export const SharePublicProfile: React.FunctionComponent<
  SharePublicProfileProps
> = ({ identityInfo, handleFallbackProfileSharing }) => {
  const i18n = useIntl();
  const veridaOneUrl = window.origin;

  const profileDidUrl = `${veridaOneUrl}/${identityInfo.did}`;
  const profileUsernameUrl = `${removeURLSubString(veridaOneUrl)}/${
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
        url: `${veridaOneUrl}/${info}`,
        title: socialMediaShareTitle,
      });

      if (!response) {
        handleFallbackProfileSharing();
      }
    },
    [handleFallbackProfileSharing, socialMediaShareTitle, veridaOneUrl]
  );

  return (
    <div>
      <div className="mb-6 flex flex-col items-center justify-center md:mb-10">
        <div className="rounded-[19px] bg-white p-3">
          <QRCode value={profileDidUrl} />
        </div>
        <span className="mt-1 text-gray-light">{profileUsernameUrl}</span>
      </div>
      <SharePublicProfileCard
        identityInfo={identityInfo}
        handleShareProfile={handleShareProfile}
      />
    </div>
  );
};
