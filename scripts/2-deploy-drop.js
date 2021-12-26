import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

// Mint 1155 contract with MetaData

const app = sdk.getAppModule("0x5B00CeE475d1B2843f1a0216d64dd05239eF7144");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "StoneSoupDAO Membership",
      // A description for the collection.
      description: "A DAO for members of the Stone Soup community.",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/stones.png"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()

// bundle drop address: 0xbDA8f326392DC47f48d84A6d4e9BeC325c98FdBF
// bundle drop data uri: ipfs://bafkreidgsxukmivjpu445avhjwf4bevzjskbhgdaogatzlug64bebihy44