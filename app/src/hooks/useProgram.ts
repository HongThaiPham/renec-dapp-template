import { useCallback, useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import idl from "@/artifacts/renec_dapp_template.json";
import { RenecDappTemplate } from "@/artifacts/renec_dapp_template";

const programID = new PublicKey(process.env.NEXT_PUBLIC_PROGRAM_ID as string);

export interface Wallet {
  signTransaction(
    tx: anchor.web3.Transaction
  ): Promise<anchor.web3.Transaction>;
  signAllTransactions(
    txs: anchor.web3.Transaction[]
  ): Promise<anchor.web3.Transaction[]>;
  publicKey: anchor.web3.PublicKey;
}

type Props = {
  connection: Connection;
  wallet: Wallet;
};

export const useProgram = ({ connection, wallet }: Props) => {
  const [program, setProgram] = useState<anchor.Program<RenecDappTemplate>>();

  const updateProgram = useCallback(() => {
    const provider = new anchor.AnchorProvider(connection, wallet, {
      preflightCommitment: "confirmed",
      commitment: "confirmed",
    });
    console.log("provider", provider);

    // const idl = await anchor.Program.fetchIdl(programID, provider);
    // console.log("idl", idl);

    const program = new anchor.Program(
      idl as unknown as RenecDappTemplate,
      programID,
      provider
    );

    setProgram(program);
  }, [connection, wallet]);

  useEffect(() => {
    updateProgram();
  }, [connection, updateProgram, wallet]);
  return {
    program,
  };
};
