require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan"); 
module.exports = {
    networks: {
       
      // avalancheFujiTestnet: {
      //     url:"https://avalanche-fuji.infura.io/v3/0796658a2cb947e48489f739cd3c6784",
      //     accounts: [
      //     "e5df2c99253e39a8c1a33aaa2c137e89f18820355475aeddf751f9f2285263c6"
      //     ],
      //     gasPrice: 2250000000000,
      //   },

      mumbai:{
        url:"https://matic-mumbai.chainstacklabs.com",
        accounts:[
          "e5df2c99253e39a8c1a33aaa2c137e89f18820355475aeddf751f9f2285263c6"
        ],
        gasPrice: 2250000000
      }
      },
      solidity: {
        version: "0.8.9",
        settings: {
          // optimizer: {
          //   enabled: false,
          //   runs: 800
          // }
        }
      },
     
      etherscan: {
        apiKey: {
          // goerli  : "FGXX2WTEVRBK1UX4SBA2NI4WX3YBDSNBZ9"
          // sepolia: "6TVBTA4HC3JIVKSFVHUMWHZMZGCRJWZVN1"
          // avalancheFujiTestnet:"DSTZNVREXCTYVUKAKKEUXKWMX5KP3MUQV6"
          polygonMumbai: "8EVPR4DV9EEJEFBCWCMDV5H62IXGFWJ698"
        }
      }
    };