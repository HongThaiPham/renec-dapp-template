"use client";
import { DemonWalletAdapter } from "@/utils/demon-wallet.util";
import { getRpcEndpointUrl } from "@/utils/wallet.util";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useMemo, useState } from "react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const wallets = useMemo(() => {
    const supportedWallets = [new DemonWalletAdapter()];

    return supportedWallets;
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ConnectionProvider endpoint={getRpcEndpointUrl()}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
