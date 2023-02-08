import React from "react";
import { defineMessage, useIntl } from "react-intl";
import {
  getSocialMediaLabel,
  getSocialMediaLogo,
  getSocialMediaShareUrl,
} from "lib/utils";
import { SocialMedia } from "lib/constants";
import { CopyToClipboardButton } from "components/molecules";

type ShareModalSocialMediaContentProps = {
  data: ShareData;
};

export const ShareModalSocialMediaContent: React.FunctionComponent<
  ShareModalSocialMediaContentProps
> = ({ data }) => {
  const i18n = useIntl();

  // Assumed it is not undefined because 'data' is coming from the other sharing component but it's not safe, potentially find a better way later.
  const contentToShare = (data.url || data.text) as string;
  const contentTitle = data.title as string;

  const socialMediaActionLabel = defineMessage({
    id: "ShareModalSocialMediaContent.socialMediaActionLabel",
    defaultMessage: "Share via {platformLabel}",
    description: "Label of the action to share content via a certain platform",
  });

  const copyContentLabel = i18n.formatMessage({
    id: "ShareModalSocialMediaContent.copyContentLabel",
    defaultMessage: "Copy to clipboard",
    description: "Label of the action to copy the content to the clipboard",
  });

  const platforms = [
    SocialMedia.TELEGRAM,
    SocialMedia.TWITTER,
    SocialMedia.WHATSAPP,
    SocialMedia.LINKEDIN,
    SocialMedia.EMAIL,
  ];

  return (
    <ul className="flex flex-col space-y-2">
      {platforms.map((platform) => (
        <li className="py-2.5 px-2" key={platform}>
          <a
            className="flex items-center hover:text-primary/60"
            target="_blank"
            rel="noopener noreferrer"
            href={getSocialMediaShareUrl(
              platform,
              contentToShare,
              contentTitle
            )}
          >
            {getSocialMediaLogo(platform)}
            <span className="ml-4 font-semibold">
              {i18n.formatMessage(socialMediaActionLabel, {
                platformLabel: getSocialMediaLabel(platform),
              })}
            </span>
          </a>
        </li>
      ))}
      <li className="py-2.5 px-2">
        <div className="flex items-center">
          <CopyToClipboardButton value={contentToShare} size="no-margin" />
          <span className="ml-4 font-semibold">{copyContentLabel}</span>
        </div>
      </li>
    </ul>
  );
};
