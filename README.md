## Installation

follow the instructions below to install the project on your local machine.

[https://www.anchor-lang.com/docs/installation](https://www.anchor-lang.com/docs/installation)

## Usefull commands

```bash
anchor init [project-name]

anchor test

anchor build

anchor keys list

```

```bash
export RENEC_TESTNET_URL=https://api-testnet.renec.foundation:8899/
```

## Run test validator

```bash
solana-test-validator
```

## Create a new account

```bash
 solana-keygen new

 /// or

 solana-keygen new --outfile /home/leo/.config/solana/renec1.json
```

## View public key

```bash
solana address -k /home/leo/.config/solana/renec1.json
```

## Airdrop

```bash
solana airdrop 10  --url $RENEC_TESTNET_URL
```

## Copy needed files

```bash
cp target/idl/renec_dapp_template.json app/src/artifacts
cp target/types/renec_dapp_template.ts app/src/artifacts
```

## Deploy program

```bash
solana program deploy target/deploy/renec_dapp_template.so --keypair /home/leo/.config/solana/renec1.json --url $RENEC_TESTNET_URL

/// or

anchor deploy --provider.cluster $RENEC_TESTNET_URL --provider.wallet /home/leo/.config/solana/renec1.json 
```

## When deploy error

```bash
solana-keygen recover -o recover.json
solana program close recover.json
```