import serverless from "serverless-http";
import app from "./app.mjs";

export const handler = serverless(app);
