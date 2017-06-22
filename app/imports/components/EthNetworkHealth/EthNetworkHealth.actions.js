import { createAction } from  'redux-actions';

const prefix = 'ethnetworkstatus/';
UPDATE_W3_ACTION = `${prefix}UPDATE_W3_STATUS`;

export const updateNetworkStatus = createAction(UPDATE_W3_ACTION);