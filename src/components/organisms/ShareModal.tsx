import React, { useCallback, useState } from "react";
import { Icon, IconButton } from "components/atoms";
import {
  Modal,
  ShareProfileData,
  SocialMediaShareList,
} from "components/molecules";
import { IdentityInfo } from "lib/types";
import { truncateDid } from "lib/utils";
import { useIntl } from "react-intl";

type ShareModalProps = {
  identityInfo: IdentityInfo;
  open: boolean;
  handleClose: () => void;
};

export const ShareModal: React.FunctionComponent<ShareModalProps> = ({
  open,
  identityInfo,
  handleClose,
}) => {
  const i18n = useIntl();
  const [hasSharePopUp, setSharePopUp] = useState(false);

  const shareModalTitle = i18n.formatMessage({
    id: "ShareModal.shareModalTitle",
    defaultMessage: "Share",
    description: "Title for the share modal",
  });

  const shareItems = [
    {
      value: truncateDid(identityInfo.did),
    },
    {
      value: identityInfo.username,
    },
  ];

  const handleShareProfileData = useCallback(() => {
    setSharePopUp(true);
  }, []);

  return (
    <div>
      <IconButton icon={<Icon type="share" />} onClick={handleClose} />
      <Modal
        open={open}
        title={hasSharePopUp ? shareModalTitle : identityInfo.name}
        handleCloseModal={handleClose}
      >
        {hasSharePopUp ? (
          <SocialMediaShareList />
        ) : (
          <ShareProfileData
            QRlink=""
            shareItems={shareItems}
            username={identityInfo.username}
            handleShareProfileData={handleShareProfileData}
          />
        )}
      </Modal>
    </div>
  );
};
