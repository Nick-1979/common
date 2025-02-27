// Copyright 2017-2022 @polkadot/networks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KnownIcon, KnownLedger, KnownTestnet } from './types';

export { knownGenesis } from './genesis';

export const substrateRegistry = 'https://raw.githubusercontent.com/paritytech/ss58-registry/main/ss58-registry.json';

// these are icon overrides
export const knownIcon: KnownIcon = {
  centrifuge: 'polkadot',
  kusama: 'polkadot',
  polkadot: 'polkadot',
  sora: 'polkadot',
  statemine: 'polkadot',
  statemint: 'polkadot',
  westmint: 'polkadot'
};

// These match up with the keys of the ledgerApps object in the @polkadot/hw-ledger/defaults.ts
// and maps to the known slip44 (minus the `0x8` hard derivation flag)
// NOTE: Any network here needs to have a genesisHash attached in the config above
export const knownLedger: KnownLedger = {
  bifrost: 0x00000314,
  centrifuge: 0x000002eb,
  'dock-mainnet': 0x00000252,
  edgeware: 0x0000020b,
  equilibrium: 0x05f5e0fd,
  genshiro: 0x05f5e0fc,
  kusama: 0x000001b2,
  'nodle-chain': 0x000003eb,
  polkadot: 0x00000162,
  polymesh: 0x00000253,
  sora: 0x00000269,
  statemine: 0x000001b2 // common-good on Kusama, shares derivation
};

// testnets should not allow selection
export const knownTestnet: KnownTestnet = {
  '': true, // this is the default non-network entry
  'cess-testnet': true,
  'dock-testnet': true,
  jupiter: true,
  'mathchain-testnet': true,
  subspace_testnet: true,
  'zero-alphaville': true
};
