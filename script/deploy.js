// scripts/deploy_upgradeable_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {

    const [deployer] = await ethers.getSigners();
    const network = await ethers.provider.getNetwork();

    console.log("Deploying contracts with the account:", deployer.address);

    const balance = await deployer.getBalance();
    const balanceInEther = ethers.utils.formatEther(balance);
    console.log("Account balance:", balanceInEther);

    const block = await ethers.provider.getBlock(
      await ethers.provider.getBlockNumber()
    );
    const timestamp = block.timestamp;

    const blockchainInfo = {
      name: network.name,
      chainId: network.chainId,
      blockNumber: block.number,
      timestamp: timestamp,
    };

    console.log("Blockchain Info:");
    console.table(blockchainInfo);


  const Lock = await ethers.getContractFactory('Lock');
  console.log('Deploying Box...');
//   const box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
const lock= await Lock.deploy();
//   await Lock.deployed();
  console.log('Box deployed to:', lock.address);



  if (network.name !== "hardhat") {
    console.log("Verifying contract on the network...");
    // await verifyContract(box.address, );   // Pass the actual values here A
    console.log("Contract verified on the network!");
  }
} 

async function verifyContract(contractAddress, A) {
    try {
      await run("verify:verify", {
        address: contractAddress,
        constructorArguments: [],  // Pass the actual values here A
      });
    } catch (error) {
      console.error("Failed to verify contract on the network:", error);
      throw error;
    }
  }

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
