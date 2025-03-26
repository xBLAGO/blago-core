const { TonClient } = require("@tonclient/core");
const NeedNFT = require("../build/NeedNFT");

const client = new TonClient({ network: { endpoints: ["https://testnet.toncenter.com/api/v2/jsonRPC"] } });

async function testCreateNeed() {
  const contract = await client.load(NeedNFT, "0:...");
  await contract.create_need({ description: "MacBook PRO, 2020, 80000 RUB", cost: 80000 });
  console.log("Need created");
}

testCreateNeed();