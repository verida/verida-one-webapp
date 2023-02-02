import React, { useCallback } from "react";
import { Icon, IconButton } from "components/atoms";
import { PortalWrapper } from "./PortalWrapper";
import { useEffect } from "react";

type ModalProps = {
  title?: string;
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
};

const KEY_NAME_ESC = "Escape";
const KEY_EVENT_TYPE = "keydown";

export const Modal: React.FunctionComponent<ModalProps> = ({
  children,
  title,
  open,
  handleClose,
  ...otherProps
}) => {
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
      <div className="fixed inset-0 z-50 flex min-h-full w-full bg-background/80 backdrop-blur-[10px]" />
      <div
        className="relative"
        aria-labelledby={title}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="z-50 flex min-h-full w-full items-end justify-center text-center sm:items-center sm:p-0">
            <div className="relative w-full  overflow-hidden rounded-lg rounded-tl-3xl rounded-tr-3xl border border-solid border-gray-dark bg-background text-left shadow-xl transition-all sm:my-8 sm:max-w-lg md:rounded-3xl">
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
      </div>
    </PortalWrapper>
  );
};
