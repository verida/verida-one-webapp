import React from "react";
import { Icon } from "components/atoms";
import { useIntl } from "react-intl";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

export const SocialMediaShareList: React.FunctionComponent = () => {
  const i18n = useIntl();

  const shareThroughTelegramTitle = i18n.formatMessage({
    id: "SocialMediaShareList.shareThroughTelegramTitle",
    defaultMessage: "Share via Telegram",
    description: "Telegram Social Media Sharing Title",
  });

  const shareThroughTwitterTitle = i18n.formatMessage({
    id: "SocialMediaShareList.shareThroughTwitterTitle",
    defaultMessage: "Share via Twitter",
    description: "Twitter Social Media Sharing Title",
  });

  const shareThroughWhatsAppTitle = i18n.formatMessage({
    id: "SocialMediaShareList.shareThroughWhatsAppTitle",
    defaultMessage: "Share via WhatsApp",
    description: "WhatsApp Social Media Sharing Title",
  });

  const shareThroughMessengerTitle = i18n.formatMessage({
    id: "SocialMediaShareList.shareThroughMessengerTitle",
    defaultMessage: "Share via Messenger",
    description: "Messenger Social Media Sharing Title",
  });

  const shareThroughEmailTitle = i18n.formatMessage({
    id: "SocialMediaShareList.shareThroughEmailTitle",
    defaultMessage: "Share via Email",
    description: "Email Social Media Sharing Title",
  });
  const copyLinkLabel = i18n.formatMessage({
    id: "SocialMediaShareList.copyLinkLabel",
    defaultMessage: "Copy link",
    description: "Label of the copy link",
  });

  const shareList = [
    {
      title: shareThroughTelegramTitle,
      link: "",
      icon: <Icon type="social-telegram" />,
    },
    {
      title: shareThroughTwitterTitle,
      link: "",
      icon: <Icon type="social-twitter" />,
    },
    {
      title: shareThroughWhatsAppTitle,
      link: "",
      icon: <Icon type="social-whatsapp" />,
    },
    {
      title: shareThroughMessengerTitle,
      link: "",
      icon: <Icon type="social-messenger" />,
    },
    {
      title: shareThroughEmailTitle,
      link: "",
      icon: <Icon type="social-email" />,
    },
  ];

  return (
    <div className="space-y-7">
      {shareList.map((item) => (
        <div className="flex items-center" key={item.title}>
          {item.icon}
          <span className="ml-4.5">{item.title}</span>
        </div>
      ))}
      <div className="flex items-center">
        <CopyToClipboardButton className="-ml-1 -mt-2" value="" />
        <span className="ml-3 -mt-0.5">{copyLinkLabel}</span>
      </div>
    </div>
  );
};
