import { MessageFormatElement } from "react-intl";

export type SupportedLocales = {
  key: string;
  label: string;
  messagesFileName: string;
};

export type LocalizedMessages =
  | Record<string, string>
  | Record<string, MessageFormatElement[]>;
