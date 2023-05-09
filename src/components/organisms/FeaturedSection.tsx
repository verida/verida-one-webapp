import React from "react";
import { useIntl } from "react-intl";
import {
  AssetCard,
  CustomLink,
  ProfileSectionWrapper,
} from "components/molecules";
import { NftToken, CustomLink as CustomLinkType } from "lib/types";
import { Link } from "react-router-dom";
import {
  screenSizes,
  MAX_ASSETS_IN_FEATURED_SECTION,
  MAX_LINKS_IN_FEATURED_SECTION,
} from "lib/constants";
import { SkeletonBase } from "components/atoms";
import { useMediaQuery } from "lib/hooks";

type FeaturedSectionProps = {
  assets?: NftToken[];
  links?: CustomLinkType[];
};

/** Section for the Profile page rendering the featured items */
export const FeaturedSection: React.FC<FeaturedSectionProps> = (props) => {
  const { assets, links } = props;

  // FIXME: Use breakpoints from tailwind configuration
  const mediaMatch = useMediaQuery(`(min-width: ${screenSizes.sm})`);

  const i18n = useIntl();

  if (!assets?.length && !links?.length) {
    return null;
  }

  const sectionTitle = i18n.formatMessage({
    id: "FeaturedSection.sectionTitle",
    description: "Title of the 'Featured' section in the 'Profile' page",
    defaultMessage: "Featured",
  });

  return (
    <ProfileSectionWrapper title={sectionTitle}>
      <div className="flex flex-col space-y-3">
        {assets?.length ? (
          <ul className="grid grid-cols-4 gap-2">
            {assets.map((asset) => (
              <li
                key={`${asset.chain_id}/${asset.token_address}/${asset.token_id}`}
              >
                <Link
                  to={`${asset.isSBT ? "badges" : "collectibles"}/${
                    asset.chain_id
                  }/${asset.token_address}/${asset.token_id}`}
                >
                  <AssetCard
                    variant={mediaMatch ? "standard" : "compact"}
                    asset={asset}
                  />
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
        {links?.length ? (
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.url}>
                <CustomLink link={link} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </ProfileSectionWrapper>
  );
};

export const FeaturedSectionSkeleton: React.FunctionComponent = () => {
  return (
    <div className="animate-pulse">
      <SkeletonBase className="mb-3 h-4 w-1/3 opacity-10" />
      <div className="flex flex-col space-y-3">
        <ul className="grid grid-cols-4 gap-2">
          {Array(MAX_ASSETS_IN_FEATURED_SECTION)
            .fill("")
            .map((_, index) => (
              <li key={index}>
                <SkeletonBase
                  rounded="rounded-lg"
                  className="aspect-square w-full opacity-5"
                />
              </li>
            ))}
        </ul>
        <ul className="space-y-2">
          {Array(MAX_LINKS_IN_FEATURED_SECTION)
            .fill("")
            .map((_, index) => (
              <li key={index}>
                <SkeletonBase
                  rounded="rounded-lg"
                  className="h-14 w-full opacity-5"
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
