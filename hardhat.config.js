require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {},
    educhain: {
      url: process.env.EDUCHAIN_RPC_URL || "https://rpc.open-campus-codex.gelato.digital",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
