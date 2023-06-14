"use client";
import { useProgram } from "@/hooks/useProgram";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { useCallback, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { BN, web3 } from "@project-serum/anchor";
const PROGRAM_ID = new PublicKey(process.env.NEXT_PUBLIC_PROGRAM_ID!);
const CallProgram = () => {
  const { connection } = useConnection();
  const wallet: any = useAnchorWallet();

  const { program } = useProgram({ connection, wallet });

  const [numData, setNumData] = useState("0");

  const handleAirdrop = useCallback(async () => {
    if (wallet) {
      const signature = await connection.requestAirdrop(
        wallet.publicKey,
        10000000000
      );

      console.log("signature: ", signature);
      const tx = await connection.confirmTransaction(signature);
      console.log(tx);
    }
  }, [connection, wallet]);

  const handleFindAccount = useCallback(() => {
    const [pda] = findProgramAddressSync(
      [Buffer.from("number"), wallet.publicKey.toBuffer()],
      PROGRAM_ID
    );
    return pda;
  }, [wallet]);

  const fetchProgramData = useCallback(async () => {
    if (program) {
      const pda = handleFindAccount();

      const data = await program.account.numberBucket.fetch(pda);
      console.log("data: ", data);
      setNumData(data.data.toString());
    }
  }, [handleFindAccount, program]);

  const handleIncrement = useCallback(async () => {
    if (program) {
      const pda = handleFindAccount();
      console.log({
        number: pda.toBase58(),
        authority: wallet.publicKey.toBase58(),
        systemProgram: web3.SystemProgram.programId.toBase58(),
        rent: web3.SYSVAR_RENT_PUBKEY.toBase58(),
      });
      const tx = await program.methods
        .increaseNumber(new BN(1))
        .accounts({
          number: pda,
          authority: new PublicKey(wallet.publicKey),
          systemProgram: web3.SystemProgram.programId,
          rent: web3.SYSVAR_RENT_PUBKEY,
        })

        .rpc();

      console.log("tx: ", tx);
    }
  }, [program, wallet, handleFindAccount]);

  const handleDecrement = useCallback(async () => {
    if (program) {
      const pda = handleFindAccount();
      console.log({
        number: pda.toBase58(),
        authority: wallet.publicKey.toBase58(),
        systemProgram: web3.SystemProgram.programId.toBase58(),
        rent: web3.SYSVAR_RENT_PUBKEY.toBase58(),
      });
      const tx = await program.methods
        .decreaseNumber(new BN(1))
        .accounts({
          number: pda,
          authority: new PublicKey(wallet.publicKey),
          systemProgram: web3.SystemProgram.programId,
          rent: web3.SYSVAR_RENT_PUBKEY,
        })
        .rpc();

      console.log("tx: ", tx);
    }
  }, [program, wallet, handleFindAccount]);

  const handleInitAccount = useCallback(async () => {
    if (program) {
      const pda = handleFindAccount();
      console.log({
        number: pda.toBase58(),
        authority: wallet.publicKey.toBase58(),
        systemProgram: web3.SystemProgram.programId.toBase58(),
        rent: web3.SYSVAR_RENT_PUBKEY.toBase58(),
      });
      const tx = await program.methods
        .initializeNumberBucket()
        .accounts({
          number: pda,
          authority: new PublicKey(wallet.publicKey),
          systemProgram: web3.SystemProgram.programId,
          rent: web3.SYSVAR_RENT_PUBKEY,
        })
        .rpc();

      console.log("tx: ", tx);
    }
  }, [program, wallet, handleFindAccount]);

  return (
    <section className="flex gap-3">
      <button
        onClick={handleAirdrop}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-500 ease-in-out"
      >
        Airdrop 10 RENEC
      </button>
      <button
        onClick={handleInitAccount}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-500 ease-in-out"
      >
        Init Number Bucket
      </button>
      <button
        onClick={fetchProgramData}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-500 ease-in-out"
      >
        Fetch Program Data {numData}
      </button>
      <button
        onClick={handleIncrement}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-500 ease-in-out"
      >
        Increment 1
      </button>
      <button
        onClick={handleDecrement}
        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-all duration-500 ease-in-out"
      >
        Decrement 1
      </button>
    </section>
  );
};

export default CallProgram;
