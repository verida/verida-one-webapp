import React, { useCallback, useState } from "react";
import { Icon } from "components/atoms";
import { useIntl } from "react-intl";

type AssetMediaProps = {
  source?: string | null;
  alt?: string;
  radius?: "rounded-lg" | "rounded-xl";
  hasBackground?: boolean;
  backgroundColor?: string | null;
} & React.ComponentPropsWithoutRef<"div">;

/** Component displaying the media of an asset (Collectible or Badge), only images are supported for the moment. */
export const AssetMedia: React.FunctionComponent<AssetMediaProps> = (props) => {
  const {
    source,
    alt,
    radius = "rounded-xl",
    hasBackground = false,
    backgroundColor,
    ...divProps
  } = props;
  const i18n = useIntl();
  const [failedImage, setFailedImage] = useState(false);

  const noContentMessage = i18n.formatMessage({
    id: "AssetMedia.noContentMessage",
    defaultMessage: "Content not available",
    description:
      "Message indicating that the asset has either no media content or this content is broken",
  });

  const imageClasses = `w-full border border-solid border-primary-15 object-cover ${radius}`;

  const handleImageLoad = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setFailedImage(false);
      // Set the final classes once we know the image is loaded
      event.currentTarget.className = `h-full ${imageClasses}`;
    },
    [imageClasses]
  );

  const handleImageError = useCallback(() => {
    setFailedImage(true);
  }, []);

  return (
    <div {...divProps}>
      <div
        className={`${
          hasBackground && !backgroundColor && !failedImage
            ? "bg-asset-media"
            : ""
        } ${radius}`}
        style={{
          backgroundColor:
            backgroundColor && !failedImage ? `#${backgroundColor}` : undefined,
        }}
      >
        {source && !failedImage ? (
          <img
            src={source}
            alt={alt || "Asset"}
            // Set temporary classes until it is overriden by the onLoad event
            // aspect-square is for keeping height
            // animate-pulse is for applying a loading animation
            className={`aspect-square animate-pulse bg-primary-15 ${imageClasses}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        ) : (
          <div
            className={`flex aspect-square w-full items-center justify-center bg-primary-15 object-contain p-4 ${radius}`}
          >
            <div className="flex flex-col items-center justify-center text-gray-light">
              <Icon type="error-picture" size={48} />
              <p className="text-center">{noContentMessage}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
