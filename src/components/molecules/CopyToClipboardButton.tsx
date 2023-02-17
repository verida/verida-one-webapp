import { Icon, IconButton } from "components/atoms";
import { COPIED_TO_CLIPBOARD_ICON_TIMEOUT } from "lib/constants";
import { copyToClipboard } from "lib/utils";
import React, { useCallback, useEffect, useState } from "react";

type CopyToClipboardButtonProps = {
  value: string;
  iconSize?: number | string;
} & React.ComponentPropsWithRef<"div"> &
  Pick<React.ComponentPropsWithRef<typeof IconButton>, "size">;

export const CopyToClipboardButton: React.FunctionComponent<
  CopyToClipboardButtonProps
> = (props) => {
  const { value, iconSize, size = "small", ...divProps } = props;

  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    const handler = async () => {
      try {
        await copyToClipboard(value);
        setCopied(true);
      } catch (error) {
        // TODO: Handle 'copy to clipboard' error
      }
    };
    void handler();
  }, [value]);

  useEffect(() => {
    if (!copied) {
      return;
    }
    const timer = setTimeout(() => {
      setCopied(false);
    }, COPIED_TO_CLIPBOARD_ICON_TIMEOUT);

    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  return (
    <div {...divProps}>
      {copied ? (
        <IconButton
          size={size}
          variant="text"
          icon={<Icon type="check" size={iconSize} />}
        />
      ) : (
        <IconButton
          size={size}
          variant="text"
          icon={<Icon type="copy" size={iconSize} />}
          onClick={handleCopy}
        />
      )}
    </div>
  );
};
