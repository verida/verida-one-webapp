export * from "./chains";
export * from "./events";
export * from "./meta";
export * from "./profile";
export * from "./socialMedia";
export * from "./tailwind";
export * from "./url";

/** Duration in ms for which the icon stating the text has been copied to the clipboard is displayed */
export const COPIED_TO_CLIPBOARD_ICON_TIMEOUT = 2000;

/** Max number of Collectibles displayed in the profile section. A "Show All" button redirecting to the Collectibles page must be displayed if the total is more than this max value*/
export const MAX_COLLECTIBLES_IN_PROFILE_SECTION = 8;

/** Max number of badges displayed in the profile section. If the sum exceeds this maximum, a "Show All" button that directs to the badges page must appear.*/
export const MAX_BADGES_IN_PROFILE_SECTION = 8;

/** Max number of assets displayed in the Featured section of the profile */
export const MAX_ASSETS_IN_FEATURED_SECTION = 4;

/** Max number of links displayed in the Featured section of the profile */
export const MAX_LINKS_IN_FEATURED_SECTION = 2;

/** Start of a DID syntax */
export const DID_METHOD = "did:";

/** Verida DID method */
export const DID_VDA_METHOD = `${DID_METHOD}vda:`;

/** Extension of a Verida Username */
export const USERNAME_VDA_EXTENSION = ".vda";

/** Id of the default Verida One record in the "profiles" datastore */
export const VERIDA_ONE_PROFILE_RECORD_ID = "public";
