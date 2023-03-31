import React, { useCallback } from "react";
import QRCode from "react-qr-code";
import { useIntl } from "react-intl";
import { hasWebShare, shareProfile } from "lib/utils";
import { IdentityInfo } from "lib/types";
import { ShareInfoCard } from "components/molecules";

type ShareModalProfileContentProps = {
  identityInfo: IdentityInfo;
  handleFallbackSharing: (data: ShareData) => void;
};

export const ShareModalProfileContent: React.FunctionComponent<
  ShareModalProfileContentProps
> = ({ identityInfo, handleFallbackSharing }) => {
  const i18n = useIntl();

  const profileUrl = window.location.href;
  const displayedProfileUrl = `${window.location.host}${window.location.pathname}`;

  const profileUrlShareCardLabel = i18n.formatMessage({
    id: "ShareModalProfileContent.profileUrlShareCardLabel",
    defaultMessage: "Profile Link",
    description: "Label of the share card for the profile url",
  });

  const didShareCardLabel = i18n.formatMessage({
    id: "ShareModalProfileContent.didShareCardLabel",
    defaultMessage: "DID",
    description: "Label of the share card for the DID",
  });

  const profileUrlShareTitle = i18n.formatMessage({
    id: "ShareModalProfileContent.profileUrlShareTitle",
    defaultMessage: "Checkout my Verida One profile",
    description:
      "Title used in the native sharing function for the profile URL",
  });

  const didShareTitle = i18n.formatMessage({
    id: "ShareModalProfileContent.didShareTitle",
    defaultMessage: "Here is my Verida DID",
    description: "Title used in the native sharing function for the DID",
  });

  const profileUrlShareData: ShareData = {
    url: profileUrl,
    title: profileUrlShareTitle,
  };

  const didShareData: ShareData = {
    text: identityInfo.did,
    title: didShareTitle,
  };

  const handleClickShare = useCallback(
    async (data: ShareData) => {
      if (!hasWebShare()) {
        return handleFallbackSharing(data);
      }

      await shareProfile(data);
    },
    [handleFallbackSharing]
  );

  return (
    <div>
      <div className="mb-6 flex flex-col items-center justify-center sm:mb-10">
        <div className="aspect-square max-w-xs rounded-3xl bg-white p-3">
          <QRCode
            value={profileUrl}
            style={{ height: "auto", width: "100%" }}
            size={296} // max width of 320 - padding of 24
          />
        </div>
        <span
          className="mt-1 w-full max-w-xs truncate text-center text-gray-light"
          title={profileUrl}
        >
          {displayedProfileUrl}
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        <ShareInfoCard
          label={profileUrlShareCardLabel}
          value={profileUrl}
          displayedValue={displayedProfileUrl}
          onClickShare={() => void handleClickShare(profileUrlShareData)}
        />
        {identityInfo.did ? (
          <ShareInfoCard
            label={didShareCardLabel}
            value={identityInfo.did}
            displayedValue={identityInfo.did}
            onClickShare={() => void handleClickShare(didShareData)}
          />
        ) : null}
      </div>
    </div>
  );
};
