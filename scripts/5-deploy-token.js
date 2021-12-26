import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x5B00CeE475d1B2843f1a0216d64dd05239eF7144");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "StoneSoupDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "STONE",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();

// ERC20 contract address: 0xb3364478bD5EC4d631e1e7915f62E6E8d4ed4b2E