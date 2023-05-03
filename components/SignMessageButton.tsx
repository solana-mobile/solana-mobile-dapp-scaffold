import React, {useState, useCallback} from 'react';
import {Button, StyleSheet, Alert} from 'react-native';
import {fromUint8Array} from 'js-base64';
import {
  transact,
  Web3MobileWallet,
} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';

import {useAuthorization} from './AuthorizationProvider';

export const APP_IDENTITY = {
  name: 'Solana dApp Scaffold',
};

export default function SignMessageButton() {
  const {authorizeSession} = useAuthorization();
  const [signingInProgress, setSigningInProgress] = useState(false);
  const signMessage = useCallback(
    async (messageBuffer: Uint8Array) => {
      return await transact(async (wallet: Web3MobileWallet) => {
        // First, request for authorization from the wallet.
        const authorizationResult = await authorizeSession(wallet);

        // Sign the payload with the provided address from authorization.
        const signedMessages = await wallet.signMessages({
          addresses: [authorizationResult.address],
          payloads: [messageBuffer],
        });

        return signedMessages[0];
      });
    },
    [authorizeSession],
  );

  return (
    <Button
      title="Sign Message"
      disabled={signingInProgress}
      onPress={async () => {
        if (signingInProgress) {
          return;
        }
        setSigningInProgress(true);
        try {
          const message = 'Hello world!';
          const messageBuffer = new Uint8Array(
            message.split('').map(c => c.charCodeAt(0)),
          );
          const signedMessage = await signMessage(messageBuffer);
          setTimeout(async () => {
            Alert.alert('Signed message:', '' + fromUint8Array(signedMessage), [
              {text: 'Ok', style: 'cancel'},
            ]);
          }, 100);
        } catch (error) {
          console.error('Error signing message:', error);
        } finally {
          setSigningInProgress(false);
        }
      }}
    />
  );
}
