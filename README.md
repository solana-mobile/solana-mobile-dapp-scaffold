# Solana Mobile dApp Scaffold

A ready-to-go template Solana React Native dApp with dependencies installed and basic React UI components.
It provides an interface to connect to locally installed wallet apps (that are MWA-compatible), view your account balance on devnet, and request an airdrop of SOL.

This React Native dApp is only fully functional on Android.

## Featured Libarires
- [Mobile Wallet Adapter](https://github.com/solana-mobile/mobile-wallet-adapter/tree/main/js/packages/mobile-wallet-adapter-protocol) for connecting to wallets and signing transactions/messages
- [web3.js](https://solana-labs.github.io/solana-web3.js/) for constructing transactions and an RPC `connection` client.

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/solana-mobile/solana-mobile-dapp-scaffold/assets/18451967/3d83d3dc-ab65-4a2c-881d-8a229f34e392" alt="Scaffold dApp Screenshot 1" width=300 />
    </td>
    <td align="center">
      <img src="https://github.com/solana-mobile/solana-mobile-dapp-scaffold/assets/18451967/c6bebd4c-2bf0-4519-8d60-44c7b0d365d0" alt="Scaffold dApp Screenshot 2" width=300 />
    </td>
    <td align="center">
      <img src="https://github.com/solana-mobile/solana-mobile-dapp-scaffold/assets/18451967/eda431f5-1b95-41bc-a4db-6974a339717d" alt="Scaffold dApp Screenshot 3" width=300 />
    </td>
  </tr>
</table>

## Prerequisites

If you haven't setup a React Native development environment for Android, you'll need to do that first. Follow the [Prerequisite Setup Guide](https://docs.solanamobile.com/getting-started/development-setup).

Follow the guide to make sure you:
- setup your Android and React Native development environment.
- have an Android device or emulator.
- install an MWA compliant wallet app on your device/emulator.
   
## Usage
1. Initialize project template
```
npx react-native init MySolanaDapp --template https://github.com/solana-mobile/solana-mobile-dapp-scaffold.git
cd MySolanaDapp
```
2. Install dependencies
- `yarn install` or `npm install`
3. Launch the app on your Android device/emulator
- `npx react-native run-android`

## Troubleshooting
  
- `TypeError: cli.init is not a function`: This during template initialization means you have an old version of React Native CLI.
This template only works with the new CLI. You can uninstall and reinstall it as directed [here](https://stackoverflow.com/questions/72768245/typeerror-cli-init-is-not-a-function-for-react-native).

- `Looks like your iOS environment is not properly set`: You can ignore this during template initialization and build the Android app as normal. This template is only compatible with Android.



