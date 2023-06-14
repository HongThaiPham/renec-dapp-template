'use client'

import { useWallet } from "@solana/wallet-adapter-react"

export default function MyAddress() {
    const {publicKey} = useWallet()
    return (
        <div>{publicKey?.toBase58()}</div>
    )
}