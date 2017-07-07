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
    // Check if org already exists
    if ((await this.exists(this.conn.asset().searchAssets(org.address)))) {
      throw `#V456 — Org already exists ${org.name}, ${org.address}`;
      return;
    }

    const {privateKey: privKey, publicKey: pubKey} = this.conn.appKeypair;
    const issuersAndRecipients = [pubKey];

    // Create unsigned transaction. Currently we always issue assets to the application itself.
    const tx = this.conn.asset().makeCreateTransaction(
      org,
      null,
      issuersAndRecipients,
      pubKey
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
    const {privateKey:privKey, publicKey: pubKey} = this.conn.appKeypair;

    if(assetTx) {
      const tx = this.conn.asset().makeTransferTransaction(
        assetTx, //An unspent transaction to BigChainDB
        member,
        [pubKey],
        0 // Always 0 since we never issue > 1 for a memberRegistry
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