import { LocalizedMessages } from "../types";
import { defaultLocale, supportedLocales } from "./locales";

/** Utility function to get the user locale */
export const getUserLocale = (): string => {
  // Only english supported at the moment
  return navigator.language || defaultLocale;
};

const loadMessagesData = async (
  locale: string
): Promise<LocalizedMessages | undefined> => {
  const foundLocale = supportedLocales.find(
    (supportedLocale) => supportedLocale.key === locale
  );

  if (foundLocale) {
    // Dynamically load the message file.
    // In case no file found, default (english) messages should be available because hardcoded in the code
    return import(
      /* webpackPrefetch: true */ `./${foundLocale.messagesFileName}`
    ) as Promise<LocalizedMessages>;
  }
  return Promise.resolve(undefined);
};

/**
 * Get the messages for the given locale, fallback to the language if not found, fallback to the default if not found
 **/
export const getMessages = async (
  locale: string
): Promise<LocalizedMessages> => {
  let messages = await loadMessagesData(locale);
  if (!messages) {
    // Extract the language from the locale (first two characters).
    // Example 'en' for 'en-US'
    messages = await loadMessagesData(locale.split(/[-_]/)[0]);
  }
  if (!messages) {
    // Fallback to default. Consider it not undefined
    messages = (await loadMessagesData(defaultLocale)) as LocalizedMessages;
  }
  return messages;
};
