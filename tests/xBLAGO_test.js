const { TonClient } = require("@tonclient/core");
const { libNode } = require("@tonclient/lib-node");
TonClient.useBinaryLibrary(libNode);

const client = new TonClient({ network: { endpoints: ["https://testnet.toncenter.com/api/v2/jsonRPC"] } });

async function testMint() {
  const address = "0:..."  // your deployed contract address
  const contract = {
    address,
    abi: {
      type: "Contract",
      value: {}  // Add proper ABI here
    }
  };

  const response = await client.net.query_collection({
    collection: "accounts",
    filter: { id: { eq: address } },
    result: "balance"
  });

  console.log("Contract balance:", response.result[0].balance);
}

testMint().then(() => process.exit(0));
