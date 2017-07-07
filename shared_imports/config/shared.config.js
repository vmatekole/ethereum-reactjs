export default {
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
  },
  "bigchainDB": {
    uri: 'http://localhost:9984/api/v1/'
  },
  "papertrail": {
    "host": "logs3.papertrailapp.com",
    "port": "46410"
  },
  "public": {}
}
