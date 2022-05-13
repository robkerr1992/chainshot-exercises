const axios = require('axios');

// copy-paste your URL from Alchemy
const ALCHEMY_URL = "https://eth-mainnet.alchemyapi.io/v2/OSerDoxT_ezCtIHrdYjABhgFvrdApR1U";


axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_gasPrice",
  params: []
}).then((response) => {
  console.log(response.data.result);
});