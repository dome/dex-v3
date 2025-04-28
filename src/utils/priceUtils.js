import { ethers } from 'ethers';
import pairABI from "./../assets/abi/IUniswapV2Pair.json";

const POOLS = [
  { id: 0, name: "$CO2DEX-WCO2E", address: "0xf77597F4165DC70C74f93F04EB98c62eE222fadA" },
  { id: 1, name: "$CO2DEX-USDC", address: "0x0BA7216BD34CAF32d1FBCb9341997328b38a03a3" },
  { id: 2, name: "WCO2E-USDC", address: "0x1Ea95048A66455C3852dBE4620A3970831564189" },
  { id: 3, name: "WCO2E-DOGSP", address: "0x07Da7DA47b3C71a023d194ff623ab3a737c46393" },
  { id: 5, name: "$CO2DEX-DOGSP", address: "0xCfFF901398cB001D740FFf564D2dcc9Dbd898a11" },
];
const BONE_TOKEN_DECIMALS = 18;

export const getBonePriceInMintMe = async () => {
  const provider = new ethers.providers.JsonRpcProvider("https://rpc.co2e.cc");
  const bonePool = POOLS.find(pool => pool.name === "$CO2DEX-WCO2E");
  const boneReserves = await new ethers.Contract(bonePool.address, pairABI, provider).getReserves();
  const boneReserve0 = boneReserves[0] / 10 ** BONE_TOKEN_DECIMALS;
  const boneReserve1 = boneReserves[1] / 10 ** 18;
  const boneInWMINT = boneReserve1 / boneReserve0;
  const dexPriceInCO2e = 1 / boneInWMINT;
  return parseFloat(dexPriceInCO2e).toFixed(8);
};

export const getBonePriceInUSD = async (mintmePriceInUSD) => {
  const dexPriceInCO2e = await getBonePriceInMintMe();
  return (dexPriceInCO2e * mintmePriceInUSD).toFixed(4);
};