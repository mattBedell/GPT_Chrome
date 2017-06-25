import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllSlots } from './../../../reducers/index.js';

import Slot from './../../Slot/index.jsx';

class Slots extends Component {
  genarateSlots() {
    return this.props.slots.map((slot, i) => {
      return (
        <Slot
          key={`${slot.adUnit}${i}`}
          {...slot}
        />
      )
    })
  }
  render() {
    {console.log('PROPS: ',this.props)}
    return(
      <div className='slots'>
        {this.genarateSlots()}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    slots: getAllSlots(state)
  };
}
export default connect(mapStateToProps)(Slots);