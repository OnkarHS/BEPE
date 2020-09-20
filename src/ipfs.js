const Ipfs = require("ipfs-http-client");
const ip = new Ipfs({ host: "127.0.0.1", port: 5001, protocol: "https" });
export default ip;
