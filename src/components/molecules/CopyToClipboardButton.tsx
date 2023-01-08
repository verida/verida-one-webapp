import { Icon, IconButton } from "components/atoms";
import { COPIED_TO_CLIPBOARD_ICON_TIMEOUT } from "lib/constants";
import { copyToClipboard } from "lib/utils";
import React, { useCallback, useEffect, useState } from "react";

type CopyToClipboardButtonProps = {
  value: string;
  iconSize?: number;
} & React.ComponentPropsWithRef<"div">;

export const CopyToClipboardButton: React.FunctionComponent<
  CopyToClipboardButtonProps
> = (props) => {
  const { value, iconSize, ...divProps } = props;

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
          size="small"
          variant="text"
          icon={<Icon type="check" size={iconSize} />}
        />
      ) : (
        <IconButton
          size="small"
          variant="text"
          icon={<Icon type="copy" size={iconSize} />}
          onClick={handleCopy}
        />
      )}
    </div>
  );
};
