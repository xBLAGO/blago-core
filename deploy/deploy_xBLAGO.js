const { TonClient, signerKeys } = require("@tonclient/core");
const { libNode } = require("@tonclient/lib-node");
TonClient.useBinaryLibrary(libNode);

const client = new TonClient({ network: { endpoints: ["https://testnet.toncenter.com/api/v2/jsonRPC"] } });

async function deploy() {
  const keys = await client.crypto.generate_random_sign_keys();

  const contractPackage = {
    abi: { /* ABI JSON here */ },
    tvc: "base64_encoded_tvc"
  };

  const deployOptions = {
    abi: contractPackage.abi,
    signer: { type: "Keys", keys },
    deploy_set: {
      tvc: contractPackage.tvc,
      initial_data: {}
    },
    call_set: {
      function_name: "constructor",
      input: {}
    }
  };

  const result = await client.processing.process_message({
    message_encode_params: deployOptions,
    send_events: false
  });

  console.log("xBLAGO deployed at:", result.transaction.dst);
}

deploy().then(() => process.exit(0));
