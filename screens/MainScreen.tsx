import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import AccountInfo from '../components/AccountInfo';
import ConnectWalletButton from '../components/ConnectButton';

export default function MainScreen() {
  const {accounts, onChangeAccount, selectedAccount} = useAuthorization();

  return (
    <>
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          <Section title="Network" />

          <Section title="Balance" />

          <Section title="Wallet Connection" />
        </ScrollView>
        {accounts && selectedAccount ? (
          <AccountInfo
            accounts={accounts}
            onChange={onChangeAccount}
            selectedAccount={selectedAccount}
          />
        ) : (
          <ConnectWalletButton style={styles.connectButton} mode="contained">
            Connect to Wallet
          </ConnectWalletButton>
        )}
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
