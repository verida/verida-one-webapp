import { useCallback, useContext, useEffect, useState } from "react";
import { VeridaContext } from "lib/contexts";
import { Client, Context } from "@verida/client-ts";
import { VaultAccount, WebUserProfile } from "@verida/account-web-vault";

export const useVerida = () => {
  const { webUserInstanceRef } = useContext(VeridaContext);
  // const webUserInstance = webUserInstanceRef.current;

  // const [isConnected, setIsConnected] = useState(false);
  //const [client, setClient] = useState<Client>();
  // const [context, setContext] = useState<Context>();
  // const [account, setAccount] = useState<VaultAccount>();
  // const [did, setDid] = useState<string>();
  // const [profile, setProfile] = useState<WebUserProfile>();

  // const updateStates = useCallback(async () => {
  //   const [_isConnected, _client, _context, _account, _did, _profile] =
  //     await Promise.all([
  //       webUserInstance.isConnected(),
  //       // webUserInstance.getClient(),
  //       // webUserInstance.getContext(),
  //       // webUserInstance.getAccount(),
  //       // webUserInstance.getDid(),
  //       webUserInstance.getPublicProfile(),
  //     ]);
  //   // setIsConnected(_isConnected);
  //   // setClient(_client);
  //   // setContext(_context);
  //   // setAccount(_account);
  //   // setDid(_did);
  //   // setProfile(_profile);
  // }, [webUserInstance]);

  // const eventListener = useCallback(() => {
  //   void updateStates();
  // }, [updateStates]);

  // useEffect(() => {
  //   const handler = async () => {
  //     await updateStates();
  //   };
  //   void handler();
  //   webUserInstance.addListener("connected", eventListener);
  //   webUserInstance.addListener("profileChanged", eventListener);
  //   webUserInstance.addListener("disconnected", eventListener);
  //   return () => {
  //     webUserInstance.removeListener("connected", eventListener);
  //     webUserInstance.removeListener("profileChanged", eventListener);
  //     webUserInstance.removeListener("disconnected", eventListener);
  //   };
  // }, [webUserInstance, updateStates, eventListener]);

  // TODO: Expose the 'connect', 'disconnect', and other methods when needed.

  return {
    // isConnected,
    // client,
    // context,
    // account,
    // did,
    // profile,
  };
};
