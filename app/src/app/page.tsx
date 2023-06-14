import CallProgram from "@/components/CallProgram";
import MyAddress from "@/components/MyAddress";
import dynamic from "next/dynamic";

const ConnectWalletButton = dynamic(
  () => import("@/components/ConnectWalletButton"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyAddress />
      <CallProgram />
      <ConnectWalletButton />
    </main>
  );
}
