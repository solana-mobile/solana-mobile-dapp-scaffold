import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useConnection} from '@solana/wallet-adapter-react';

import {Section} from '../components/Section';
import ConnectWalletButton from '../components/ConnectButton';
import AccountInfo from '../components/AccountInfo';
import {useAuthorization, Account} from '../components/AuthorizationProvider';

export default function MainScreen() {
  const {connection} = useConnection();
  const {selectedAccount} = useAuthorization();
  const [balance, setBalance] = useState<number | null>(null);

  const fetchAndUpdateBalance = useCallback(
    async (account: Account) => {
      const fetchedBalance = await connection.getBalance(account.publicKey);
      console.log('Balance fetched: ' + fetchedBalance);
      setBalance(fetchedBalance);
    },
    [connection],
  );

  useEffect(() => {
    if (!selectedAccount) {
      return;
    }
    fetchAndUpdateBalance(selectedAccount);
  }, [fetchAndUpdateBalance, selectedAccount]);

  return (
    <>
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          <Section title="Network" />

          <Section title="Balance" />
          {selectedAccount ? (
            <AccountInfo selectedAccount={selectedAccount} balance={balance} />
          ) : null}

          <Section title="Wallet Connection" />
        </ScrollView>

        <ConnectWalletButton title="Connect wallet" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  bulletContainer: {
    marginLeft: 32,
  },
  bullet: {
    fontSize: 18,
    marginBottom: 8,
  },
  connectButton: {
    margin: 16,
  },
});
