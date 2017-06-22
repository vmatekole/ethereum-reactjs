import  React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Store  from '../../store';
import config from '/imports/config';
import * as actions from './EthBalance.actions';
import { getEthBalance, getEthbase } from './EthBalance.selectors';

class EthBalance extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (_.get(config, "isDev", false)) {
      Store.dispatch(actions.setEthbase('0xb0d408fad13260e7d5fd8b7f92298bf38bbfc849'));
    }
  }

  render() {
    return (
      <div className="panel panel-default panel-dapp">
        <div className="panel-heading">
          HEADER
        </div>
        <div className="panel-body">
          BALANCE
          <strong>{this.props.ethBalance}</strong> ether
        </div>
      </div>
    )
  }
}

function mapStatesToProps(state) {
  return {
    ethBalance: getEthBalance(state),
    ethBase: getEthbase(state)
  };
}

function mapDispatchToProps() {
  return {
    setEthBalance: ethBalance => dispatch(actions.setEthBalance(this.props.ethBase)),
    setEthbase: ethBase => dispatch(actions.setEthbase(this.props.ethBase))
  };
}

export default connect(mapStatesToProps,mapDispatchToProps)(EthBalance);