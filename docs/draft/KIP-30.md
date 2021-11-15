# KIP-30: OEC ＆ DAppBirds Partnership proposal

| Author   | DappBirds Labs (@DAppBirds-Labs) |
| :------- | ---------------------- |
| Status   | Draft                  |
| Type     | Standard Track         |
| Category | Core                   |
| Created  | June 16, 2020           |
| Update  | July 30, 2020           |

## Update Submit The DApp

Team complete the OEC OKT Vote Tool.

- web url: http://staking.okchain.dappbirds.com/
- github: https://github.com/DAppBirds-Labs/okchain-staking-vote
- preview images

![image](/docs/assets/KIP-30/home.png)
home page

---

![image](/docs/assets/KIP-30/deposit.png)

deposit action

---

![image](/docs/assets/KIP-30/add_shares.png)
add shares action

---

![image](/docs/assets/KIP-30/validator_detail.png)
validator detail page

---
![image](/docs/assets/KIP-30/profile.png)
profile info

## Introduction

[DappBirds](https://store.dappbirds.com) is the world’s leading DAPP ecological service platform. From DAPP data analysis to the platform integrating design, chain transformation, distribution, operation, cross chain and transaction, it has connected more than 14 public chains, including nearly 4000 dapps, dozens of chain transformations and releases. It is also the only one in the industry that has independently developed and accessed the wallet service and can be downloaded directly in the global app store At present, PC, H5, small programs and app are fully covered by our products. There are also innovative game mining pool models, which have landed in multiple public chain mining pools, of which IOST has been the top ten mining pool nodes in the world. Nearly 100000 DAPP users are covered in all channels, dau in 5500+, Chinese, Korean and English versions covering the world, 70% of domestic users and 30% of overseas users.

As the world's leading cryptocurrency exchange platform, OKEX has developed and launched the [OEC](https://www.okex.com/oec) ecosystem with industry-leading technical strength. The DPoS consensus mechanism adopted by OEC has industry leading advantages in terms of block generation time and efficiency. In addition, in the voting mechanism of OEC, the participating roles are composed of "ordinary voter" and "proxy voter". Ordinary voters can actively vote for the node, and can also establish a proxy relationship with proxy voters. The proxy voter can proxy ordinary users to exercise voting rights.

In order for OEC eco-node users to enjoy rights in multiple dimensions at the same time through different participation identities, DAppBirds will help OEC build the safest and most stable autonomous Staking system.

OEC: https://www.okex.com/oec

DAppBirds Labs:

- https://dappbirds.com
- https://github.com/dappBirds-Labs

## Partnership Proposal

### 1. Staking Vote System

#### 1.1 Overview
Staking system is a decentralized DAPP developed by DAppBirds for OEC public chain governance. OEC ecological node users can enjoy rights in multiple dimensions at the same time through different participation identities, such as obtaining block rewards and voting rewards. The holders of OKB will become the first batch of OKT holders, which will have a very important impact on their participation in multiple public chain participation scenarios such as super nodes, proxy voters, and ecological alliances on OEC in the future.

In terms of governance, OEC adopts the super node election rules and dividend mechanism. Through a reasonable and proxy proxy voting mechanism, OEC ecosystem will generate a total of 21 super nodes; at the same time, the "one vote and multiple vote" node participation method will be the largest To a certain extent reflects and meets the will of the internal nodes of the ecology and the acquisition of multi-dimensional rights.

#### 1.2 Functional structure

![image](/docs/assets/KIP-30/func-struct.png)

#### 1.3 Solution

OEC is completely open source and provides developers with the corresponding SDK and JSON-RPC. By docking with OEC SDK, we can verify the user’s wallet address authority, verify it through the signature information and public key, and assign permissions to the current user, as well as obtain the user’s voting records, accumulated income, income dividends and other information, through JSON-RPC service Obtain node information, display the node list, distinguish super nodes and candidate nodes from UI interaction, and display the node's block revenue, users can choose the node they like. In addition, it also provides good support for proxy voting, which will meet the diverse needs of users.
