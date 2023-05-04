import { WebUserProfile } from "@verida/web-helpers";

export interface ResolvedIdentity {
  did?: string;
  username?: string;
}

export interface IdentityInfo extends WebUserProfile, ResolvedIdentity {}
