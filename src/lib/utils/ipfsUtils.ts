import { IPFS_GATEWAY_URL, IPFS_PROTOCOL } from "lib/constants";

/**
 * Check if the given URI is an IPFS URI.
 *
 * @param uri The URI to test.
 * @returns `true` if it's an IPFS URI, `false` otherwise
 */
export function isIpfsUri(uri: string) {
  return uri.startsWith(IPFS_PROTOCOL);
}

/**
 * Get an HTTP URL from an IPFS hash.
 *
 * @param hash The IPFS hash
 * @returns The HTTP URL for the given IPFS hash
 */
export function getHttpUrlFromIpfHash(hash: string) {
  return `${IPFS_GATEWAY_URL}/${hash}`;
}

/**
 * Get an HTTP URL from an IPFS URI. Does not throw any error in case the IPFS URI is not valid.
 *
 * @param ipfsUri The IPFS URI, starting with `ipfs://`
 * @returns The HTTP URL for the given IPFS URI
 */
export function getHttpUrlFromIpfUri(ipfsUri: string) {
  const hash = ipfsUri.replace(IPFS_PROTOCOL, "");
  return getHttpUrlFromIpfHash(hash);
}
