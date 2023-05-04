# Solana Mobile dApp Scaffold
A ready-to-go template Solana Mobile React Native dApp with dependencies installed and basic React UI components.
It provides an interface to connect to locally installed wallet apps (that are MWA-compatible), view your account balance on devnet, and request an airdrop of SOL.

This React Native dApp is only fully functional on Android.

The app showcases basic usage of the Solana Mobile Javascript SDK including:
- Mobile Wallet Adapter (@solana-mobile/mobile-wallet-adapter-protocol)
- web3.js
- @solana/wallet-adapter-react

![Scaffold dApp Screenshot](https://user-images.githubusercontent.com/18451967/231659296-9eb68b3e-c2ea-46fc-bcb8-c8c75a26a0fc.png)


# Installation

1. Download and install JDK
- `https://www.oracle.com/java/technologies/downloads/`

1. Download and install Android Studios
- `https://developer.android.com/studio`

1. set environment variables
  ```bash
    # export paths for solana saga development
    export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home
    export ANDROID_HOME=/Users/<YOUR NAME>/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/platform-tools
  ```
1. Clone the repo
- `git clone https://github.com/solana-mobile/SolanaMobileDAppScaffold.git` then `cd SolanaMobileDAppScaffold`
1. Install dependencies
- `yarn install` or `npm install`
1. Launch the app on your Android device/emulator
- `npx react-native run-android`


