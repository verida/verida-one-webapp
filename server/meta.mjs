/** Default title of the web page. We could introduce a environment variable if needed. */
export const defaultTitle = "Verida One";

/** Placeholder used in the built html file for the title of the page */
export const titlePlaceholder = "__META_TITLE__";
export const titleRegExp = new RegExp(titlePlaceholder, "g");

/** Placeholder used in the built html file for the meta url of the page */
export const urlPlaceholder = "__META_URL__";
export const urlRegExp = new RegExp(urlPlaceholder, "g");
