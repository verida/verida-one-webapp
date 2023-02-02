import React, { useState } from "react";
import {
  Modal,
  PublicProfileSharingList,
  SharePublicProfile,
} from "components/molecules";
import { IdentityInfo } from "lib/types";
import { useIntl } from "react-intl";
import { useCallback } from "react";

type ShareModalProps = {
  identityInfo: IdentityInfo;
  open: boolean;
  handleCloseModal: () => void;
};

export const ShareModal: React.FunctionComponent<ShareModalProps> = ({
  open,
  identityInfo,
  handleCloseModal,
}) => {
  const [isFallbackProfileShare, setIsFallbackProfileShare] = useState(false);
  const i18n = useIntl();

  const shareModalTitle = i18n.formatMessage({
    id: "ShareModal.shareModalTitle",
    defaultMessage: "Share",
    description: "Title for the share modal",
  });

  const handleFallbackProfileSharing = useCallback(() => {
    setIsFallbackProfileShare(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsFallbackProfileShare(false);
    handleCloseModal();
  }, [handleCloseModal]);

  return (
    <Modal
      open={open}
      title={isFallbackProfileShare ? shareModalTitle : identityInfo.name}
      handleClose={handleClose}
    >
      {isFallbackProfileShare ? (
        <PublicProfileSharingList identityInfo={identityInfo} />
      ) : (
        <SharePublicProfile
          identityInfo={identityInfo}
          handleFallbackProfileSharing={handleFallbackProfileSharing}
        />
      )}
    </Modal>
  );
};
