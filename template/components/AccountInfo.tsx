import React from 'react';
import {LAMPORTS_PER_SOL, PublicKey} from '@solana/web3.js';
import {StyleSheet, View, Text} from 'react-native';
import RequestAirdropButton from './RequestAirdropButton';
import DisconnectButton from './DisconnectButton';

interface Account {
  address: string;
  label?: string | undefined;
  publicKey: PublicKey;
}

type AccountInfoProps = Readonly<{
  selectedAccount: Account;
  balance: number | null;
  fetchAndUpdateBalance: (account: Account) => void;
}>;

function convertLamportsToSOL(lamports: number) {
  return new Intl.NumberFormat(undefined, {maximumFractionDigits: 1}).format(
    (lamports || 0) / LAMPORTS_PER_SOL,
  );
}

export default function AccountInfo({
  balance,
  selectedAccount,
  fetchAndUpdateBalance,
}: AccountInfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.walletHeader}>Wallet Account Info</Text>
        <Text style={styles.walletBalance}>
          {selectedAccount.label
            ? `${selectedAccount.label}: ◎${
                balance ? convertLamportsToSOL(balance) : '0'
              } SOL`
            : 'Wallet name not found'}
        </Text>
        <Text style={styles.walletNameSubtitle}>{selectedAccount.address}</Text>
        <View style={styles.buttonGroup}>
          <DisconnectButton title={'Disconnect'} />
          <RequestAirdropButton
            selectedAccount={selectedAccount}
            onAirdropComplete={async (account: Account) =>
              await fetchAndUpdateBalance(account)
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    columnGap: 10,
  },
  walletHeader: {
    fontWeight: 'bold',
  },
  walletBalance: {
    fontSize: 20,
  },
  walletNameSubtitle: {
    fontSize: 12,
    marginBottom: 5,
  },
});
