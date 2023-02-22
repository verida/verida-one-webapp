import React from "react";
import { useIntl } from "react-intl";
import {
  CollectibleCard,
  CustomLink,
  ProfileSectionWrapper,
} from "components/molecules";
import { Collectible, CustomLink as CustomLinkType } from "lib/types";
import { Link } from "react-router-dom";
import {
  screenSizes,
  MAX_ASSETS_IN_FEATURED_SECTION,
  MAX_LINKS_IN_FEATURED_SECTION,
} from "lib/constants";
import { SkeletonBase } from "components/atoms";

type FeaturedSectionProps = {
  collectibles?: Collectible[];
  links?: CustomLinkType[];
};

/** Section for the Profile page rendering the featured items */
export const FeaturedSection: React.FC<FeaturedSectionProps> = (props) => {
  const { collectibles, links } = props;

  const query = `(min-width: ${screenSizes.sm})`;
  // FIXME: Use breakpoints from tailwind configuration
  const mediaMatch = window.matchMedia(query).matches;
  // FIXME: Make the media query match more responsive, currently has to refresh to update it

  const i18n = useIntl();

  if (!collectibles?.length && !links?.length) {
    return null;
  }

  const sectionTitle = i18n.formatMessage({
    id: "FeaturedSection.sectionTitle",
    description: "Title of the 'Featured' section in the 'Profile' page",
    defaultMessage: "Featured",
  });

  // TODO: Handle click on collectible when collectible page implemented
  return (
    <ProfileSectionWrapper title={sectionTitle}>
      <div className="flex flex-col space-y-3">
        <ul className="grid grid-cols-4 gap-2">
          {collectibles
            ?.slice(0, MAX_ASSETS_IN_FEATURED_SECTION)
            .map((collectible) => (
              <li
                key={`${collectible.chainId}/${collectible.contractAddress}/${collectible.tokenId}`}
              >
                <Link
                  to={`collectibles/${collectible.chainId}/${collectible.contractAddress}/${collectible.tokenId}`}
                >
                  <CollectibleCard
                    variant={mediaMatch ? "standard" : "compact"}
                    collectible={collectible}
                  />
                </Link>
              </li>
            ))}
        </ul>
        <ul className="space-y-2">
          {links?.slice(0, MAX_LINKS_IN_FEATURED_SECTION).map((link) => (
            <li key={link.url}>
              <CustomLink link={link} />
            </li>
          ))}
        </ul>
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
