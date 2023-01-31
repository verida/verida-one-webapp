import { WebUserProfile } from "@verida/account-web-vault";

export interface ResolvedIdentity {
  did: string;
  username?: string;
}

export interface IdentityInfo extends WebUserProfile, ResolvedIdentity {}
