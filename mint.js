const hre = require("hardhat");

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS_HERE";
const URI = "ipfs://QmYourMetadataHashHere";

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const ArtToken = await hre.ethers.getContractFactory("ArtToken");
  const contract = ArtToken.attach(CONTRACT_ADDRESS);

  console.log(`Minting NFT to ${signer.address}...`);
  
  const tx = await contract.safeMint(signer.address, URI);
  await tx.wait();

  console.log(`Minted successfully! Transaction Hash: ${tx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
