import _ from "lodash";
import { createSelector } from 'reselect';

// The path to this part of the state tree
import path from "../selectorPath";

export const getw3Status = state => {
  return _.get(state, path + 'networkStatus')
};


