import { handleActions } from  'redux-actions';
import  { updateNetworkStatus } from './EthNetworkHealth.actions';

export const networkStatus = handleActions({
  [updateNetworkStatus]: (state, action) => ({
        listening: web3.net.listening.toString(),
        peerCount: web3.net.peerCount,
        gasPrice: JSON.stringify(web3.eth.gasPrice),
        blockNumber: web3.eth.blockNumber,
        earliestBlock: JSON.stringify(web3.eth.getBlock('earliest'), undefined, 4),
        latestBlock: JSON.stringify(web3.eth.getBlock('latest'), undefined, 4),
        pendingBlock: JSON.stringify(web3.eth.getBlock('pending'), undefined, 4)
      })
}, { });

