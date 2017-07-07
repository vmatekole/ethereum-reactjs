// app/imports/services/util/validation.js

// Template literals for messages
function invalidAddressMsg(id = '', addressType,address) {
  return `Invalid ${addressType}, address — ${address} - #${id}`;
}

// Account address validation routines

// User account address types
export const userAccAddressTypes = {
  eth: 'eth'
};

export function validateAddress(address,addressType) {
  validationFuncs = {
    eth() {
      if(address) {
        return true;
      } else {
        throw invalidAddressMsg('kklj8',userAccAddressTypes.eth,address);
      }
    }
  };

  return validationFuncs[addressType];
}
