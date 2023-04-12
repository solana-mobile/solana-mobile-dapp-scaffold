import {ConnectionProvider} from '@solana/wallet-adapter-react';
import {clusterApiUrl, PublicKey, PublicKeyInitData} from '@solana/web3.js';
import React, {Suspense} from 'react';
import {
  AppState,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import MainScreen from './screens/MainScreen';

const DEVNET_ENDPOINT = clusterApiUrl('devnet');

function cacheReviver(key: string, value: any) {
  if (key === 'publicKey') {
    return new PublicKey(value as PublicKeyInitData);
  } else {
    return value;
  }
}

export default function App() {
  return (
    <ConnectionProvider
      config={{commitment: 'processed'}}
      endpoint={DEVNET_ENDPOINT}>
      <SafeAreaView style={styles.shell}>
            <MainScreen />
      </SafeAreaView>
    </ConnectionProvider>
  );
}

const styles = StyleSheet.create({
  shell: {
    height: '100%',
  },
});
