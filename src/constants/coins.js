import * as chains from './chains';

// If you add coins for a new network, make sure Weth address (for the router you are using) is the first entry

const MINTMECoins = [
  {
    name: "CO2e",
    abbr: "CO2e",
    address: "", 
    logoUrl: "https://pub-89889c1f7aea4fc08378f41c30a7fa44.r2.dev/co2e-logo.png",
  },
  {
    name: "USDT",
    abbr: "USDT",
    address: "0x38f4fd0E7F9d7e5f58Df610e5E739aFE544E9170",
    logoUrl: "https://pub-89889c1f7aea4fc08378f41c30a7fa44.r2.dev/usdt-logo.png",
  },
  {
    name: "TVER REF",
    abbr: "TVREF",
    address: "0xd49B7CB086a17E46AA420cf52eCC8C1061fa4dD4",
    logoUrl: "https://pub-89889c1f7aea4fc08378f41c30a7fa44.r2.dev/tvref.png",
  },
  {
    name: "CO2e DEX",
    abbr: "CO2DEX",
    address: "0x3610587e99D40deDf91403465A834275f3B9cA98",
    logoUrl: "https://pub-89889c1f7aea4fc08378f41c30a7fa44.r2.dev/co2dex.png",
  }
]

const COINS = new Map();
COINS.set(chains.ChainId.CO2E, MINTMECoins);
export default COINS
