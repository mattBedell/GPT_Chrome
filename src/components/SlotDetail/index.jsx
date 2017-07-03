import React, { Component } from 'react';
import './index.css';

const toggleSelected = props => {
  if(props.selectedSlot === props.slotIdent) return 'growbig';
  return '';
}

const SlotDetail = props => {
  return(
    <div className="sDetail">
      <div></div>
    </div>
  )
}

export default SlotDetail;