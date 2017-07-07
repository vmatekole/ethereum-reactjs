// app/imports/startup/server/apolloServer.js
import _ from 'lodash';
import config from '/imports/config/index';
import {createApolloServer} from 'meteor/apollo';
import {makeExecutableSchema} from 'graphql-tools';
import {typeDefs, resolvers} from '/imports/graphql/index';
import {MemberRegistry} from '/imports/graphql/models/index';
import bigChainDBDriver from 'bigchaindb-driver';
import log from '/imports/services/logger';

// GraphQL Connectors
import {BigChainDBConnector, Web3Connector} from '/imports/graphql/connectors/index';
// web3
import Web3 from 'web3';
//BigChainDb
// Create a new keypair.
const seed = Buffer.from('12345678910111213141516123456789');
const seedbloomKeypair = new bigChainDBDriver.Ed25519Keypair();
// BigchainDB Settings
const bigchainDBSettings = {keyPair: seedbloomKeypair, uri: _.get(config, 'bigchainDB.uri')};
// Web3(Ethereum)
const web3Settings = {provider: _.get(config, 'geth')};
const web3Uri = `${web3Settings.provider.protocol}://${web3Settings.provider.rpcaddr}:${web3Settings.provider.rpcport}`;
const web3 = new Web3();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const connectors = {
  bigchainDB: new BigChainDBConnector({
    connection: new bigChainDBDriver.Connection(bigchainDBSettings.uri),
    appKeypair:seedbloomKeypair
  }),
  web3: new Web3Connector({
    connection: web3.setProvider(new web3.providers.HttpProvider(web3Uri))
  })
}

createApolloServer({
  schema: schema,
  connectors: connectors
});

// Setup data fixtures
async function runFixtures() {
  const group = {
    address: "0x12",
    name: "Seedbloom coop"
  };
  const member = {
    address: "0x",
    name: "Victor"

  };
  let memberReg = new MemberRegistry(connectors.bigchainDB);
  try {
    // let tx = await memberReg.add(group);
    // console.log(tx);
    let tx = await memberReg.addMember(group.address,member);
    console.log(tx);
  } catch(err) {
    log.error(err);
  }
  // const tx = bigChainDBDriver.Transaction.makeCreateTransaction(
  //
  //   {orgId: 'ethAccountAddress', memberId: 'ethAccountAddress'},
  //
  //   // Metadata contains information about the transaction itself
  //   // (can be `null` if not needed)
  //   { what: 'A member registry for a coop' },
  //
  //   // A transaction needs an output
  //   [ bigChainDBDriver.Transaction.makeOutput(
  //     bigChainDBDriver.Transaction.makeEd25519Condition(seedbloomKeypair.publicKey))
  //   ],
  //   seedbloomKeypair.publicKey
  // )
  //
  // // Sign the transaction with private keys
  // const txSigned = bigChainDBDriver.Transaction.signTransaction(tx, seedbloomKeypair.privateKey)
  //
  // // Send the transaction off to BigchainDB
  // const conn = connectors.bigchainDB;
  //
  // conn.postTransaction(txSigned)
  //   .then(() => conn.pollStatusAndFetchTransaction(txSigned.id))
  //   .then(retrievedTx => console.log('Transaction', retrievedTx.id, 'successfully posted.'))

}
runFixtures();