// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
var coins = require('./coins')

module.exports = {
  default: {
    messagePrefix: '\x15Verus signed data:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x55,
    wif: 0xBC,
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.DEFAULT,
    isZcash: true,
    version: 4
  },
  dash: {
    messagePrefix: '\x19DarkCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x4c, // https://dash-docs.github.io/en/developer-reference#opcodes
    scriptHash: 0x10,
    wif: 0xcc,
    coin: coins.DASH,
    version: 1
  },
  dashTest: {
    messagePrefix: '\x19DarkCoin Signed Message:\n',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x8c, // https://dash-docs.github.io/en/developer-reference#opcodes
    scriptHash: 0x13,
    wif: 0xef, // https://github.com/dashpay/godashutil/blob/master/wif.go#L72
    coin: coins.DASH,
    version: 1
  },
  bch: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
    coin: coins.BCH,
    forkId: 0x00,
    version: 1
  },
  bitcoincashTestnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
    coin: coins.BCH,
    version: 1
  },
  zec: {
    messagePrefix: '\x18ZCash Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0xc2d6d0b4
    },
    coin: coins.ZEC,
    isZcash: true,
    version: 4
  },
  zcashTest: {
    messagePrefix: '\x18ZCash Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x1d25,
    scriptHash: 0x1cba,
    wif: 0xef,
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0xf5b9230b
    },
    coin: coins.ZEC,
    isZcash: true,
    version: 4
  },
  vrsc: {
    messagePrefix: '\x15Verus signed data:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x55,
    wif: 0xBC,
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.VRSC,
    isZcash: true,
    version: 4
  },
  btg: {
    messagePrefix: '\x18Bitcoin Gold Signed Message:\n',
    bech32: 'btg',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x26,
    scriptHash: 0x17,
    wif: 0x80,
    coin: coins.BTG,
    forkId: 0x4F /* 79 */,
    version: 1
  },
  btc: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
    coin: coins.BTC,
    version: 1
  },
  testnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
    coin: coins.BTC,
    version: 1
  },
  ltc: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0,
    coin: coins.LTC,
    version: 1
  },
  kmd: {
    messagePrefix: '\x18Komodo Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x55,
    wif: 0xBC,
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.KMD,
    isZcash: true,
    version: 4
  },
  doge: {
    messagePrefix: '\x19Dogecoin Signed Message:\n',
    bip44: 3,
    bip32: {
      public: 0x02facafd,
      private: 0x02fac398
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x16,
    wif: 0x9e,
    coin: coins.DOGE,
    dustThreshold: 0 // https://github.com/dogecoin/dogecoin/blob/v1.7.1/src/core.h#L155-L160
  },
  dgb: {
    messagePrefix: '\x19Digibyte Signed Message:\n',
    bip44: 20,
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x5,
    wif: 0x80,
    coin: coins.DGB,
    dustThreshold: 1000
  },
  oot: {
    messagePrefix: '\x18Utrum Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x55,
    wif: 0xBC,
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.OOT,
    isZcash: true,
    version: 2
  },
  zilla: {
    messagePrefix: '\x18ChainZilla Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x55,
    wif: 0xBC,
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.ZILLA,
    isZcash: true,
    version: 2
  },
}
