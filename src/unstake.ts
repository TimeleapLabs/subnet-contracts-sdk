import type { Manager } from "./typechain/index.js";

/**
 * Unstake caller (tx signer) and withdraw all staked assets.
 * Resolves once the tx is mined.
 */
export async function unstake(manager: Manager): Promise<void> {
  const tx = await manager.withdraw();
  await tx.wait();
}
