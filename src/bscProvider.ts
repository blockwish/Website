import { ethers } from 'ethers';

// Example BNB Chain RPC endpoint (can be replaced with your own or a public one)
export const BNB_RPC_URL = 'https://bsc-dataseed.binance.org/';

export function getBscProvider() {
  return new ethers.JsonRpcProvider(BNB_RPC_URL);
}
