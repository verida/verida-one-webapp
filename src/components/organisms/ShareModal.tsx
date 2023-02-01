import React from "react";
import {
  Modal,
  PublicProfileSharingList,
  SharePublicProfile,
} from "components/molecules";
import { IdentityInfo } from "lib/types";
import { useIntl } from "react-intl";

type ShareModalProps = {
  identityInfo: IdentityInfo;
  open: boolean;
  handleCloseModal: () => void;
  isFallbackProfileShare: boolean;
  handleFallbackProfileSharing: () => void;
};

export const ShareModal: React.FunctionComponent<ShareModalProps> = ({
  open,
  identityInfo,
  handleCloseModal,
  isFallbackProfileShare,
  handleFallbackProfileSharing,
}) => {
  const i18n = useIntl();

  const shareModalTitle = i18n.formatMessage({
    id: "ShareModal.shareModalTitle",
    defaultMessage: "Share",
    description: "Title for the share modal",
  });

  return (
    <div>
      <Modal
        open={open}
        title={isFallbackProfileShare ? shareModalTitle : identityInfo.name}
        handleClose={handleCloseModal}
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
    </div>
  );
};
