import { validateAddress } from '/imports/services/util/validation';
import { userAccaddressTypes } from '/imports/services/util/validation';
class Member {
  constructor(connector) {
    this.conn = connector;
  }

  async add(member) {

  }

  async getByEthAddress({memberAddress}) {
    if (validateAddress(memberAddress,userAccaddressTypes.eth)) {
      return this.conn.member.get(memberAddress, addressType)
    }
  }
}
export default Member;