const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const ArtToken = await hre.ethers.getContractFactory("ArtToken");
  // Pass deployer address as initialOwner for Ownable
  const token = await ArtToken.deploy(deployer.address);

  await token.waitForDeployment();

  console.log(`ArtToken deployed to: ${token.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
