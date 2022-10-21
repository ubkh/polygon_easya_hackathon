# Polygon x EasyA Hackathon Project

[Polygon Docs](https://wiki.polygon.technology/docs/develop/getting-started) | [React Docs](https://reactjs.org/docs/hello-world.html) | [Truffle Docs](https://trufflesuite.com/docs/truffle/) | [Polygon Guide](https://polygontechnology.notion.site/Polygon-Developer-Library-BUIDL-IT-Hackathon-36e70eac8c1f4f11a9d2fad9da8e0749)

**Network**: `Matic Mumbai Test Network` (Polygon)

## Prerequisites
1. Node
2. Git
3. Chrome with MetaMask installed and setup

## Installation
1. Clone this repository using `git clone <repository>`
2. `cd polygon_easya_hackathon`
3. Install dependancies: `npm install`. May need to follow up with `npm audit fix`.
4. Install ganache: `npm install ganache --global`
5. Create a `.env` file in the root directory and insert `MNEMONIC = <YOUR-METAMASK-SECRET-PHRASE>`.

## Deployment
1. Open ganache personal blockchain: `ganache`
2. Deploy smart contracts to blockchain (choose ONE):
  * Local Ganache net: `truffle migrate`
  * Polygon testnet: `truffle migrate --network polygon`
3. Start react app: `npm start`

**Note: In order to use the Polygon testnet you must transfer `MATIC` to your MetaMask wallet address. Use [Polygon Faucet](https://faucet.polygon.technology/) for this.**
