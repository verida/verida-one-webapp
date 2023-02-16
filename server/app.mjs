import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";
import { titleRegExp, urlRegExp, defaultTitle, defaultUrl } from "./meta.mjs";
import { getNameFromIdentity } from "./verida.mjs";

console.debug("Starting server");

const app = express();

app.use(cors());

app.use(express.static(path.join(process.cwd(), "build"), { index: false }));

// View engine replacing meta placeholder in index.html
app.engine("html", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    const rendered = content
      .toString()
      .replace(titleRegExp, options.title || defaultTitle)
      .replace(urlRegExp, options.url || defaultUrl);
    return callback(null, rendered);
  });
});
app.set("views", path.join(process.cwd(), "build"));
app.set("view engine", "html");

// Route controler returning the rendered html file
app.get("/*", async function (req, res) {
  let identityName = undefined;

  // Extract the identity from the route path
  const paths = req.path.split("/");
  const identity = paths[1];
  // The identity param, if exists, is the second items in the split

  identityName = await getNameFromIdentity(identity);

  res.render("index", {
    title: identityName ? `${identityName} - ${defaultTitle}` : undefined,
    url: `${req.protocol}://${req.headers.host}${req.originalUrl}`,
  });
});

export default app;
