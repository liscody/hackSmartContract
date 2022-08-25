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

npx hardhat run scripts/deploy.js --network rinkeby
ERC20 deployed on address:  0xa460B4CaF93B97eEd9A8A3184FAF03769939a024
NFT deployed on address:  0xFCfF31dC12975b4306846162B12518C4e60A7426

npx hardhat verify --network rinkeby 0xFCfF31dC12975b4306846162B12518C4e60A7426
