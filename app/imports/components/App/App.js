import React from "react";
import apolloClient from '/imports/apolloClient';
import store from "/imports/store";
import { ApolloProvider } from 'react-apollo';
import { Component } from 'react';



import Header from "./components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {children} = this.props;
    return (
      <ApolloProvider store={store} client={apolloClient}>
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
