"use client";

import { useWallet as useSuiWallet, SuiWallet } from "@suiet/wallet-kit";

export const ConnectSUI = () => {
  const { select, address, connected, name, status, account, disconnect } =
    useSuiWallet();

  return (
    <div>
      <button
        onClick={() => {
          select(SuiWallet.name);
        }}
      >
        CONNECT SUI{" "}
      </button>
      <button onClick={disconnect}>DISCONNECT SUI</button>
      <p>`STATUS ${status}` </p>
      <p>`connected wallet address ${address}` </p>
      <p>`connected account info ${account?.address}` </p>
    </div>
  );
};
