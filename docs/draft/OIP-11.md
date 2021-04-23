# KIP-11: OKExChain Rust SDK

| Author   | Jihui Zheng (@zjhmale) |
| :------- | ---------------------- |
| Status   | Draft                  |
| Type     | Standard Track         |
| Category | SDK                    |
| Created  | June 30, 2020          |

## Introduction

Rust is widely used in cryptocurrency world including blockchain system, exchange matching engine, smart contract etc.

This KIP is intend to develop a fully functional SDK for OKExChain base on Rust.

The project:

- https://github.com/zjhmale/okexchain-rust-sdk

Video demo:

- https://youtu.be/ovQQU7dT2SI

## Proposal

Basiclly, the development will follow [OKExChain HTTP API](https://documenter.getpostman.com/view/1112175/SzS5u6bE?version=latest#f5bc92c9-4e8c-40f5-b3fe-d9635c418402).

Additionally, will use the existed Go and Java SDK as references.

The SDK will provide both `sync` and `async` implementations.

