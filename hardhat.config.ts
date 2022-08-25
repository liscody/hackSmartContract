import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  gasReporter: {
    enabled: (process.env.REPORT_GAS) ? true : false,
    currency: 'USD',
    coinmarketcap:process.env.COINMARKETCAP_API_KEY
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    }, 
  },
  networks: {
    ethereum: {
      url: 'https://mainnet.infura.io/v3/442dae1f5e34420e94412f8da50a34cb',
      chainId: 1,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      // verify: {
      //   etherscan: {
      //     apiUrl: 'https://api.etherscan.io'
      //   }
      // }
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      // verify: {
      //   etherscan: {
      //     apiUrl: 'https://api-ropsten.etherscan.io'
      //   }
      // }
    },
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      chainId: 4,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      // verify: {
      //   etherscan: {
      //     apiUrl: 'https://api-rinkeby.etherscan.io'
      //   }
      // }
    },    
    kovan: {
      url: process.env.KOVAN_URL || "",
      chainId: 42,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      // verify: {
      //   etherscan: {
      //     apiUrl: 'https://api-kovan.etherscan.io'
      //   }
      // }
    },
    bsc: {
      url: 'https://bsc-dataseed.binance.org/' || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      // verify: {
      //   etherscan: {
      //     apiUrl: 'https://api.bscscan.com'
      //   }
      // }
    },
    bsc_testnet: {
      url: process.env.BSC_TESTNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      // verify: {
      //   etherscan: {
      //     apiUrl: 'https://api-testnet.bscscan.com'
      //   }
      // }
    },
  //   fuji: {
  //     url: 'https://api.avax-test.network/ext/bc/C/rpc',
  //     gasPrice: 25000000000,
  //     chainId: 43113,
  //     accounts: [process.env.PRIVATE_KEY]
  // },
  // avax: {
  //     url: 'https://api.avax.network/ext/bc/C/rpc',
  //     gasPrice: 27000000000,
  //     chainId: 43114,
  //     accounts: [process.env.PRIVATE_KEY]
  // },

    hardhat: {
      mining: {
        auto: true,
      }
    },
    localhost: {
      mining: {
        auto: true,
      }
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },};

export default config;
