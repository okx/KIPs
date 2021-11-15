# KIP-(27): MixSwap

| Author   | Zhang Xiang |
| :------- | ---------------------- |
| Status   | Draft                  |
| Type     | Standard Track         |
| Category | Dapp              |
| Created  | Augest 10, 2020           |

## 1. Introduction

### What is MixSwap? 
MixSwap is an on-chain system on the oec blockchain, implementing an automated liquidity protocol based on a “constant product formula”. 
Traders pay a 30-basis-point fee on trades, which goes to liquidity providers. Supporting only pairs between Token on oec and OKT.

### Features & How it works
- Swap Token to OKT And Swap OKT to Token
- Add Liquidity: add OKT And Any Token to Pool
- Remove Liquidity
- Create Account & Login

A small liquidity provider fee (0.30%) is taken out of each trade and added to the reserves. While the OKT-Token reserve ratio is constantly shifting, fees makes sure that the total combined reserve size increases with every trade. This functions as a payout to liquidity providers that is collected when they burn their pool tokens to withdraw their portion of total reserves. Guaranteed arbitrage opportunities from price fluctuations should push a steady flow of transactions through the system and increase the amount of fee revenue generated.


## Code
[Source Code](https://github.com/shellteo/myMix)

## Status
In development
