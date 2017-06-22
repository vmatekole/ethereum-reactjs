import  React from 'react';
import { Component } from 'react';
// import { connect } from 'react-redux';
import EthHelpers from '../../services/util/ethhelpers';
import EthIdentityIcon from '../EthIdenticon/index';

const EthAccount = ({account}) => {
  return (
    <tr>
      <td>{account.address}</td>
      <td>
        <EthIdentityIcon address={account.address}/>
      </td>
      <td>
        <input type="text" value="" className="web3_address"/>
      </td>
      <td>{EthHelpers.fromWei(account.balance,'ether')} ether</td>
    </tr>
  )
}

class EthAccountList extends Component {
  constructor(props) {
    super(props);
  }


  ethAccountsList(accounts) {
    if (_.isUndefined(accounts) || accounts.length <= 0)
      return;
    return (
      accounts.map( (acc) => {
        return <EthAccount account={acc} />
      })
    );
  }

  componentDidMount() {
    EthAccounts.init();
  }

  render() {
    const ethAccountsList = this.ethAccountsList(EthAccounts.findAll().fetch());
    return (
      <div className="panel panel-default panel-dapp">
        <div className="panel-heading">
          header
        </div>
        <div className="panel-body">
          <p>Description</p>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
            <tr>
              <td>#</td>
              <td>Identicon</td>
              <td>Address</td>
              <td>Balance</td>
            </tr>
            </thead>
            <tbody>
            {ethAccountsList}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export { EthAccountList as default };