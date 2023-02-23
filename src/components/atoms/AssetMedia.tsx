import React from "react";

type AssetMediaProps = {
  source?: string | null;
  alt?: string;
  radius?: "rounded-lg" | "rounded-xl";
} & React.ComponentPropsWithoutRef<"div">;

export const AssetMedia: React.FunctionComponent<AssetMediaProps> = (props) => {
  const {
    source,
    alt,
    radius = "rounded-xl",
    className = "",
    ...divProps
  } = props;

  return (
    <div {...divProps} className={`${className} ${radius}`}>
      {
        source ? (
          <img
            src={source}
            alt={alt || "Asset"}
            className={`h-full w-full object-cover ${radius}`}
          />
        ) : (
          <div className={`bg-asset-media aspect-square w-full ${radius}`} />
        )
        // TODO: Do we display a generic image if there is no media in the asset?
      }
    </div>
  );
};
