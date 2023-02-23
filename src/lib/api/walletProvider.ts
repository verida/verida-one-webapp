import axios from "axios";
import { config } from "lib/config";
import { NftListApiResponseSchema } from "lib/schemas";
import { Chains, NftToken } from "lib/types";

export const walletProviderSupportedChainsForNft: Chains[] = [
  Chains.ETHEREUM_GOERLI,
  Chains.POLYGON_MUMBAI,
];

/**
 * Call the Wallet Provider API to get the NFTs of a set of blockchain addresses.
 *
 * @param walletAddresses Array of addresses, in the form 'chainId:Address'
 * @returns The list of NFTs for the addresses
 */
export const getNfts = async (
  walletAddresses: string[],
  abortSignal?: AbortSignal
) => {
  if (!config.walletProviderApiBaseUrl) {
    throw new Error(
      "The REACT_APP_WALLET_PROVIDER_API_BASE_URL environment variable is not defined"
    );
  }

  const queryParams = walletAddresses
    .map((address) => `wallet=${address}`)
    .join("&");
  const url = `${config.walletProviderApiBaseUrl}/nfts/list?${queryParams}`;

  const response = await axios.get(url, { signal: abortSignal });

  const validatedData = NftListApiResponseSchema.parse(response.data);

  if (validatedData.status === "error") {
    // TODO: Handle API error
    throw new Error(
      "Something went wrong with the API call walletProvider.getNftList"
    );
  }

  return validatedData.data as NftToken[];
};
