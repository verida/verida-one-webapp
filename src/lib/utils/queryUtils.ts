export const queryKeys = {
  resolveIdentity: (identity: string) => [
    { scope: "ResolvedIdentity", identity },
  ],
  identityInfo: (did: string) => [{ scope: "IdentityInfo", did }],
};
