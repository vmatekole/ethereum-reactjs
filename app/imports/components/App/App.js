import React from "react";
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { Component } from 'react';
import store from "/imports/store";

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/graphql',
  }),
});

import Header from "./components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {children} = this.props;
    return (
      <ApolloProvider store={store} client={client}>
        <div className="app">
          <div className="mw5 mw8-ns center bg-light-gray pa3 ph5-ns">
            <div className="center"><Header /></div>
            <div className="">
              <div className="">
                {children}
              </div>
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
;

export default App;
