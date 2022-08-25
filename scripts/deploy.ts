// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    // deploy ERC20 token 
    const Erc20 = await hre.ethers.getContractFactory("MyERC20Token");
    const erc20 = await Erc20.deploy();
    await erc20.deployed();
    console.log("ERC20 deployed on address: ", erc20.address);
    
    // deploy ERC20 token 
    const NFT = await hre.ethers.getContractFactory("MyNFT");
    const nft = await NFT.deploy();
    await nft.deployed();
    console.log("NFT deployed on address: ", nft.address);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
