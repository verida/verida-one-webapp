import * as dotenv from "dotenv";
dotenv.config();

import path from "path";
import express from "express";
import cors from "cors";
import axios from "axios";
import { titleRegExp, urlRegExp } from "./meta.mjs";
import {
  buildMetaValues,
  getFileContent,
  getNameFromRequest,
} from "./utils.mjs";

console.log("Configuring server");

const app = express();
app.use(cors());

// Get the location of the resources
const RESOURCES_URL = process.env.PUBLIC_URL;
// If the url is an absolute url, the resources are not local
const hasLocalResources = RESOURCES_URL?.startsWith("http") ? false : true;

const BUILD_FOLDER_PATH = path.join(process.cwd(), "build");

if (hasLocalResources) {
  // if the frontend static resources stayed local, serve the build folder. Except for the index file, which will be dynamically served.
  app.use(express.static(BUILD_FOLDER_PATH, { index: false }));
}

// Route controler returning the rendered html content
app.get("/*", async function (req, res) {
  try {
    // Extract the identity from the request info
    const identityName = await getNameFromRequest(req);
    const { title, url } = buildMetaValues(req, identityName);

    let html;
    if (hasLocalResources) {
      // Get the html content locally
      html = await getFileContent(`${BUILD_FOLDER_PATH}/index.html`);
    } else {
      // Get the index.html from the resources location
      const response = await axios.get(RESOURCES_URL);
      html = response.data;
    }

    // Replace the placeholders in the html by the actual meta values
    const rendered = html
      .toString()
      .replace(titleRegExp, title)
      .replace(urlRegExp, url);

    // Return the dynamically rendered html content
    res.setHeader("Content-Type", "text/html");
    res.send(rendered);
  } catch (error) {
    console.error(error);
    res.send("Error");
  }
});

console.log("Server configured");

export default app;
