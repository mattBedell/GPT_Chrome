import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getSlots } from './../../../reducers/slots';

import Slot from './Slot';



const Slots = props => {
  return (
    <>
      {props.slots.map((slot, i ) => <Slot key={`slots-${slot.slotId}`} slot={slot} index={i} />)}
    </>
  )
}

const mapStateToProps = state => {
  return {
    slots: getSlots(state),
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
  
//   }
// }

export default connect(mapStateToProps)(Slots);
