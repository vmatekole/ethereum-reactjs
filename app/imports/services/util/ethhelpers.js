

class EthHelpers {
  static fromWei(weiValue, type) {
    return web3.fromWei(weiValue, type).toString(10);
  }
}

export { EthHelpers as default };