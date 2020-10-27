# OIP-20: Tokens on OKExChain

| Author   | Ocean Fan (@OKExChain)  |
| -------  | --------------------- |
| Status   | Implemented           |
| Type     | Standard Track        |
| Category | Core                  |
| Created  | 2020-7-8              |

## 1. Summary

This OIP is a proposal for token management on the OKExChain.

## 2. Abstract

OIP-16 Proposal is about a standard set of rules for token management on the OKExChain. It subscribes 2 things of the token on OKExChain in detail: 1 What properties a token on OKExChain have. 2 What actions can be performed on a token of OKExChain.

## 3. Status

This OIP is implemented.

## 4. Motivation

The standard gives users a simple way to design and issue token on OKExChain. It allows any token met the standard on OKExChain to be easily supported by other applications: from wallets, explorer to exchanges.

## 5. Specification

### 5.1 OKT

The issuance of OKT, the native asset on OKExChain, will be on the genesis block and node block, and is expected to increase by 1-5% every year. As the native asset, OKT would be used for gas fees and on-chain governance. Besides, OKT is also used for operating DEX on OKExChain, serving as handling deposit, fees of listing dex and issuing tokens.

### 5.2 Token Definition

- Owner: The initial issuer of this token.
- OriginalSymbol: OriginalSymbol is the identifier you named for the token. e.g. "BTC"
- Symbol: Symbol is the OriginalSymbol added with a random suffix when created. - e.g. "BTC-B70"
- WholeName: WholeName is the long name of the token - e.g. "OKExChain Token".
- Type: The token type of the issued token: 1 for token issued by token module, 2 for token issued by tokenswap module. Reference for tokenswap(OIP3-OKExChain Token Swap)
- OriginalTotalSupply: Total supply will be the total number of issued tokens.
- Mintable: Mintable means whether this asset can be issued more than once, which would increase the total supply of the token.

### 5.3 Token Properties

#### 5.3.1 Issue Token

Below is the data structure which is needed to represent the new token. After the Issue Transaction, The data in all the below fields are not changeable except “Total Supply”, which can be changed via “Mint” or “Burn” operations.

| **Field**          | **Type** | **Description**                                              |
| -----------------  | -------- | ------------------------------------------------------------ |
| Description        | string   | Optional, It's used to describe what's the token and what's the token used for. Limited to 256 unicode characters. |
| WholeName          | string   | WholeName is the long name of the token, limited to 32 unicode characters, e.g. "OKExChain Token" |
| OriginalSymbol     | string   | The length of the string for representing this asset is between 3 and 8 alphanumeric characters and is case insensitive. After you created the token, the OriginalSymbol  will be added with a random suffix and turns into Symbol. A token can be created without a suffix by proposal. Currently, 4 tokens does not require this suffix: OKT,OKB,BTC,USDK|
| OriginalTotalSupply| int64    | The total supply for this token can have a maximum of 8 digits of decimal and is boosted by 1e8 in order to store as int64. The amount before boosting should not exceed 90 billion.
| Owner              | Address  | The initial issuer of this token, the OKT balance of issuer should be more than the fee for issuing tokens
| Mintable           | Boolean  | Whether this token could be minted(increased) after the initial issuing

**Symbol Convention:**

[Symbol]=[OriginalSymbol]-[Suffix]  For example Symbol: BTC-B70; OriginalSymbol: BTC


**Issue Process:**

- Issuer signed an issue transaction and make it broadcasted to one of OKExChain nodes
- This OKExChain node will check this transaction. If there is no error, then this transaction will be broadcasted to other OKExChain nodes
- Issue transaction is committed on the blockchain by block proposer
- Validators will verify the constraints on total supply and symbol and deduct the fee of issuing token from issuer’s account
- New token’s symbol is generated based on the transaction hash. It is added to the issuer’s address and token info is saved on the OKExChain

#### 5.3.2 Transfer Tokens

Transfer transaction is to send tokens from FromAddress to ToAddress.

| **Field**        | **Type** | **Description**                                              |
| ---------------- | -------- | ------------------------------------------------------------ |
| FromAddress      | address  | The address you sent a token from                            |
| ToAddress        | address  | The address you sent a token to |
| Amount           | String   | It is the amount you want to transfer plus the token symbol. Like "100OKT". Amount should be  positive and can have a maximum of 8 digits of decimal and is boosted by 1e8 in order to store as int64.                        |


**Transfer Process:**

- Transfer initiators sign a transfer transaction and make it broadcasted to one of OKExChain nodes
- The OKExChain node will check this transaction. If there is no error, then this transaction will be broadcasted to other OKExChain nodes
- Transfer transaction is committed on the blockchain by block proposer
- Validators will verify the constraints on balance. The transfer tokens and fee will be deducted from the address of the transaction initiators.
- Add the tokens to the destination addresses

#### 5.3.3 Mint Tokens

Mint transaction is to increase the total supply of a mintable token. The transaction initiator must be the token owner.

**Data Structure for Mint Operation**: A Data structure is needed to represent the mint operation.

| **Field**        | **Type** | **Description**                                              |
| ---------------- | -------- | ------------------------------------------------------------ |
| Amount           | String   | It is the amount you want to mint plus the token symbol. Like "100000OKT". Amount should be  positive and can have a maximum of 8 digits of decimal and is boosted by 1e8 in order to store as int64.                 |
| Owner            | Address  | The initial issuer of this token                               |

**Mint Process:**

- Token owner signs a mint transaction and makes it broadcasted to one of OKExChain nodes
- The OKExChain node will check this transaction. If there is no error, then this transaction will be broadcasted to other OKExChain nodes
- Mint transaction is committed on the blockchain by block proposer
- Validators will verify the constraints on whether the token is mintable and whether the bumped total supply will pass the limit. Then increase its total supply and deduct the fee from the address of the token owner
- Newly minted tokens are added to the address of the token owner and token info is updated on the OKExChain

#### 5.3.4 Burn Tokens

Burn transaction is to reduce the total supply of a token. The transaction initiator must be the token owner.

**Data Structure for Burn Operation**: A Data structure is needed to represent the burn operation.

| **Field**            | **Type** | **Description**                                              |
| -------------------- | -------- | ------------------------------------------------------------ |
| Amount               | string   | It is the amount you want to mint plus the token symbol. Like "100000OKT". Amount should be  positive and can have a maximum of 8 digits of decimal and is boosted by 1e8 in order to store as int64.                                   |
| Owner                | address  | The initial issuer of this token.                                      |


**Burn Process:**

- Token owner signs a burn transaction and makes it broadcasted to one of OKExChain nodes
- The OKExChain node will check this transaction. If there is no error, then this transaction will be broadcasted to other OKExChain nodes
- Burn transaction is committed on the blockchain by block proposer
- Validators will verify the constraints if the token’s supply is no less than the required amount, and then it decreases the total supply and deducts the fee from the address of the token owner
- Burned tokens are deducted from the address of the token owner and token info is updated on the OKExChain

## 6. License

The content is licensed under [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

 
