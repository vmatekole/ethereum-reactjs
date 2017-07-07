import _ from 'lodash';
import config from '/imports/config/index';
import { prettyJSON } from '/imports/services/util/format';
const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI('/ip4/127.0.0.1/tcp/5001');

// let p = ipfs.repo.stat();
// p.done(res => {
//   console.log("IPFS — Connected to local node...");
//   console.log(prettyJSON(res));
// });
//
// const ipfsRoot = _.get(config,'dev') ? _.get(config,'ipfs.devRoot') : _.get(config,'ipfsRoot');
//
// ipfs.pubsub.subscribe(ipfsRoot, res => {
//   console.log(res)
// });


