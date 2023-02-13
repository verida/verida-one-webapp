import express from "express";
import path from "path";
import fs from "fs";
import { titleRegExp, urlRegExp, defaultTitle, defaultUrl } from "./meta.mjs";
import { getNameFromIdentity } from "./verida.mjs";

console.debug("Starting server");

const app = express();

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

app.get("/*", async function (req, res) {
  let identityName = undefined;
  const paths = req.path.split("/");
  // The identity param, if exists, is the second items in the split
  identityName = await getNameFromIdentity(paths[1]);

  res.render("index", {
    title: identityName ? `${identityName} - ${defaultTitle}` : undefined,
    url: `${req.protocol}://${req.headers.host}${req.originalUrl}`,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
