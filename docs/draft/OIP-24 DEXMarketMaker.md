# OIP-24: DEX MarketMaker

| Author   | Kevin-OpenSource-Labs |
| :------- | ------------------------ |
| Status   | Draft                    |
| Type     | Standard Track           |
| Category | Application              |
| Created  | 2020-7-21                |

## 1. Introduction

User can create their own token on OKChain and allow other user to trade it. But sometimes some tokens are lack of liquidity. User need a market maker robot to supply liquidity and make the tokens in fair value.

DEXMarketMaker can provide a simple market maker robot for user. User also can implment their own market maker with more details based on it.

## 2. Summary

This OIP aims to provide a market maker frameworker for okex dex.

## 3. Proposal

DEXMarketMaker is going to provide an open source, extendsible, and convenient framework for any user to implmenet their own customized market maker for okex dex with more details.
It contains the following main models:

# a. Fair value module

The module is responsible to getting lasteast information and calculating fair value and market state

# b. Quote module

The module is responsible to manage buy and sell pending orders on market based on fair value and quote strategy. If the market state is abnormal, it should cancel all pending orders

# c. Risk control module 

The module is responsible to control risk, include but not limited to hedge exposure, pnl monitoring, etc.

## 4. Status

This OIP is under implementation based on okchain-java-sdk.
