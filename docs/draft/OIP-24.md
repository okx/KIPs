# OIP-24: DEX MarketMaker

| Author   | Kevin-OpenSource-Labs |
| :------- | ------------------------ |
| Status   | Draft                    |
| Type     | Standard Track           |
| Category | Application              |
| Created  | 2020-7-21                |

## 1. Introduction

User can create their own token on OKChain and allow other users to trade it. But sometimes the tokens are lack of liquidity.

DEXMarketMaker can work as a simple market maker bot provide liquidity for specific token. User also can implment their own sophisticated market maker strategy based on it to work as a profitable bot

## 2. Summary

This OIP aims to provide a market maker frameworker for okex dex

## 3. Proposal

DEXMarketMaker is going to provide an open source, extendsible, and convenient framework for any user to implmenet their own customized market maker for okex dex with more details. It contains the following main components:

#### a. Account management component

The component is responsible for creating account and getting account info, etc

#### b. Fair value component

The component is responsible for getting latest information and calculating fair value / market state

#### c. Quote component

The component is responsible for managing buy and sell pending orders on market based on fair value and quote strategy. If the market state is abnormal, it should cancel all pending orders

#### d. Risk control component

The component is responsible for risk control, include but not limited to hedge exposure, pnl monitoring, etc

## 4. Status

This OIP is under implementation based on okchain-java-sdk.

The open source project URL is: https://github.com/Kevin-OpenSource-Labs/MarketMaker
