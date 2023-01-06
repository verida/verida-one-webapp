//FIXME: helper function to truncate wallet address to be reworked.
export const truncateWalletAddress = (
  address: string,
  leftIndex = 6,
  rightIndex = -4
) => {
  return `${address.slice(0, leftIndex)}...${address.slice(rightIndex)}`;
};
