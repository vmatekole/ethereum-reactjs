import _ from 'lodash';
import config from '/imports/config/index';
import {prettyJSON} from '/imports/services/util/format';
import Graph from './js-ipfs';
import CID from 'cids';

import IPFS from 'ipfs';
const ipfs = new IPFS();

const dagOpts = { format: 'dag-cbor', hashAlg: 'sha3-512' };

const groupList = {
  groupIds: []
};

const group = {
  address: "0x12",
  name: "Seedbloom coop"
};

const group1 = {
  address: "0x1677",
  name: "Acme coop"
};


const member = {
  address: "0x",
  name: "Victor"

}

const member1 = {
  address: "0x123",
  name: "John"

}

const member2 = {
  address: "0x12kjkh",
  name: "Terry"
}gs

const member3 = {
  address: "0x1678",
  name: "Bob"
}

const groupRegistry = {
  registryId: "0x767y",
  groupAddress: "0x12"
}


const groupRegistry1 = {
  registryId: "0x767ykj",
  groupAddress: "0x12"
};


console.log(`IPFS is ${ipfs.isOnline() ? 'ONLINE' : 'OFFLINE'}`);

ipfs.on('ready', () => {
  console.log('IPFS ready...')
});

ipfs.on('start', () => {
  console.log('IPFS starting...');
  console.log(`IPFS is ${ipfs.isOnline() ? 'ONLINE' : 'OFFLINE'}`);


  addOrg(group);
  addMemberToOrg(group,member);
  // listMembersOrgs();
});

let graph = new Graph(ipfs.dag);

ipfs.on('error', (res) => {
  console.log(res);
});




// graph.set(a,  'seedbloom/rootData', b)
//   .then(result => {
//     // set "patches" together two objects
//     console.log('Set Graph ...');
//     console.log(prettyJSON(result));
//     // flush replaces the links with merkle links, resulting in a single root hash
//     graph.flush(result).then((result) => {
//       console.log(`Root: ${prettyJSON(result)}`);
//       // taverse paths through merkle links given a starting vertex
//       graph.get(result, ipfsRoot).then(result2 => {
//         console.log('Get');
//         console.log(result2);
//       })
//     })
//   })
//   .catch(result => {
//     console.log(result);
//   })



function createIPFSObj(json) {
  obj = {
    Data: JSON.stringify(json),
    Links: []
  };
  return obj;
}

function addOrg(org) {
  let ob = org;
  ipfs.dag.put(
    ob,
    dagOpts
  ).done((res)=> {
    console.log('Added org');
    console.log(res.toBaseEncodedString());
    let a = {'/': res.toBaseEncodedString()};
    graph.tree(
      a,
      Infinity
    ).done((res)=> {
      console.log(res);
      console.log('tree')
      console.log(a);
    });
  });


  ipfs.dag.get(
    "zdpuAypJXbmGCLweJBL6R1iBpDGJyP8LU1BwZjzRjwNxohzvE"
  ).done((res)=> {
    console.log(res);
    let cid  = new CID("zdpuAypJXbmGCLweJBL6R1iBpDGJyP8LU1BwZjzRjwNxohzvE");
    console.log(cid.toV1());
    console.log('Got org');
    console.log(res);
  });


  ipfs.dag.tree(
    "zdpuAypJXbmGCLweJBL6R1iBpDGJyP8LU1BwZjzRjwNxohzvE",
  ).done((res)=> {
    console.log("Got org");
    console.log(res);
  });
}

function addMembers(mem) {
  ipfs.object.put(
    mem
  ).done((res)=> {
    console.log('Added member');
    console.log(res);
  });
}

function addMemberToOrg(memberCid,orgCid) {
  ipfs.dag.put(
    groupRegistry,
    dagOpts
  ).done((res)=> {
    console.log(`added group registry ${res.toBaseEncodedString()}`);
  });


  // ipfs.dag.get(
  //   "zdpuAypJXbmGCLweJBL6R1iBpDGJyP8LU1BwZjzRjwNxohzvE"
  // ).done((res)=> {
  //   console.log(`Got org: ${res.value.name}`);
  //   ipfs.dag.put(
  //     obj,
  //     { format: 'dag-cbor', hashAlg: 'sha3-512' }
  //   ).done((res)=> {
  //     console.log('Added org');
  //     console.log(res.toBaseEncodedString());
  //   });
  //
  //   console.log('Got org');
  //   console.log(res.value);
  // });
}
function listMembersOrgs() {

}