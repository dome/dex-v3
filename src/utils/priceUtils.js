import { ethers } from 'ethers';
import pairABI from "./../assets/abi/IUniswapV2Pair.json";

const POOLS = [
  { id: 0, name: "$CO2DEX-WCO2E", address: "0x2Bb962629aD1DCE86f4810Dd779452D0d2c91be5" },
  { id: 1, name: "$USDT-WCO2E", address: "0x21417Fa6fa31FA9A10F58F9ee2cD8ae3e87C6a54" }
];
const BONE_TOKEN_DECIMALS = 18;

export const getMintMePriceInUSD = async () => {
  const provider = new ethers.providers.JsonRpcProvider("https://rpc.co2e.cc");
  const bonePool = POOLS.find(pool => pool.name === "$USDT-WCO2E");
  const Reserves = await new ethers.Contract(bonePool.address, pairABI, provider).getReserves();
  const Reserve0 = Reserves[0] ;
  const Reserve1 = Reserves[1] ;
  const WCO2EinUSD = Reserve0 / Reserve1;
  return parseFloat(WCO2EinUSD).toFixed(8);
};
export const getBonePriceInMintMe = async () => {
  const provider = new ethers.providers.JsonRpcProvider("https://rpc.co2e.cc");
  const bonePool = POOLS.find(pool => pool.name === "$CO2DEX-WCO2E");
  const boneReserves = await new ethers.Contract(bonePool.address, pairABI, provider).getReserves();
  const boneReserve0 = boneReserves[0] ;
  const boneReserve1 = boneReserves[1] ;
  const boneInWMINT = boneReserve0 / boneReserve1;
  const dexPriceInCO2e = 1 / boneInWMINT;
  return parseFloat(dexPriceInCO2e).toFixed(8);
};

export const getBonePriceInUSD = async () => {
  const dexPriceInCO2e = await getBonePriceInMintMe();
  const mintmePriceInUSD = await getMintMePriceInUSD();
  return (dexPriceInCO2e * mintmePriceInUSD).toFixed(4);
};