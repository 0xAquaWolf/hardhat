import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ONE_GWEI = 1_000_000_000n;

export default buildModule("LockModule", (m) => {
  const unlockTime = m.getParameter("unlockTime");
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const lock = m.contract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  return { lock };
});