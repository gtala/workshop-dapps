import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'

import { wagmiMintExampleAbi } from './abis/wagmiMintExampleAbi'

export default defineConfig(() => {
  return {
    out: "src/generated.ts",
    contracts: [
      {
        abi: wagmiMintExampleAbi,
        name: "WagmiMintExample",
        address: {
          [chains.mainnet.id]: "0xfba3912ca04dd458c843e2ee08967fc04f3579c2",
          [chains.sepolia.id]: "0x2fb9F1630Fe4bFe5020Af336542E5cd1f7d88081",
        },
      },
    ],
    plugins: [react()],
  };
})
