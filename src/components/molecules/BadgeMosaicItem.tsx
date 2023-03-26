import React, { useCallback, useState } from "react";
import { HexagonBase, Icon, SkeletonBase } from "components/atoms";
import { Badge } from "lib/types";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

type HexagonProps = {
  badge: Badge;
  to: string;
  disableShadow?: boolean;
} & Omit<React.ComponentPropsWithoutRef<"li">, "className">;

export const BadgeMosaicItem: React.FunctionComponent<HexagonProps> = (
  props
) => {
  const { badge, to, disableShadow = false, ...otherProps } = props;
  const source = badge.metadata.image;
  const i18n = useIntl();
  const [failedImage, setFailedImage] = useState(false);

  const noContentMessage = i18n.formatMessage({
    id: "BadgeMosaicItem.noContentMessage",
    defaultMessage: "Content not available",
    description:
      "Message indicating that the asset has either no media content or this content is broken",
  });

  const imageClasses = "h-full w-full object-cover";

  const handleImageLoad = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setFailedImage(false);
      // Set the final classes once we know the image is loaded
      event.currentTarget.className = imageClasses;
    },
    []
  );

  const handleImageError = useCallback(() => {
    setFailedImage(true);
  }, []);

  return (
    <li
      {...otherProps}
      className="relative w-[calc(4/3_*_100%)] -translate-x-[calc(1/8_*_100%)] odd:-translate-y-1/2"
    >
      <HexagonBase className="flex items-center justify-center">
        <Link to={to} className="h-full w-full">
          {source && !failedImage ? (
            <img
              src={source}
              alt={badge.metadata.name || "Collectible"}
              // Set temporary classes until it is overriden by the onLoad event
              // bg-primary-15 is for the background color
              // animate-pulse is for applying a loading animation
              className={`animate-pulse bg-primary-15 ${imageClasses}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary-15 p-8">
              <div className="flex flex-col items-center justify-center text-gray-light">
                <Icon type="error-picture" size={48} />
                <p className="text-center">{noContentMessage}</p>
              </div>
            </div>
          )}
        </Link>
      </HexagonBase>
      {!disableShadow && (
        <div className="absolute inset-0 -z-10 w-full blur-lg">
          <HexagonBase className="w-full bg-badge-purple" />
        </div>
      )}
    </li>
  );
};

export const BadgeMosaicItemSkeleton: React.FunctionComponent<
  Omit<React.ComponentPropsWithoutRef<"li">, "className">
> = (props) => {
  return (
    <li
      {...props}
      className="relative w-[calc(4/3_*_100%)] -translate-x-[calc(1/8_*_100%)] odd:-translate-y-1/2"
    >
      <HexagonBase className="w-full">
        <SkeletonBase
          rounded="rounded-none"
          className="h-full w-full opacity-5"
        />
      </HexagonBase>
    </li>
  );
};
