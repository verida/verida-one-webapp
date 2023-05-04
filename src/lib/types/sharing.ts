import { PlatformIconType } from "components/atoms";
import { SHARING_PLATFORMS } from "lib/constants";
import { ObjectValues } from "lib/types/utils";

/** TODO: Write doc */
export type SharingPlatform = ObjectValues<typeof SHARING_PLATFORMS>;

/** TODO: write doc */
export type SharingPlatformDefinition = {
  platformId: SharingPlatform;
  label: string;
  iconId: PlatformIconType;
  getUrl: (content: string, title: string) => string;
};
