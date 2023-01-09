export * from "./chains";
export * from "./socialMedia";
export * from "./tailwind";

/** Duration in ms for which the icon stating the text has been copied to the clipboard is displayed */
export const COPIED_TO_CLIPBOARD_ICON_TIMEOUT = 2000;

/** Max number of Collectibles displayed in the profile section. A "Show All" button redirecting to the Collectibles page must be displayed if the total is more than this max value*/
export const MAX_COLLECTIBLES_IN_PROFILE_SECTION = 8;

/** URL of the CTA 'Create your own profile' in the footer */
export const CTA_CREATE_OWN_PROFILE_URL = "https://verida.io";

/** URL of verida developer docs */
export const VERIDA_DEVELOPERS_DOCUMENTATION_URL =
  "https://developers.verida.io/";

/** URL of verida terms & condition page */
export const VERIDA_TERMS_AND_CONDITIONS_URL =
  "https://www.verida.io/terms-and-conditions";
