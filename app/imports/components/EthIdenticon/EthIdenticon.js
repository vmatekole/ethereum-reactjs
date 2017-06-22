// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createIdentityImg } from '../../services/api/identity';
// import { isNullAddress } from '../../services/util/validation';

// import styles from './identityIcon.css';

class EthIdentityIcon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      iconsrc: ''
    }
  }

  // static propTypes = {
  //   address: PropTypes.string,
  //   button: PropTypes.bool,
  //   center: PropTypes.bool,
  //   className: PropTypes.string,
  //   disabled: PropTypes.bool,
  //   images: PropTypes.object.isRequired,
  //   inline: PropTypes.bool,
  //   padded: PropTypes.bool,
  //   tiny: PropTypes.bool
  // }


  componentDidMount () {
    this.updateIcon(this.props.address);
  }

  componentWillReceiveProps (newProps) {
    this.updateIcon(newProps.address);
  }

  updateIcon (_address) {
    const { button, inline, tiny } = this.props;


    let scale = 7;

    if (tiny) {
      scale = 2;
    } else if (button) {
      scale = 3;
    } else if (inline) {
      scale = 4;
    }

    this.setState({
      iconsrc: createIdentityImg(_address, scale)
    });
  }

  render () {
    const { iconsrc } = this.state;

    let size = '56px';

    return (
      <img
        data-address-img
        height={ size }
        width={ size }
        src={ iconsrc }
      />
    );
  }
}

function mapStateToProps (state) {
  const { images } = state;
  return { images };
}

export default connect(mapStateToProps, null)(EthIdentityIcon);