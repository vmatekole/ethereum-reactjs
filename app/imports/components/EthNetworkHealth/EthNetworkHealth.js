import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react';
import Store from '../../store';
import  ethNetworkStatusQuery from '/imports/graphql/resolvers/ethQueries';
import {updateNetworkStatus} from './EthNetworkHealth.actions';
import {getw3Status} from './EthNetworkHealth.selectors';
import {graphql, compose} from 'react-apollo';

function Loader(props) {
  if (!props.loading) {
    return props.children;
  } else {
    return <div>Loading</div>;
  }
}


class EthNetworkHealth extends Component {
  componentDidMount() {
    // Store.dispatch(updateNetworkStatus());
    hljs.initHighlighting();
  }

  formatObject(obj) {
    return obj ? JSON.stringify(obj, undefined, 4) : '';
  }

  render() {
    const {ethNetworkStatus = {}, loading} = this.props.data;
    return (
      <Loader loading={ loading }>
        <table className="ui compact table">
          <thead>
          <tr>
            <th className="ui label ribbon sixteen wide" colSpan={2}>Network health</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className="ui label ">
              Listening
            </td>
            <td>{ethNetworkStatus.listening}</td>
          </tr>
          <tr>
            <td className="ui label">
              Peer count
            </td>
            <td>{ethNetworkStatus.peerCount}</td>
          </tr>
          <tr>
            <td className="ui label">
              Gas price
            </td>
            <td>{ethNetworkStatus.gasPrice}</td>
          </tr>
          <tr>
            <td className="ui label">
              Block Number
            </td>
            <td>{ethNetworkStatus.blockNumber}</td>
          </tr>
          <tr>
            <td className="ui label">
              Earliest block
            </td>
            <td>
              <pre><code className="json">{this.formatObject(ethNetworkStatus.earliestBlock)}</code></pre>
            </td>
          </tr>
          <tr>
            <td className="ui label">
              Latest block
            </td>
            <td>
              <pre><code className="json">{this.formatObject(ethNetworkStatus.latestBlock)}</code></pre>
            </td>
          </tr>
          <tr>
            <td className="ui label">
              Pending block
            </td>
            <td>
              <pre><code className="json">{this.formatObject(ethNetworkStatus.pendingBlock)}</code></pre>
            </td>
          </tr>
          </tbody>
        </table>
      </Loader>
    )
  }
}


EthNetworkHealth.PropTypes = {
  data: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    listening: React.PropTypes.string,
    peerCount: React.PropTypes.string,
    gasPrice: React.PropTypes.string,
    blockNumber: React.PropTypes.string,
    earliestBlock: React.PropTypes.object,
    latestBlock: React.PropTypes.object,
    pendingBlock: React.PropTypes.object
  }).isRequired
}

function mapStatesToProps(state) {
  return {
    // networkStatus: getw3Status(state)
  };
}

function mapDispatchToProps() {
  return {
    // updateNetworkStatus: networkStatus => dispatch(updateNetworkStatus())
  };
}

// Compose both redux(actions/reducers) + graphQl data as one homegenous component
export default compose(
  graphql(ethNetworkStatusQuery),
  connect(mapStatesToProps, mapDispatchToProps)
)(EthNetworkHealth);