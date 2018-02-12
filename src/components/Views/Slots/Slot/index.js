import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getSlotNav } from '../../../../reducers/nav';

import SlotMin from './SlotMin';
import SlotDetail from './SlotDetail';

const Slot = props => {
  return (
    <>
      <SlotMin
        key={`slots-${props.slot.slotId}`}
        slotNav={props.slotNav}
        slotName={props.slot.path.split('/').slice(2).join('/')}
        slotId={props.slot.slotId}
        index={props.index}
      />
      {props.slotNav.isOpen ? <SlotDetail /> : <></>}
    </>
  )
};

Slot.propTypes = {
  slot: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    slotNav: getSlotNav(state, ownProps.slot.slotId),
  }
};

export default connect(mapStateToProps)(Slot);