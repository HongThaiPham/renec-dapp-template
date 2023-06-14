export const getRpcEndpointUrl = () =>
  process.env.NEXT_PUBLIC_IS_MAINNET === "true" ? process.env.NEXT_PUBLIC_MAINNET_URL! : process.env.NEXT_PUBLIC_TESTNET_URL!;