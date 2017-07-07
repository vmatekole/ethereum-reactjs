// app/
import driver from 'bigchaindb-driver';
import {prettyJSON as P} from '/imports/services/util/format';

class MemberRegistry {
  constructor(connector) {
    this.conn = connector;
  }

  exists(result) {
    return result.assets && result.assets.length > 0
  }
  async add(org) {
    // Chieck if org already eixists
    if ((await exists(this.conn.asset().searchAssets(org.address)))) {
      const errMessage = `#V456 — Org already exists ${org.name}, ${org.address}`;
      throw errMessage;
      return;
    }
    const {privateKey: privKey, publicKey: pubKey} = this.conn.appKeypair;
    const issuersAndRecipients = [pubKey];
    // Create unsigned transaction. Currently we always issue assets to the application itself.
    const tx = this.conn.asset().makeCreateTransaction(
      org,
      null,
      issuersAndRecipients, pubKey
    );
    // Sign the transaction with private key
    const txSigned = driver.Transaction.signTransaction(tx, privKey);
    // Send off transaction
    return this.conn.asset().createAsset(txSigned);
  }

  async addMember(orgAddress, member) {
    //Check if Member exists
    let results = await this.conn.asset().searchAssets(orgAddress);
    if(results && results.length >= 1) {
      asset = results[0];
      results = await this.conn.asset().searchTransactions(asset.id,'CREATE');
    } else {
      throw `#34ff — No organisation found ${orgAddress}`;
      return;
    }
    const assetTx = results[0];
    console.log(`Got asset transaction: ${P(assetTx)}`);
    const amount = assetTx.outputs[0].amount + 1;
    const {privateKey: privKey, publicKey: pubKey} = this.conn.appKeypair;
    const issuersAndRecipients = [pubKey];
    if(assetTx) {
      const tx = this.conn.asset().makeTransferTransaction(
        assetTx, //An unspent transaction to BigChainDB
        member,
        issuersAndRecipients,
        amount
      );
      // Sign the transaction with app private key
      const txSigned = driver.Transaction.signTransaction(tx, privKey);
      // Send off transaction
      return  this.conn.asset().transferAsset(txSigned);
    } else {
      throw `#3566 — Org of address: ${address}, does not exist`
    }
  }
}
export default MemberRegistry;