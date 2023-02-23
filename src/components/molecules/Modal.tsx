import React, { useCallback, useId } from "react";
import { Icon, IconButton } from "components/atoms";
import { PortalWrapper } from "./PortalWrapper";
import { useEffect } from "react";

type ModalProps = {
  title?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const KEY_NAME_ESC = "Escape";
const KEY_EVENT_TYPE = "keydown";

export const Modal: React.FunctionComponent<ModalProps> = ({
  children,
  title,
  open,
  onClose,
}) => {
  const labelId = useId();

  const handleCloseOnEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === KEY_NAME_ESC) {
        onClose();
      }
    },
    [onClose]
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
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-[10px]"
        onClick={onClose}
      />
      <div
        className="fixed bottom-0 z-50 w-full rounded-t-3xl border border-solid border-gray-dark bg-background sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:max-w-2xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-b-3xl"
        aria-labelledby={labelId}
        role="dialog"
        aria-modal="true"
      >
        <div className="relative overflow-hidden p-4 pt-6 sm:p-8">
          <div className="mb-5 flex items-center justify-between sm:mb-8">
            <div className="w-8" />
            <h1 className="text-lg font-semibold leading-5" id={labelId}>
              {title}
            </h1>
            <IconButton
              size="small"
              variant="text"
              onClick={onClose}
              icon={<Icon type="close" size={20} />}
            />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </PortalWrapper>
  );
};
