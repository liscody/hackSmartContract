# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Run hardhat:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat compile 
npx hardhat node
npx hardhat run scripts/deploy.js
npx hardhat run scripts/deploy.js --network rinkeby

```

Run solhint:
```shell
npm run solhint

```
Run prettier solidity:
```shell
npm run prettier:solidity

```

Run prettier solidity:
```shell
npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"

```
Run HTTP server 
```shell
http-server
```

Read from the contract storage 
```shell
await web3.eth.getStorageAt("0x39fe049C213d6C49D51A3b415a80a662C39c3b52", 0).then(console.log());

```


## Deployed on Rinkeby testnet 

contract Secret.sol
```shell
0x39fe049C213d6C49D51A3b415a80a662C39c3b52

```

contract Solution.sol
```shell
0xf9Cd98c17D8a1b594A6789B5F458a44364912309
```

