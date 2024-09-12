import API_LOCAL from "./api-local";
import API_PROD from "./api-prod";
import API_STAGE from "./api-stage";
import API_DEV from "./api-dev";
const hostname = window.location.hostname;

const port = window.location.port;
let isLocalApi = port >= 3000;

console.log("!!!Api", API_LOCAL, API_DEV)

export const API =
  hostname === "localhost"
    ? API_LOCAL
    : hostname === ""
    ? API_DEV
    : hostname === ""
    ? API_PROD
    : hostname === ""
    ? API_STAGE
    : API_DEV;
