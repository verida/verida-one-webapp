export const copyToClipboard = (text: string): Promise<void> => {
  // TODO: Allow other types of content (number, object, ...) to be cast as string
  return navigator.clipboard?.writeText(text);
};
