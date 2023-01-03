import React, { useEffect, useState } from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";
import { defaultLocale, getMessages, getUserLocale } from "lib/lang";
import { LocalizedMessages } from "lib/types";

interface Props {
  children: React.ReactNode;
}

export const IntlProvider: React.FunctionComponent<Props> = (props) => {
  const [messages, setMessages] = useState<LocalizedMessages | undefined>(
    undefined
  );
  const locale = getUserLocale();

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const messages = await getMessages(locale);
        setMessages(messages);
      } catch (error) {
        // TODO Handle error
      }
    };
    void loadMessages();
  }, [locale]);

  return (
    <ReactIntlProvider
      key={locale}
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      {props.children}
    </ReactIntlProvider>
  );
};
