// app/imports/graphql/connectors/bigchaindbConnector.js
import driver from 'bigchaindb-driver';
import log from '/imports/services/logger';
import {prettyJSON as P} from '/imports/services/util/format';

class BigChainDBConnector {
  // Template literals for messages
  invalidAddressMsg(id = '', operation) {
    return `#${id} — Invalid operation ${operation}`;
  }

  constructor({connection: conn, appKeypair}) {
    this.conn = conn;
    this.appKeypair = appKeypair;
  }

  closeConnection() {
    this.conn.close();
  }

  postTransaction(txSigned) {
    // Send the transaction off to BigchainDB
    log.debug(`Sending signed transaction: ${P(txSigned)}`);
    return this.conn.postTransaction(txSigned)
      .then((result) => result)
      .catch((err) => log.error(`#34d — Error in sending transaction:  ${P(err)}`));
  }

  asset() {
    const self = this; // Ref. to this for nested mapped functions
    return {
      makeCreateTransaction(data, metadata = null, recipientPubKeys, issuers) {
        outputs = recipientPubKeys.map((pubKey) => {
          return driver.Transaction.makeOutput(
            driver.Transaction.makeEd25519Condition(pubKey)
          );
        });
        return driver.Transaction.makeCreateTransaction(
          data,
          // Metadata contains information about the transaction itself
          // (can be `null` if not needed)
          metadata,
          // A transaction needs an output
          outputs,
          issuers
        );
      },
      makeTransferTransaction(assetTx, metadata = null, recipientPubKeys, amount) {
        const outputs = recipientPubKeys.map((pubKey) => {
          return driver.Transaction.makeOutput(
            driver.Transaction.makeEd25519Condition(pubKey)
          );
        });
        return driver.Transaction.makeTransferTransaction(
          assetTx,
          // Metadata contains information about the transaction itself
          // (can be `null` if not needed)
          metadata,
          // A transaction needs an output
          outputs,
          amount
        );
      },
      async createAsset(txSigned) {
        return self.postTransaction(txSigned);
      },
      async transferAsset(txSigned) {
        return self.postTransaction(txSigned)
      },
      async searchAssets(term){
        return self.conn.searchAssets(term);
      },
      async searchTransactions(assetId, operation){
        return self.conn.listTransactions(assetId,operation);
      },
      async addMember(memberAddress) {
        try {
          // return await
        } catch (err) {

        }
      }
    }
  }

  member() {
    return {
      async add(memberData)  {
        try {
          // return await `Added member ${JSON.stringify(memberData)}`;
        } catch (err) {
          throw 'Bad BigchainDB Error!';
        }
      },
      async get(address, addressType) {
        try {

        } catch (err) {

        }
      }
    }
  }
}

export default BigChainDBConnector;