import React from "react";
import { Icon, IconButton } from "components/atoms";
import PortalWrapper from "./PortalWrapper";

type ModalProps = {
  title?: string;
  open: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<"div">;

export const Modal: React.FunctionComponent<ModalProps> = ({
  children,
  title,
  open,
  handleCloseModal,
}) => {
  if (!open) {
    return null;
  }

  return (
    <PortalWrapper>
      <div className="modal-container">
        <div className="modal-content">
          <div className="flex items-center justify-between p-4 pt-6 md:p-8">
            <div />
            <span className="text-lg font-semibold leading-5">{title}</span>
            <IconButton
              size="small"
              variant="text"
              onClick={handleCloseModal}
              icon={<Icon type="close" size={14} />}
            />
          </div>
          <div className="flex flex-col justify-center p-4 md:p-8">
            {children}
          </div>
        </div>
      </div>
    </PortalWrapper>
  );
};
