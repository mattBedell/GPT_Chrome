import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getSlotNav } from '../../../../reducers/nav';

import SlotMin from './SlotMin';
import SlotDetail from './SlotDetail';

const Slot = props => (
    <div style={
      {
        transform: 'translateX(0px)',
        top: `${props.index * 30}px`,
      }}>
      <SlotMin
        key={`slots-${props.slot.slotId}`}
        slotNav={props.slotNav}
        slotName={props.slot.path.split('/').slice(2).join('/')}
        slotId={props.slot.slotId}
        index={props.index}
      />
      {props.slotNav.isOpen ? <SlotDetail slotId={props.slot.slotId}/> : <></>}
    </div>
);

Slot.propTypes = {
  slot: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  slotNav: getSlotNav(state, ownProps.slot.slotId),
});

export default connect(mapStateToProps)(Slot);
