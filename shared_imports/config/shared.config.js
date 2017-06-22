
export default {
  "production": {
    "geth": {
      "rpc": "",
        "protocol": "https",
        "rpcaddr": "parity.seedbloom.it",
        "rpcport": 8545,
        "rpccorsdomain": "*",
        "unlock": 0,
        "verbosity": 5,
        "genesis": "test-genesis.json",
        "etherbase": 0,
        "mine": "",
        "nodiscover": "",
        "networkid": 1234,
        "maxpeers": 0
    }
  },
  "development": {
    "geth": {
      "rpc": "",
        "protocol": "http",
        "rpcaddr": "geth.seedbloom.it",
        "rpcport": 6545,
        "rpccorsdomain": "*",
        "genesis": "test-genesis.json",
        "verbosity": 5,
        "unlock": 0,
        "etherbase": "0xb0d408fad13260e7d5fd8b7f92298bf38bbfc849",
        "mine": "",
        "nodiscover": "",
        "networkid": 1234,
        "maxpeers": 0
    }
  },
  "public": {}
}
