export const copyToClipboard = (text: string): Promise<void> => {
  // TODO: Allow other types of content (number, object, ...) to be cast as string
  return navigator.clipboard?.writeText(text);
};

export const hasWebShare = () => !!navigator.canShare;

export const shareProfile = async (data: ShareData): Promise<boolean> => {
  try {
    await navigator?.share(data);
    return true;
  } catch (error) {
    return false;
  }
};
