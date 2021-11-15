# KIP-33: Standard Proxy Storage Slots

| Author   | Ocean Fan (@OEC)  |
| -------  | --------------------- |
| Status   | Implemented           |
| Type     | Standard Track        |
| Category | Core                  |
| Created  | 2020-12-30              |

## 1. Summary

Standardise how proxies store the address of the logic contract they delegate to, and other proxy specific information.

## 2. Abstract

Delegating **proxy contracts** are widely used for both upgradeability and gas savings. These proxies rely on a **logic contract** (also known as implementation contract or master copy) that is called using ```delegatecall```. This allows proxies to keep a persistent state (storage and balance) while the code is delegated to the logic contract.

To avoid clashes in storage usage between the proxy and logic contract, the address of the logic contract is typically saved in a [specific storage slot](https://blog.zeppelinos.org/upgradeability-using-unstructured-storage/) guaranteed to be never allocated by a compiler. This KIP proposes a set of standard slots to store proxy information. This allows clients like block explorers to properly extract and show this information to end users, and logic contracts to optionally act upon it.

## 3. Status

This KIP is implemented.


## 4. Motivation

Delegating proxies are widely in use, as a means to both support upgrades and reduce gas costs of deployments. Examples of these proxies are found in [ZeppelinOS](https://blog.zeppelinos.org/the-transparent-proxy-pattern/), [Terminal](https://medium.com/terminaldotco/escape-hatch-proxy-efb681de108d), [Gnosis](https://blog.gnosis.pm/solidity-delegateproxy-contracts-e09957d0f201), [AragonOS](https://github.com/aragon/aragonOS/blob/dev/contracts/common/DelegateProxy.sol), [Melonport](https://github.com/melonproject/melon-mail/blob/782aeff9418ac8cdd80875fd6c400bf96f3b03b3/solidity/contracts/DelegateProxy.sol), [Limechain](https://github.com/LimeChain/UpgradeableSolidityContract/blob/14bcabc338130fb2aba2ce8bd27b885305566fce/contracts/Upgradeability/Forwardable.sol), [WindingTree](https://github.com/windingtree/upgradeable-token-labs/blob/af3b66096091d8282d5c9c55c33365315d85f3e1/contracts/upgradable/DelegateProxy.sol), [Decentraland](https://github.com/decentraland/land/blob/5154046844f6f94a5074e82abe01381e6fd7c39d/contracts/upgradable/DelegateProxy.sol), and many others.

However, the lack of a common interface for obtaining the logic address for a proxy makes it impossible to build common tools that act upon this information.

A classic example of this is a block explorer. Here, the end user wants to interact with the underlying logic contract and not the proxy itself. Having a common way to retrieve the logic contract address from a proxy would allow a block explorer, among other things, to show the ABI of the logic contract and not that of the proxy (see this [proxy](https://etherscan.io/token/0x00fdae9174357424a78afaad98da36fd66dd9e03#readContract) for an example). The explorer should check the storage of the contract at the distinguished slots to determine if it is indeed a proxy, in which case it should show information on both the proxy and the logic contract.

Another example are logic contracts that explicitly act upon the fact that they are being proxied. This allows them to potentially trigger a code update as part of their logic, as is the case of Universal Upgradeable Proxy Standard. A common storage slot allows these use cases independently of the specific proxy implementation being used.

## 5.  Specification
The main requirement for the storage slots chosen is that they must never be picked by the compiler to store any contract state variable. Otherwise, a logic contract could inadvertently overwrite this information on the proxy when writing to a variable of its own.

[Solidity](https://solidity.readthedocs.io/en/v0.4.21/miscellaneous.html#layout-of-state-variables-in-storage) maps variables to storage based on the order in which they were declared, after the contract inheritance chain is linearized: the first variable is assigned the first slot, and so on. The exception are values in dynamic arrays and mappings, which are stored in the hash of the concatenation of the key and the storage slot. The Solidity development team has [confirmed](https://twitter.com/ethchris/status/1073692785176444928) that the storage layout is to be preserved among new versions. Vyper seems to [follow the same strategy as Solidity](https://github.com/ethereum/vyper/issues/769). Note that contracts written in other languages, or directly in assembly, may incur in clashes.

As such, the proposed storage slots for proxy-specific information are the following. They are chosen in such a way so they are guaranteed to not clash with state variables allocated by the compiler, since they depend on the hash of a string that does not start with a storage index. Furthermore, a ```-1``` offset is added so the preimage of the hash cannot be known, further reducing the chances of a possible attack.

More slots for additional information can be added in subsequent KIPs as needed.


###Logic contract address 
Storage slot ```0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc``` (obtained as ```bytes32(uint256(keccak256('eip1967.proxy.implementation')) - 1)```).

Holds the address of the logic contract that this proxy delegates to.
###Admin address 
Storage slot ```0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103``` (obtained as ```bytes32(uint256(keccak256('eip1967.proxy.admin')) - 1)```).

Holds the address that is allowed to upgrade the logic contract address for this proxy (optional).



## 6. License

The content is licensed under [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

 
