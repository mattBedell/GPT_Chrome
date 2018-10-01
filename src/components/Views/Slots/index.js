import React from 'react';

import { connect } from 'react-redux';
import { getSlots } from '../../../reducers/slots';

import Slot from './Slot';


const Slots = props => (
    <>
      {props.slots.map((slot, i) => <Slot key={`slots-${slot.slotId}`} slot={slot} index={i} />)}
    </>
);

const mapStateToProps = state => ({
  slots: getSlots(state),
});

export default connect(mapStateToProps)(Slots);
