import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getSlotNav } from '../../../../reducers/nav';

import SlotMin from './SlotMin';
import SlotDetail from './SlotDetail';

const Slot = ({ index, slot, slotNav }) => (
  <div style={
      {
        transform: 'translateX(0px)',
        top: `${index * 30}px`,
      }}
  >
    <SlotMin
      key={`slots-${slot.slotId}`}
      slotNav={slotNav}
      slotName={slot.path.split('/').slice(2).join('/')}
      slotId={slot.slotId}
      index={index}
    />
    {slotNav.isOpen ? <SlotDetail slotId={slot.slotId} /> : <></>}
  </div>
);

Slot.propTypes = {
  slot: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  slotNav: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  slotNav: getSlotNav(state, ownProps.slot.slotId),
});

export default connect(mapStateToProps)(Slot);
