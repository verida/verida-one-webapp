import fs from "fs";
import { getProfileFromIdentity } from "./verida.mjs";
import { defaultTitle, defaultDescription } from "./meta.mjs";

/**
 * Extract the identity information from the request, if any and get the name of this identity.
 *
 * @param {Request} req The Express request.
 * @returns {Promise<string|undefined>} The name in the identity profile.
 */
export async function getNameFromRequest(req) {
  // Extract the identity from the route path
  const paths = req.path.split("/");
  // The identity param, if exists, is the second items in the split
  const identity = paths[1];
  // Get the public name of the
  return await getProfileFromIdentity(identity);
}

/**
 * Build the meta information (the page title and the url).
 *
 * @param {Request} req
 * @param {{name: string, description: string}|undefined} profile
 * @returns {{title: string, description: string, url: string}}
 */
export function buildMetaValues(req, profile) {
  return {
    title: profile?.name ? `${profile.name} - ${defaultTitle}` : defaultTitle,
    description: profile?.description
      ? profile.description
      : defaultDescription,
    url: `${req.protocol}://${req.headers.host}${req.originalUrl}`,
    // TODO: Check the url elements. The request elements may not be reliable, particularly when the server is behind a proxy and doesn't know the actual public url. May need a environment variable instead: `${USER_FACING_URL}${req.originalUrl}`. Note: PUBLIC_URL is taken by cra/webpack, so need another name
  };
}

/**
 * Read and get the content of a file.
 *
 * @param {string} filePath The path of the file.
 * @returns {Promise<string>} the file content.
 */
export async function getFileContent(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, content) => {
      if (err) {
        return reject(err);
      }
      return resolve(content.toString());
    });
  });
}
