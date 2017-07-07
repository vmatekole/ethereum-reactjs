// This file controls the shape of the services key of the state.

import { combineReducers } from "redux";

// Rehydration needs to be installed & enabled to use this
import { ethBalanceStatus } from "./EthBalance/ethBalance.reducer";
import { networkStatus } from './EthNetworkHealth/EthNetworkHealth.reducers';

const reducer = combineReducers({
  ethBalanceStatus,
  networkStatus
});

export default reducer;
