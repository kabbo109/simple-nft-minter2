const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ArtToken", function () {
  it("Should mint and assign URI", async function () {
    const [owner, otherAccount] = await ethers.getSigners();
    const ArtToken = await ethers.getContractFactory("ArtToken");
    const token = await ArtToken.deploy(owner.address);

    const uri = "ipfs://test-uri";
    await token.safeMint(owner.address, uri);

    expect(await token.ownerOf(0)).to.equal(owner.address);
    expect(await token.tokenURI(0)).to.equal(uri);
  });

  it("Should prevent non-owners from minting", async function () {
    const [owner, otherAccount] = await ethers.getSigners();
    const ArtToken = await ethers.getContractFactory("ArtToken");
    const token = await ArtToken.deploy(owner.address);

    await expect(
      token.connect(otherAccount).safeMint(otherAccount.address, "uri")
    ).to.be.reverted; 
  });
});
