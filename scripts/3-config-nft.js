import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";


// Mint 1155 NFT contract. This will be used to token gate the DAO

const bundleDrop = sdk.getBundleDropModule(
  "0xbDA8f326392DC47f48d84A6d4e9BeC325c98FdBF",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Membership Stones",
        description: "This NFT will give you access to StoneSoupDAO",
        image: readFileSync("scripts/assets/stonetoken.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()