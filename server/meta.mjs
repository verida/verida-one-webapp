export const defaultTitle = "Verida One";
export const defaultUrl = "https://www.verida.one/"; // TODO: Get it from env var to accomodate self-hosting

export const titlePlaceholder = "__META_TITLE__";
export const titleRegExp = new RegExp(titlePlaceholder, "g");

export const urlPlaceholder = "__META_URL__";
export const urlRegExp = new RegExp(urlPlaceholder, "g");
