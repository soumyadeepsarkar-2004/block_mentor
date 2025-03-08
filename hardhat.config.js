require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.ALCHEMY_RPC_URL || "https://eth-sepolia.g.alchemy.com/v2/w4WcjsVsywgNjCVqjFpJw6R0qGm2i7h",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
