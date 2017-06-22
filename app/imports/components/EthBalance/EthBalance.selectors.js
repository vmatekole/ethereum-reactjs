import _ from "lodash";

// The path to this part of the state tree
import path from "../selectorPath";
path = path + 'ethBalanceStatus.'
export const getEthBalance = state => {
  return _.get(state, path + "ethBalance");
};

export const getEthbase = state => {
  return _.get(state, path + "ethBase");
};