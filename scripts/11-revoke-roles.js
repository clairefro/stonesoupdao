import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0xb3364478bD5EC4d631e1e7915f62E6E8d4ed4b2E",
);

(async () => {
  try {
    // Log the current roles.
    console.log(
      "👀 Roles that exist right now:",
      await tokenModule.getAllRoleMembers()
    );

    // Revoke all the superpowers your wallet had over the ERC-20 contract.
    await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
    console.log(
      "🎉 Roles after revoking ourselves",
      await tokenModule.getAllRoleMembers()
    );
    console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO treasury", error);
  }
})();

// see how roles are removed from the given address, but remain for voting contract

// 👀 Roles that exist right now: {
//   admin: [ '0x7cb413Fa0bEF76BDc931B80c5489a64A192D5255' ],
//   minter: [
//     '0x7cb413Fa0bEF76BDc931B80c5489a64A192D5255',
//     '0x6A11B97eF9d5eE08352795f5931efe2b7b8E711c'
//   ],
//   pauser: [ '0x7cb413Fa0bEF76BDc931B80c5489a64A192D5255' ],
//   transfer: [ '0x7cb413Fa0bEF76BDc931B80c5489a64A192D5255' ]
// }
// 🎉 Roles after revoking ourselves {
//   admin: [],
//   minter: [ '0x6A11B97eF9d5eE08352795f5931efe2b7b8E711c' ],
//   pauser: [],
//   transfer: []
// }