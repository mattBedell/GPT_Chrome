import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getSlots } from './../../../reducers/slots';
import { getSelectedSlot } from './../../../reducers/nav';

import SlotMin from './SlotMin';


const Slots = props => {
  return (
    <>
      {props.slots.map(slot => <SlotMin key={`slots-${slot.slotId}`} slot={slot} />)}
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
