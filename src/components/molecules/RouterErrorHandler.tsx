import React from "react";
import { useRouteError } from "react-router-dom";
import { useErrorHandler } from "lib/hooks";

/**
 * This component is simply forwarding the router errors to the closest ErrorBoundary
 */
export const RouterErrorHandler: React.FunctionComponent = () => {
  const error = useRouteError();
  useErrorHandler(error);
  return null;
};
