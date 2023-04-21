import React, { useState } from "react";
import { Modal } from "components/molecules";
import { IdentityInfo } from "lib/types";
import { useIntl } from "react-intl";
import { useCallback } from "react";
import { ShareModalProfileContent } from "./ShareModalProfileContent";
import { ShareModalPlatformContent } from "./ShareModalPlatformContent";

type ShareModalProps = {
  identityInfo: IdentityInfo;
  open: boolean;
  onClose: () => void;
};

export const ShareModal: React.FunctionComponent<ShareModalProps> = ({
  open,
  identityInfo,
  onClose,
}) => {
  const [shareData, setShareData] = useState<ShareData | undefined>(undefined);
  const i18n = useIntl();

  const shareModalTitle = i18n.formatMessage({
    id: "ShareModal.shareModalTitle",
    defaultMessage: "Share",
    description: "Title for the share modal",
  });

  const handleFallbackProfileSharing = useCallback((data: ShareData) => {
    setShareData(data);
  }, []);

  const handleClose = useCallback(() => {
    setShareData(undefined);
    onClose();
  }, [onClose]);

  return (
    <Modal
      open={open}
      title={shareData ? shareModalTitle : identityInfo.name}
      onClose={handleClose}
    >
      {shareData ? (
        <ShareModalPlatformContent data={shareData} />
      ) : (
        <ShareModalProfileContent
          identityInfo={identityInfo}
          handleFallbackSharing={handleFallbackProfileSharing}
        />
      )}
    </Modal>
  );
};
