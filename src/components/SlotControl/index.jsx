import React, { Component } from 'react';
import './index.css'

const SlotControl = props => {
  return (
    <div className="controlCont">
      <div className="arrowCont">
        <div className="slotArrow"></div>
      </div>
      <div className={`divDisplay ${props.divExists ? 'divTrue' : 'divFalse'}`}>
        <div className="divIcon">{'\x3C\x2F\x3E'}</div>
      </div>
    </div>
  )
};

export default SlotControl;