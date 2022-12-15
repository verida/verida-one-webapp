import { useContext } from "react";
import { VeridaContext } from "lib/contexts";

export const useVerida = () => {
  return useContext(VeridaContext);
};
