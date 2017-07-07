import React from "react";
import EthBalance from "/imports/components/EthBalance/index";
import EthNetworkHealth from "/imports/components/EthNetworkHealth/index";
import EthAccountList from "/imports/components/EthAccounts/index";

const Home = () => {
  return (
    <div className="ui container">
      <EthNetworkHealth />
      <EthAccountList />
    </div>
  )
}


export default Home;
