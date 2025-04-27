![GitHub package.json version](https://img.shields.io/github/package-json/v/DogToken/Dogswap-v2)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fusdog.fi)
![GitHub contributors](https://img.shields.io/github/contributors/DogToken/USDog-v2)
![GitHub Issues](https://img.shields.io/github/issues/DogToken/USDog-v2)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/DogToken/USDog-v2)
![HitCount](https://views.whatilearened.today/views/github/DogToken/creative-profile-readme.svg)
![Vercel Deploy](https://deploy-badge.vercel.app/vercel/betadogswap-dogtokens-projects)

# USDog

This is the official repo of the USDog decentralized exchange (DEX) built on the MintMe blockchain. USDog allows users to trade tokens in a permissionless manner using an automated market maker (AMM) model.

## About USDog

USDog is a decentralized exchange (DEX) built on the MintMe blockchain that allows users to trade tokens in a permissionless manner. The DEX utilizes an automated market maker (AMM) model to facilitate trading without relying on order books.

Key features:

- Trade tokens in a decentralized manner without permission
- Uses an AMM model instead of order books
- Users can provide liquidity to earn fees and $BONE governance tokens
- $BONE tokens are earned through staking and pooling
- Aims to be a fast, secure, easy way to trade tokens in a decentralized manner

## Roadmap

### Phase 1: Initial Development

- [x] Implement basic token swap functionality
- [x] Add initial liquidity pools for major token pairs
- [x] Implement staking rewards for liquidity providers
- [x] Add more token pairs

### Phase 2: UI / Code / Optimisation

- [x] Upgrade to React 18
- [x] Fix any issues discovered during upgrade
- [ ] Perform additional testing
- [ ] Establish bug bounty program
- [ ] Create a functional graph
- [ ] Have public available analytics

### Phase 3: Governance Integration

- [ ] Integrate decentralized governance mechanism
- [ ] Allow $BONE holders to vote on protocol changes
- [ ] Implement on-chain voting for new feature proposals
- [ ] Build governance dashboard
- [ ] Establish process for proposing upgrades

## Getting Started with USDog

To start using USDog, you first need to connect to the MintMe blockchain. Here are the details on how to do that:

### 1. Install a MintMe-Compatible Wallet

You'll need a crypto wallet that is compatible with the MintMe blockchain. We recommend using MetaMask, which supports MintMe out of the box. Just download and install MetaMask.

### 2. Configure MetaMask for MintMe

Once MetaMask is installed, you need to configure it to connect to the MintMe network:

- Open MetaMask and click on the network dropdown (top center).
- Scroll down and select "Custom RPC".
- Enter the following network details:
  - Network Name: MintMe
  - New RPC URL: https://sichang-rpc.thaichain.org
  - ChainID: 24734
  - Symbol: MINTME
- Click "Save" to add the MintMe network.

### 3. Get Some MINTME Tokens

You'll need some MINTME tokens in order to trade on USDog. 
You can buy them at https://mintme.com

Once you have MINTME in your wallet, you're ready to start using USDog!

### 4. Connect Your Wallet to USDog

Go to [dogswap.com](https://usdog.fi) and click "Connect Wallet" in the top right. This will bring up your MetaMask wallet. Confirm the connection and you're all set!

Now you can start swapping tokens and providing liquidity on USDog. Let us know if you have any other questions!

## Supporting USDog

If you wish to support development, you can purchase USDog tokens on the MintMe website. You can register here: https://www.mintme.com/token/USDog/invite (new users get a bonus).

## Legal

USDog is an open source protocol that allows for decentralized token exchange on the MintMe blockchain. Usage of the protocol is governed by the MIT license found in the LICENSE file.

While USDog enables decentralized trading, users trade tokens at their own risk. The USDog developers and community members are not responsible for any loss of funds. Users should do their own research on tokens before trading them.

Some key legal considerations when using USDog:

- USDog does not custody user funds. Users maintain control of their wallets and tokens at all times.

- There are smart contract risks inherent to decentralized finance. Users should exercise caution when approving token contracts and understand the risks involved.

- USDog does not provide investment advice. Users trade tokens at their own discretion.

- Users are responsible for any taxes associated with their trading activity. USDog does not collect user information or report trades to tax authorities.

- USDog does not block access to any users or jurisdictions. It is the user's responsibility to ensure they comply with applicable laws and regulations in their jurisdiction.

- USDog code is provided as-is without warranty. Users assume all responsibility for risks associated with using the protocol.

We strive to make USDog open, transparent and easy to use. But users should exercise caution, do their own research, and understand the risks before using any decentralized protocol. Please use USDog responsibly!

## Contributing

Contributions of all kinds are welcome! Here are some ways you can contribute to USDog:

- Report bugs and submit feature requests by opening GitHub issues.
- Improve the documentation by submitting pull requests with enhancements.
- Contribute to the Solidity smart contracts.
- Help build the front-end UI.
- Write tutorials and blog posts about USDog.
- Spread the word about USDog on social media.

This project is MIT licensed, so any contributions will be under that license. 
Feel free to fork the repo and submit pull requests.

We're excited to collaborate with the community to improve USDog!

## Contract Addresses

```
[Router: 0xa6c72da53025c5291d326fadc5a1277aa21fef2c](https://www.mintme.com/explorer/addr/0xa6c72da53025c5291d326fadc5a1277aa21fef2c "Router")
[Factory: 0x86818c666b90f6f4706560afc72c2c2fa7b9c74a](https://www.mintme.com/explorer/addr/0x86818c666b90f6f4706560afc72c2c2fa7b9c74a "Factory")
[WETH: 0x067fa59cd5d5cd62be16c8d1df0d80e35a1d88dc](https://www.mintme.com/explorer/addr/0x067fa59cd5d5cd62be16c8d1df0d80e35a1d88dc "WETH")
[$BONE: 0x9D8dd79F2d4ba9E1C3820d7659A5F5D2FA1C22eF](https://www.mintme.com/explorer/addr/0x9D8dd79F2d4ba9E1C3820d7659A5F5D2FA1C22eF "BONE")
[USDog: 0x1628160C66e0330090248a163A34Ba5B5A82D4f7](https://www.mintme.com/explorer/addr/0x1628160C66e0330090248a163A34Ba5B5A82D4f7
```