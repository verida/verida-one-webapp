import React from "react";
import { Close } from "@icon-park/react";

type ModalProps = {
  title: string;
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactElement;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  title,
  isOpen,
  closeModal,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      hidden={isOpen}
      className="fixed inset-0 z-[100] h-screen w-full overflow-y-auto overflow-x-hidden bg-background bg-opacity-80 p-4 text-white md:flex md:items-center md:justify-center"
    >
      <div className="fixed bottom-0 left-0 w-full max-w-2xl rounded-tr-3xl rounded-tl-3xl border border-solid border-gray-dark bg-background md:relative md:mx-auto md:h-auto md:max-w-2xl md:rounded-3xl ">
        <div className="relative bottom-0 rounded-lg shadow">
          <div className="flex items-start justify-between rounded-t py-6 px-4">
            <div />
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <Close theme="outline" size="1.25em" onClick={closeModal} />
          </div>
          <div className="space-y-6 p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};
