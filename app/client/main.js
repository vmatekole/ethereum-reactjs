import  _ from 'lodash';
import  { Meteor } from 'meteor/meteor';
import '/imports/client.index';
import config from "/imports/config";


// disconnect any meteor server
// if(location.host !== 'localhost:5001'
//   && location.host !== '127.0.0.1:5001'
//   && typeof MochaWeb === 'undefined')
//   Meteor.disconnect();

Meteor.startup( ()=> {
  // web3 = new Web3();
  // if (!web3.currentProvider) {
  //   if (_.get(config, "isDev", false)) {
  //     web3.setProvider(new web3.providers.HttpProvider("http://geth.seedbloom.it:6545"));
  //   }
  // }
  // EthAccounts.init();
  // set providor, which should be a geth node
  // my RPC settings are:
  // geth --rpc --rpcaddr="0.0.0.0" --rpccorsdomain="*" --mine --unlock=YOUR_ACCOUNT --verbosity=5 --maxpeers=0 --minerthreads="3"
  // if (!web3.currentProvider)
  //   if (config.isDev) {
  //     web3.setProvider(new web3.providers.HttpProvider(config.development.geth.rpc.protocol + '//' + config.development.geth.rpc.rpcaddr + ':' + config.development.geth.rpcport));
  //   } else {
  //     // Handle different environments
  //   }
  //
  // // Setup EthAccounts
  // EthAccounts.init();
  // EthAccounts.findAll().fetch().forEach((acc) => {
  //   console.log('Accounts available: ')
  //   console.log(acc);
  //   console.log(config);
  // });

});

// export const web3I = web3;

