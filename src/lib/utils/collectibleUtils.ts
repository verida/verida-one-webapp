/**
 * Split a token label in two parts, the label without the Id and the Id itself.
 * Note that the Id is extracted with the '#' if present.
 * If the otken Id doesn't match how it is represented in the label, it won't be extracted
 *
 * @param tokenLabel the whole label of the token.
 * @param tokenId the id of the token, usually just a number. Optional to handle cases it ius not available.
 * @returns
 */
export const splitTokenLabel = (
  tokenLabel: string,
  tokenId?: string
): { labelWithoutIdPart: string; idPart?: string } => {
  const tokenIdRegExp = tokenId ? new RegExp(`#?${tokenId}`, "g") : null;
  const tokenIdMatch = tokenIdRegExp ? tokenLabel?.match(tokenIdRegExp) : null;
  const tokenIdInLabel =
    tokenIdMatch && tokenIdMatch[0] ? tokenIdMatch[0] : undefined;
  return {
    labelWithoutIdPart: tokenIdInLabel
      ? tokenLabel.replace(tokenIdInLabel, "").trim()
      : tokenLabel,
    idPart: tokenIdInLabel,
  };
};
