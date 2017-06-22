// app/graphql/resolvers/ethResolvers.js
import  _ from 'lodash';
import Web3 from 'web3';
import config from "/imports/config";

const web3 = new Web3();

if (!web3.currentProvider) {
  if (_.get(config, "isDev", false)) {
    web3.setProvider(new web3.providers.HttpProvider("http://geth.seedbloom.it:6545"));
  }
}


const resolvers = {
  Query: {
    ethAccount: (address) => {
      web3.eth.getBalance(address)
    },
    ethBlock: (blockHashOrBlockNumber, returnTransactionObjects) => {
      web3.eth.getBlock(blockHashOrBlockNumber, returnTransactionObjects, callback)
    },
    ethNetworkStatus: () => {
      return {
        listening: web3.net.listening.toString(),
        peerCount: web3.net.peerCount,
        gasPrice: web3.eth.gasPrice,
        blockNumber: web3.eth.blockNumber,
        earliestBlock: web3.eth.getBlock('earliest'),
        latestBlock: web3.eth.getBlock('latest'),
        pendingBlock: web3.eth.getBlock('pending')
      }
    }
  }
}

export default resolvers;
