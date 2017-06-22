import { createAction } from 'redux-actions';

const prefix = 'ethbalance/';

export const SET_BALANCE =  `${prefix}SET_BALANCE`;
export const SET_ETHBASE =  `${prefix}SET_ETHBASE`;

export const setEthbase = createAction(SET_ETHBASE, ethBase => ethBase);
export const setEthBalance = createAction(SET_BALANCE, ethBase => ethBase);