import React, { Component } from 'react';
import './index.css';
import SlotNav from './../SlotNav/index.jsx';

const toggleSelected = props => {
  if(props.selectedSlot === props.slotIdent) return 'growbig';
  return '';
}

const SlotDetail = props => {
  return(
    <div className="slotDetail">
      <SlotNav
        handleSlotNavSelect={props.handleSlotNavSelect}
        selectedSlotNav={props.selectedSlotNav}
      />
    </div>
  )
}

export default SlotDetail;