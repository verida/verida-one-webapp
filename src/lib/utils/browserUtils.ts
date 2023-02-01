import { ShareProfileData } from "lib/types";

export const copyToClipboard = (text: string): Promise<void> => {
  // TODO: Allow other types of content (number, object, ...) to be cast as string
  return navigator.clipboard?.writeText(text);
};

export const shareProfile = async (
  data: ShareProfileData
): Promise<boolean> => {
  try {
    await navigator?.share(data);
    return true;
  } catch (error) {
    return false;
  }
};
