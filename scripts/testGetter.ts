const hre = require("hardhat");

async function main() {
  const nftFactory = await hre.ethers.getContractFactory("ERC721Starter");
  const contract = await nftFactory.attach(
    "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
  );

  const nftPrice = await contract.PRICE();
  const startPrivSale = await contract.privateSaleStartTimestamp();
  console.log("nftPrice", nftPrice.toString());
  console.log("startPrivSale", new Date(startPrivSale.toNumber() * 10000));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
