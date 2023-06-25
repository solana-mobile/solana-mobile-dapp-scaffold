# Solana Mobile dApp Scaffold

A ready-to-go template Solana React Native dApp with dependencies installed and basic React UI components.
It provides an interface to connect to locally installed wallet apps (that are MWA-compatible), view your account balance on devnet, and request an airdrop of SOL.

This React Native dApp is only fully functional on Android.

The app showcases basic usage of the Solana Mobile Javascript SDK including:
- Mobile Wallet Adapter
- web3.js

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




# Prerequisite Setup

- Solana Mobile Docs: [Prerequisite Setup Guide](https://docs.solanamobile.com/getting-started/development-setup)

1. Setup your Android development environment by following [official React Native guide](https://reactnative.dev/docs/environment-setup)
2. [Download an MWA compliant wallet app onto your Android device/emulator.](https://docs.solanamobile.com/getting-started/development-setup#3-install-a-wallet-app)
   
# Running the app
1. Clone the repo
- `git clone https://github.com/solana-mobile//solana-mobile-dapp-scaffold.git` then `cd /solana-mobile-dapp-scaffold`
2. Install dependencies
- `yarn install` or `npm install`
3. Launch the app on your Android device/emulator
- `npx react-native run-android`


