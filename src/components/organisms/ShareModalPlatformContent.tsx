import React from "react";
import { defineMessage, useIntl } from "react-intl";
import { sharingPlatformDefinitions, getSharingPlatformLogo } from "lib/utils";
import { CopyToClipboardButton } from "components/molecules";

type ShareModalPlatformContentProps = {
  data: ShareData;
};

export const ShareModalPlatformContent: React.FunctionComponent<
  ShareModalPlatformContentProps
> = ({ data }) => {
  const i18n = useIntl();

  // Assumed it is not undefined because 'data' is coming from the other sharing component but it's not safe, potentially find a better way later.
  const contentToShare = (data.url || data.text) as string;
  const contentTitle = data.title as string;

  const socialMediaActionLabel = defineMessage({
    id: "ShareModalPlatformContent.socialMediaActionLabel",
    defaultMessage: "Share via {platformLabel}",
    description: "Label of the action to share content via a certain platform",
  });

  const copyContentLabel = i18n.formatMessage({
    id: "ShareModalPlatformContent.copyContentLabel",
    defaultMessage: "Copy to clipboard",
    description: "Label of the action to copy the content to the clipboard",
  });

  const platforms = Object.values(sharingPlatformDefinitions);

  return (
    <ul className="flex flex-col space-y-2">
      {platforms.map((platform) => (
        <li className="px-2 py-2.5" key={platform.platformId}>
          <a
            className="flex items-center hover:text-primary/60"
            target="_blank"
            rel="noopener noreferrer"
            href={platform.getUrl(contentToShare, contentTitle)}
          >
            {getSharingPlatformLogo(platform.platformId)}
            <span className="ml-4 font-semibold">
              {i18n.formatMessage(socialMediaActionLabel, {
                platformLabel: platform.label,
              })}
            </span>
          </a>
        </li>
      ))}
      <li className="px-2 py-2.5">
        <div className="flex items-center">
          {/* TODO: Update the copy to clipboard to be consistent with the others share options, ie: click on the whole link, not just the button */}
          <CopyToClipboardButton value={contentToShare} size="no-margin" />
          <span className="ml-4 font-semibold">{copyContentLabel}</span>
        </div>
      </li>
    </ul>
  );
};
