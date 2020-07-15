
# OIP-5: OKChain ＆ Squeezer Partnership proposal

| Author   | Squeezer.IO (@SqueezerIO) |
| :------- | ---------------------- |
| Status   | Draft                  |
| Type     | Standard Track         |
| Category | Core                   |
| Created  | July 2, 2020           |

## Introduction

### About Squeezer

Squeezer is all-in-all solution created with the main goal to access blockchain as a service (BAAS) and to make the job easier to the worldwide developers to build and deploy dApps on different blockchains. We use microservices as backbone (AWS Lambda) in order to provide stability and scalability on dApps. Squeezer has over 6000 downloads and is starred on GitHub by 3000+ developers. Squeezer includes three main components in order to facilitate blockchain development. 

1. Squeezer Framework

Is an open source CLI for building and deploying decentralized applications.

2. Squeezer Platform

Team collaboration and continuous integration (CI). Import a project from Github, share it with your team and start the development in seconds.

3. ChainKit

Access blockchain as a service. Start building dApp by using ChainKit without being required to configure blockchain nodes or add extra infrastructures.

Squeezer:

- https://squeezer.io
- https://github.com/SqueezerIO

### About OKChain

[OKChain](https://www.okex.com/okchain) is a public blockchain and independently developed by the world-leading digital asset exchange OKEX. It was 100% open-sourced on April 16, 2020.

OKChain: https://www.okex.com/okchain

## Details of Plan

Use Squeezer to develop 2-way payment systems for inbound/outbound transactions on the top of OKChain for different crypto assets.

### Where does a two-way payment system fit in?

- Hot/Cold wallets
- Decentralized Exchanges (DEX)
- Banking systems
- Online retailers

### Product features:

- Bi-directional onchain transactions (inbound and outbound)
- Wallet double encryption (one access key is owned by the infrastructure admin and one by the wallet owner, both are required to make the final wallet decryption)
- User chooses how and where to store the wallet encrypted data
- On-the-fly encryption/decryption
- Switch between testnet, public or custom blockchain node
- Serverless (no need to tackle server configurations)
- Multiple stages and environments
- Local debugging and development made easy
- One click deployments
