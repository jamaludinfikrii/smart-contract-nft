const hre2 = require("hardhat");

const addressesToWhitelist = [
  "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc",
  "0x90f79bf6eb2c4f870365e785982e1f101e93b906",
];

const qtys = [2, 2];

async function addWhitelist() {
  const nftFactory = await hre2.ethers.getContractFactory("ERC721Starter");
  const contract = await nftFactory.attach(
    "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
  );

  const whitelistedCount = await contract.whitelistedAddressesCount();

  console.log("whitelistedCount", whitelistedCount.toString());
  await contract.addAddressesToWhitelist(addressesToWhitelist, qtys);

  const whitelistedCountAfter = await contract.whitelistedAddressesCount();
  console.log("whitelistedCountAfter", whitelistedCountAfter.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
addWhitelist().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
