// Standard BEP-20 ABI fragment for name, symbol, totalSupply
export const BEP20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)"
];
