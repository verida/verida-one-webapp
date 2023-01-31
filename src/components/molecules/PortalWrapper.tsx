import React from "react";
import { createPortal } from "react-dom";

type PortalWrapperProps = {
  children: React.ReactNode;
};

//TODO: improve to handle other components intended to be rendered outside the parent component.
const PortalWrapper: React.FunctionComponent<PortalWrapperProps> = ({
  children,
}) => {
  return createPortal(children, document.body);
};

export default PortalWrapper;
