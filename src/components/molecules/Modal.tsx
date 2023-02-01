import React, { useCallback, useId } from "react";
import { Icon, IconButton } from "components/atoms";
import PortalWrapper from "./PortalWrapper";
import { useEffect } from "react";

type ModalProps = {
  title?: string;
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<"div">;

const KEY_NAME_ESC = "Escape";
const KEY_EVENT_TYPE = "keydown";

export const Modal: React.FunctionComponent<ModalProps> = ({
  children,
  title,
  open,
  handleClose,
  ...otherProps
}) => {
  const modalId = useId();
  const handleCloseOnEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === KEY_NAME_ESC) {
        handleClose();
      }
    },
    [handleClose]
  );
  useEffect(() => {
    document.body.addEventListener(KEY_EVENT_TYPE, handleCloseOnEscapeKey);
    return () => {
      document.body.removeEventListener(KEY_EVENT_TYPE, handleCloseOnEscapeKey);
    };
  }, [handleCloseOnEscapeKey]);

  if (!open) {
    return null;
  }

  return (
    <PortalWrapper>
      <div {...otherProps}>
        <div
          className="modal-container"
          aria-labelledby={title}
          role="dialog"
          id={modalId}
          aria-modal="true"
        >
          <div className="modal-content">
            <div className="flex items-center justify-between px-4 pt-6 md:px-8 md:pt-8">
              <div />
              <span className="text-lg font-semibold leading-5">{title}</span>
              <IconButton
                size="small"
                variant="text"
                onClick={handleClose}
                icon={<Icon type="close" size={14} />}
              />
            </div>
            <div className="flex flex-col justify-center p-4 md:p-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </PortalWrapper>
  );
};
