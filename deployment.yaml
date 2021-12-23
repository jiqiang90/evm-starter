dataSources:
  - kind: substrate/Runtime
    mapping:
      file: ipfs://QmdT3EoxLj5Ud3WE1jBjQETvhZ9evvmJf55qJZGeZNSpEP
      handlers:
        - handler: handleBlock
          kind: substrate/BlockHandler
        - filter:
            method: Deposit
            module: balances
          handler: handleEvent
          kind: substrate/EventHandler
        - handler: handleCall
          kind: substrate/CallHandler
    startBlock: 1
description: ''
name: Subql-Starter
network:
  endpoint: wss://polkadot.api.onfinality.io/public-ws
  genesisHash: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3'
repository: https://github.com/subquery/subql-starter
schema:
  file: ipfs://QmTP5BjtxETVqvU4MkRxmgf8NbceB17WtydS6oQeHBCyjz
specVersion: 0.2.0
version: 0.0.0
