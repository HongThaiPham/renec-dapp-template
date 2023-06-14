import { DemonWalletName, DemonWindow } from "@/utils/demon-wallet.util";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCallback } from "react";

declare const window: DemonWindow;

export const useConnectWallet = () => {
  const { connect, select } = useWallet();

  const connectWallet = useCallback(() => {
    if (!window?.demon?.sol) {
      return window.open(
        `https://renec.foundation/en/support/how-to-create-a-new-demon-wallet`,
        "_blank"
      );
    }
    select(DemonWalletName);

    connect().catch(() => {});
  }, [connect, select]);

  return connectWallet;
};
