import {useConnection} from '@solana/wallet-adapter-react';
import {PublicKey} from '@solana/web3.js';
import React, {useState, useCallback} from 'react';
import {Button} from 'react-native';

type Props = Readonly<{
  children?: React.ReactNode;
  publicKey: PublicKey;
}>;

const LAMPORTS_PER_AIRDROP = 100000000;

export default function RequestAirdropButton({publicKey}: Props) {
  const {connection} = useConnection();
  const [airdropInProgress, setAirdropInProgress] = useState(false);
  const requestAirdrop = useCallback(async () => {
    const signature = await connection.requestAirdrop(
      publicKey,
      LAMPORTS_PER_AIRDROP,
    );
    return await connection.confirmTransaction(signature);
  }, [connection, publicKey]);
  return (
    <Button
      title="Request Airdrop"
      disabled={airdropInProgress}
      onPress={async () => {
        if (airdropInProgress) {
          return;
        }
        setAirdropInProgress(true);
        try {
          const result = await requestAirdrop();
          if (result) {
            const {
              value: {err},
            } = result;
            if (err) {
              console.log(
                'Failed to fund account: ' +
                  (err instanceof Error ? err.message : err),
              );
            } else {
              console.log({children: 'Funding successful'});
              // mutate(
              //   ['accountBalance', publicKey],
              //   // Optimistic update; will be revalidated automatically by SWR.
              //   (currentBalance?: number) =>
              //     (currentBalance || 0) + LAMPORTS_PER_AIRDROP,
              // );
            }
          }
        } finally {
          setAirdropInProgress(false);
        }
      }}
    />
  );
}
