// require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');
// require('@openzeppelin/hardhat-upgrades');

 // Import the dotenv package

// require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-etherscan");




task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// const privateKey = process.env.PRIVATE_KEY; 
// const etherscanAPIKey = process.env.API_KEY; 
// const URL = process.env.URL;

module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    testnet: {
      url: "https://polygon-amoy.infura.io/v3/1xcqN3oQsorBxrwFRIo9BeGhVuI",
      accounts: [""],
    },
    // mainnet: {
    //   url: "https://mainnet.infura.io/v3/PROJECT_ID",
    //   accounts: [privateKey],
    // },
  },
  etherscan: {
    apiKey: "F8CF44YUH7251P55KVKRJG1U9GGUW2B7TH",
  },
};