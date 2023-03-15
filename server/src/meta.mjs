/** Default title of the web page. We could introduce a environment variable if needed. */
export const defaultTitle = "Verida One";

/** Default description of the web page. */
export const defaultDescription =
  "Verida One is a public, decentralized platform that allows you to showcase who you are across both Web2 and Web3";

/** Placeholder used in the built html file for the title of the page */
export const titlePlaceholder = "__META_TITLE__";
export const titleRegExp = new RegExp(titlePlaceholder, "g");

export const descriptionPlaceholder = "__META_DESCRIPTION__";
export const descriptionRegExp = new RegExp(descriptionPlaceholder, "g");

/** Placeholder used in the built html file for the meta url of the page */
export const urlPlaceholder = "__META_URL__";
export const urlRegExp = new RegExp(urlPlaceholder, "g");
