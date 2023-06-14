"use client";
import { useConnectWallet } from "@/hooks/useConnectWallet";
import { useWallet } from "@solana/wallet-adapter-react";
import React, {
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useMemo,
} from "react";

type Props = {} & PropsWithChildren<{}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const ConnectWalletButton: React.FC<Props> = ({ children, ...props }) => {
  const { wallet, connecting, connected } = useWallet();
  const connectWallet = useConnectWallet();

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (!event.defaultPrevented) {
        connectWallet();
      }
    },
    [connectWallet]
  );
  const content = useMemo(() => {
    if (children) return children;
    if (connecting) return "Connecting...";
    if (connected) return "Connected";
    if (wallet) return "Connect";
    return "Connect Wallet";
  }, [children, connecting, connected, wallet]);

  return (
    <button
      {...props}
      onClick={handleClick}
      className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-all duration-500 ease-in-out"
    >
      {content}
    </button>
  );
};

export default ConnectWalletButton;
