import {useConnection} from '../components/providers/ConnectionProvider';
import React, {useState, useCallback} from 'react';
import {Button} from 'react-native';
import {Account} from './providers/AuthorizationProvider';
import {alertAndLog} from '../util/alertAndLog';
import {LAMPORTS_PER_SOL} from '@solana/web3.js';

type Props = Readonly<{
  selectedAccount: Account;
  onAirdropComplete: (account: Account) => void;
}>;

function convertLamportsToSOL(lamports: number) {
  return new Intl.NumberFormat(undefined, {maximumFractionDigits: 1}).format(
    (lamports || 0) / LAMPORTS_PER_SOL,
  );
}

const LAMPORTS_PER_AIRDROP = 1000000000;

export default function RequestAirdropButton({
  selectedAccount,
  onAirdropComplete,
}: Props) {
  const {connection} = useConnection();
  const [airdropInProgress, setAirdropInProgress] = useState(false);
  const requestAirdrop = useCallback(async () => {
    const signature = await connection.requestAirdrop(
      selectedAccount.publicKey,
      LAMPORTS_PER_AIRDROP,
    );

    return await connection.confirmTransaction(signature);
  }, [connection, selectedAccount]);
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
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const result = await requestAirdrop();
          alertAndLog(
            'Funding successful:',
            String(convertLamportsToSOL(LAMPORTS_PER_AIRDROP)) +
              ' SOL added to ' +
              selectedAccount.publicKey,
          );
          onAirdropComplete(selectedAccount);
        } catch (err: any) {
          alertAndLog(
            'Failed to fund account:',
            err instanceof Error ? err.message : err,
          );
        } finally {
          setAirdropInProgress(false);
        }
      }}
    />
  );
}
