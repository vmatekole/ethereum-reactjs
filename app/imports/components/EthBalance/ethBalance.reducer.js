import _ from 'lodash';
import  { handleActions } from 'redux-actions';
import * as ActionTypes from "./ethBalance.actions";

function ApiEthBalance(ethbase) {
  let ethBalance = web3.eth.getBalance(ethbase)
  return ethBalance !== undefined ? ethBalance.toString() : 0
}

export const ethBalanceStatus = handleActions({
  [ActionTypes.SET_ETHBASE]: (state,action) => ({
    ethBase: action.payload,
    ethBalance: 0
  }),
  [ActionTypes.SET_BALANCE]: (state,action) => ({
    ethBase: action.payload,
    ethBalance: ApiEthBalance(action.payload)
  })
}, { ethBase: 'No address set', ethBalance: 0 })
