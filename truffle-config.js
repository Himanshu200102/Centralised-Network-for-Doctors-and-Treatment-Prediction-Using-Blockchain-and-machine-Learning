const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic =
  "wasp kangaroo jeans credit shoe country raise hello library wish crush concert";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 5000000,
    },
    goerli: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          "https://goerli.infura.io/v3/cf497414ae444aae967f27e615616a53"
        ),
      network_id: "5", // eslint-disable-line camelcase
      gas: 4465030,
      gasPrice: 10000000000,
    },
  },

  compilers: {
    solc: {
      version: "0.8.17",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
};
