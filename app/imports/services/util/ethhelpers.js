//app/imports/services/util/ethhelpers.js
// Excerpts taken from https://raw.githubusercontent.com/paritytech/parity/8404edb656693270ec1cd3956d204f625d28ec7c/js/src/api/util/wei.js
import BigNumber from 'bignumber.js';

const UNITS = ['wei', 'ada', 'babbage', 'shannon', 'szabo', 'finney', 'ether', 'kether', 'mether', 'gether', 'tether'];

class EthHelpers {
  static _getUnitMultiplier(unit) {
    const position = UNITS.indexOf(unit.toLowerCase());
    if (position === -1) {
      throw new Error(`Unknown unit ${unit} passed to wei formatter`);
    }

    return 10 ** (position * 3);
  }

  static fromWei(value, unit = 'ether') {
    return new BigNumber(value).div(this._getUnitMultiplier(unit));
  }

  static toWei(value, unit = 'ether') {
    return new BigNumber(value).mul(this._getUnitMultiplier(unit));
  }

}

export {EthHelpers as default};