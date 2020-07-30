# OIP-8: EVM

| Author   | iavl(@NetCloth) |
| :------- | --------------------- |
| Status   | Draft                 |
| Type     | Standard Track        |
| Category | Core                  |
| Created  | 2020-6-22             |

## 1. Summary

This OIP is about introducing EVM for OKChain to support running smart contracts.

## 2. Abstract­

This OIP defines transactions and messages to support running smart contracts on OKChain.

## 3. Status

Open Source Repository: https://github.com/iavl/okchain

Docs: https://github.com/iavl/okchain/tree/iavl-evm/docs/evm

## 4. Motivation

As the underlying runtime environment of smart contracts, EVM is currently the most mature virtual machine running on the blockchain.

Running smart contracts is one of OKChain's ecological directions.

The OIP is to conclude the target, to realize self-operation in the era of blockchain.

## 5. Specification

### 5.1 Message Structures

The creation and call of contracts message structure：

```go
type MsgContract struct {
	From    sdk.AccAddress `json:"from" yaml:"from"`
	To      sdk.AccAddress `json:"to" yaml:"to"`
	Payload hexutil.Bytes  `json:"payload" yaml:"payload"`
	Amount  sdk.Coin       `json:"amount" yaml:"amount"`
}
```

#### Creation

When the TO field in the MsgContract structure is nil, it means that this is a creation message.

#### Call

When the TO field in the MsgContract structure is an address, it means that this is a call message.

#### Contract Definition

Contract is a structure used by EVM to execute (virtual machine) instructions.

Whether it is the creation or call of a contract, the handler will first construct it into a contract structure, and then put into the EVM to execute

```go
type Contract struct {
	CallerAddress sdk.AccAddress
	caller        ContractRef
	self          ContractRef

	jumpdests map[sdk.Hash]bitvec // Aggregated result of JUMPDEST analysis.
	analysis  bitvec              // Locally cached result of JUMPDEST analysis

	Code     []byte
	CodeHash sdk.Hash
	CodeAddr *sdk.AccAddress
	Input    []byte

	Gas   uint64
	value *big.Int
}
```

### 5.2 Process

```handleMsgContract``` is a transaction handler in module which preforms state transition on the state machine.

```go
func handleMsgContract(ctx sdk.Context, msg MsgContract, k Keeper) (sdk.Result) {
	// validate msg
	err := msg.ValidateBasic()
	if err != nil {
		return nil, err
	}

	// state transition
	res, err := DoStateTransition(ctx, msg, k, ctx.Simulate)
	if err != nil {
		return err
	}

	// emite event
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.AttributeValueCategory),
		),
	)

	return sdk.Result{Data: res.Data, GasUsed: res.GasUsed, Events: ctx.EventManager().Events()}
}
```

## 6. License

The content is licensed under [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
