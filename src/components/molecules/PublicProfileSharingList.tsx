import React from "react";
import { useIntl } from "react-intl";
import { Icon } from "components/atoms";
import { CopyToClipboardButton } from "./CopyToClipboardButton";
import { getSocialMediaShareUrl } from "lib/utils";
import { IdentityInfo } from "lib/types";
import { SocialMedia, VERIDA_ONE_URL } from "lib/constants";

type PublicProfileSharingListProps = {
  identityInfo: IdentityInfo;
};
export const PublicProfileSharingList: React.FunctionComponent<
  PublicProfileSharingListProps
> = ({ identityInfo }) => {
  const i18n = useIntl();

  const socialMediaShareUrl = `${VERIDA_ONE_URL}/${identityInfo.did}`;

  const shareViaTelegramTitle = i18n.formatMessage({
    id: "PublicProfileSharingList.shareViaTelegramTitle",
    defaultMessage: "Share via Telegram",
    description: "Telegram Social Media Sharing Title",
  });

  const shareViaTwitterTitle = i18n.formatMessage({
    id: "PublicProfileSharingList.shareViaTwitterTitle",
    defaultMessage: "Share via Twitter",
    description: "Twitter Social Media Sharing Title",
  });

  const shareViaWhatsAppTitle = i18n.formatMessage({
    id: "PublicProfileSharingList.shareViaWhatsAppTitle",
    defaultMessage: "Share via WhatsApp",
    description: "WhatsApp Social Media Sharing Title",
  });

  const shareViaMessengerTitle = i18n.formatMessage({
    id: "PublicProfileSharingList.shareViaMessengerTitle",
    defaultMessage: "Share via Messenger",
    description: "Messenger Social Media Sharing Title",
  });

  const shareViaEmailTitle = i18n.formatMessage({
    id: "PublicProfileSharingList.shareViaEmailTitle",
    defaultMessage: "Share via Email",
    description: "Email Social Media Sharing Title",
  });

  const copyLinkLabel = i18n.formatMessage({
    id: "PublicProfileSharingList.copyLinkLabel",
    defaultMessage: "Copy link",
    description: "Label of the copy link",
  });

  const socialMediaShareTitle = i18n.formatMessage({
    id: "PublicProfileSharingList.socialMediaShareTitle",
    defaultMessage: "Checkout my verida one profile",
    description: "Title for the social media sharing",
  });

  const socialMediaList = [
    {
      title: shareViaTelegramTitle,
      link: getSocialMediaShareUrl(
        SocialMedia.TELEGRAM,
        socialMediaShareUrl,
        socialMediaShareTitle
      ),
      icon: <Icon type="social-telegram" />,
    },
    {
      title: shareViaTwitterTitle,
      link: getSocialMediaShareUrl(
        SocialMedia.TWITTER,
        socialMediaShareUrl,
        socialMediaShareTitle
      ),
      icon: <Icon type="social-twitter" />,
    },
    {
      title: shareViaWhatsAppTitle,
      link: getSocialMediaShareUrl(
        SocialMedia.WHATSAPP,
        socialMediaShareUrl,
        socialMediaShareTitle
      ),
      icon: <Icon type="social-whatsapp" />,
    },
    {
      title: shareViaMessengerTitle,
      link: getSocialMediaShareUrl(
        SocialMedia.FACEBOOK,
        socialMediaShareUrl,
        socialMediaShareTitle
      ),
      icon: <Icon type="social-messenger" />,
    },
    {
      title: shareViaEmailTitle,
      link: getSocialMediaShareUrl(
        SocialMedia.EMAIL,
        socialMediaShareUrl,
        socialMediaShareTitle
      ),
      icon: <Icon type="social-email" />,
    },
  ];

  return (
    <div className="space-y-7">
      {socialMediaList.map((item) => (
        <a
          className="flex items-center hover:text-primary/60"
          target="_blank"
          key={item.title}
          rel="noopener noreferrer"
          href={item.link}
        >
          <div className="flex items-center">
            {item.icon}
            <span className="ml-4.5">{item.title}</span>
          </div>
        </a>
      ))}
      <div className="flex items-center">
        <CopyToClipboardButton
          className="-ml-1 -mt-2"
          value={socialMediaShareUrl}
        />
        <span className="ml-3 -mt-0.5">{copyLinkLabel}</span>
      </div>
    </div>
  );
};
