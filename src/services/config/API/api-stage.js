//live
const protocol = "http";
const host = "localhost";
const port = "9000";
const trailUrl = "";

//local
// const protocol = "http";
// const host = "192.168.29.133:5001/api/v1";
// const port = "";
// const trailUrl = "";

const hostUrl = `${protocol}://${host}${port ? ":" + port : ""}/`;
const endpoint = `${protocol}://${host}${port ? ":" + port : ""}${trailUrl}`;

export default {
  protocol: protocol,
  host: host,
  port: port,
  apiUrl: trailUrl,
  endpoint: endpoint,
  hostUrl: hostUrl,
};
