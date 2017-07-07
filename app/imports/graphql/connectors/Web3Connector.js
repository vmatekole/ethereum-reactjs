// app/imports/graphql/connectors/web3Connector.js

class Web3Connector {

  constructor(connection) {
    this.connection = connection;
  }

  closeConnection() {
    this.connection.close();
  }
}
export default Web3Connector;