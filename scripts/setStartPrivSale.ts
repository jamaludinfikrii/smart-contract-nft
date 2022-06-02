const newDate = 1654061582;
const hre3 = require("hardhat");

async function setStartPrivSale() {
  const nftFactory = await hre3.ethers.getContractFactory("ERC721Starter");
  const contract = await nftFactory.attach(
    "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
  );

  await contract.setPrivStartTimestamp(newDate);
}

setStartPrivSale().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
