import React, { Component } from 'react';
import './index.css';
import SlotNav from './../SlotNav/index.jsx';
import SlotTargeting from './../SlotTargeting/index.jsx';

const switchDetailView = props => {
  switch(props.selectedSlotNav) {
    case 'targeting':
    return (<SlotTargeting targs={props.targeting}/>);
    case 'config':
    return (<div></div>)
    default:
    return (<SlotTargeting targs={props.targeting} slotIdent={props.slotIdent}/>);
  }
}

const SlotDetail = props => {
  return(
    <div className="slotDetail">
      <SlotNav
        handleSlotNavSelect={props.handleSlotNavSelect}
        selectedSlotNav={props.selectedSlotNav}
      />
      {switchDetailView(props)}
    </div>
  )
}

export default SlotDetail;