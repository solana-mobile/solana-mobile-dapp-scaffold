# Solana Mobile dApp Scaffold

A ready-to-go template Solana React Native dApp with dependencies installed and basic React UI components.
It provides an interface to connect to locally installed wallet apps (that are MWA-compatible), view your account balance on devnet, and request an airdrop of SOL.

This React Native dApp is only fully functional on Android.

## Toolkit
- Mobile Wallet Adapter for connecting to wallet, signing transactions and messages
- web3.js for 

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/solana-mobile/solana-mobile-dapp-scaffold/assets/18451967/3d83d3dc-ab65-4a2c-881d-8a229f34e392" alt="Scaffold dApp Screenshot 1" width=300 />
    </td>
    <td align="center">
      <img src="https://github.com/solana-mobile/solana-mobile-dapp-scaffold/assets/18451967/2fd69bd4-834d-45e1-8c7a-f80b5b576c96" alt="Scaffold dApp Screenshot 3" width=300 />
    </td>
    <td align="center">
      <img src="https://github.com/solana-mobile/solana-mobile-dapp-scaffold/assets/18451967/cdd93c12-d9ff-4739-81af-92da5b90303a" alt="Scaffold dApp Screenshot 2" width=300 />
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
1. Initialize your app template
- `npx react-native init MySolanaDapp --template https://github.com/solana-mobile/solana-mobile-dapp-scaffold.git` then `cd MySolanaDapp`
2. Install dependencies
- `yarn install` or `npm install`
3. Launch the app on your Android device/emulator
- `npx react-native run-android`

