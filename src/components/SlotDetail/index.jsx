import React, { Component } from 'react';
import './index.css';
import SlotNav from './../SlotNav/index.jsx';
import SlotDetailView from './../SlotDetailView/index.jsx';

const switchDetailView = props => {
  switch(props.selectedSlotNav) {
    case 'targeting':
    return (<SlotDetailView details={props[selectedSlotNav]}/>);
    case 'config':
    return (<div></div>)
    default:
    return (<SlotDetailView targs={props.targeting} slotIdent={props.slotIdent}/>);
  }
}

const SlotDetail = props => {
  return(
    <div className="slotDetail">
      <SlotNav
        handleSlotNavSelect={props.handleSlotNavSelect}
        selectedSlotNav={props.selectedSlotNav}
      />
      <SlotDetailView details={props[props.selectedSlotNav]} slotIdent={props.slotIdent}/>
    </div>
  )
}

export default SlotDetail;