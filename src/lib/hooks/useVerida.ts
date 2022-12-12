import { useContext } from "react";
import { VeridaContext } from "../contexts";

export const useVerida = () => {
  return useContext(VeridaContext);
};
