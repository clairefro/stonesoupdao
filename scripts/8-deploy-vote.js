import sdk from "./1-initialize-sdk.js";

// deploys standard governance contract: https://github.com/nftlabs/nftlabs-protocols/blob/main/contracts/vote/VotingGovernor.sol
// based on: https://docs.openzeppelin.com/contracts/4.x/api/governance


// Grab the app module address.
const appModule = sdk.getAppModule(
  "0x5B00CeE475d1B2843f1a0216d64dd05239eF7144",
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      // Give your governance contract a name.
      name: "StoneSoupDAO's Proposals",

      // This is the location of our governance token, our ERC-20 contract!
      votingTokenAddress: "0xb3364478bD5EC4d631e1e7915f62E6E8d4ed4b2E",

      // After a proposal is created, when can members start voting?
      // For now, we set this to immediately.
      proposalStartWaitTimeInSeconds: 0,

      // How long do members have to vote on a proposal when it's created?
      // Here, we set it to 24 hours (86400 seconds)
      proposalVotingTimeInSeconds: 24 * 60 * 60,

      // Will explain more below.
      votingQuorumFraction: 0,

      // What's the minimum # of tokens a user needs to be allowed to create a proposal?
      // I set it to 0. Meaning no tokens are required for a user to be allowed to
      // create a proposal.
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.log("Failed to deploy vote module", err);
  }
})();

// voting contract address: 0x6A11B97eF9d5eE08352795f5931efe2b7b8E711c