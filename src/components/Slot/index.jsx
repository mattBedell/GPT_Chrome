import React, { Component } from 'react';
import SlotControl from './../SlotControl/index.jsx';
import './index.css';
import SlotDetail from './../SlotDetail/index.jsx';
const toggleSelected = props => {
  if(props.selectedSlot === props.slotIdent) return true;
  return false;
}
const Slot = props => {
  return (
    <div className="slotCont">
      <div className="arrowCont" onClick={() => props.handleSlotSelect(props.slotIdent)}>
        <div className={`slotArrow ${toggleSelected(props) ? 'slotArrowOn' : ''}`}></div>
      </div>
      <SlotControl
        divExists = {props.divExists}
        isRefreshed = {props.isRefreshed}
      />
      <div className="slotName" onClick={() => props.handleSlotSelect(props.slotIdent)}>{props.name}</div>
    </div>
  )
};

export default Slot;