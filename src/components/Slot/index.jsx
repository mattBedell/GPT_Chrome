import React, { Component } from 'react';
import SlotControl from './../SlotControl/index.jsx';
import './index.css';

const Slot = props => {
  return (
    <div className="slotCont">
      <SlotControl
        divExists = {props.divExists}
      />
      <div>{props.name}</div>
    </div>
    
  )
};

export default Slot;