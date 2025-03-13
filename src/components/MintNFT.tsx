'use client'

import { useState } from 'react'
import { useWaitForTransaction } from 'wagmi'

import {
  useMarketPlaceCreateOffer, usePrepareMarketPlaceCreateOffer,
} from '../generated'

import { parseEther } from 'viem'


export function MintNFT() {
  const [tokenAddress, setTokenAddress] = useState('0x857832959943c07F1aee994d9ee9DB14E539b5D2')
    const [quantity, setQuantity] = useState(parseEther('0.01'))
  const [cost, setCost] = useState(parseEther('0.01'))


    const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareMarketPlaceCreateOffer({
    args: [tokenAddress, quantity, cost]
  } as any);
  const { data, error, isError, write } = useMarketPlaceCreateOffer(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <div>
      <input
        onChange={(e) => setTokenAddress(e.target.value)}
        placeholder="Token Address"
        value={tokenAddress}
      />
      <button disabled={!write || isLoading} onClick={() => write?.()}>
        {isLoading ? 'Minting...' : 'Mint'}
      </button>



      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}

      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </div>
  )
}