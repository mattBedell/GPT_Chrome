import React, { Component } from 'react';
import './index.css';
import SlotNav from './../SlotNav/index.jsx';
import SlotDetailView from './../SlotDetailView/index.jsx';

const SlotDetail = props => {
  return(
    <div className="slotDetail">
      <SlotNav
        handleSlotNavSelect={props.handleSlotNavSelect}
        selectedSlotNav={props.selectedSlotNav}
      />
      <SlotDetailView
        details={props[props.selectedSlotNav]}
        slotIdent={props.slotIdent}
        nav={props.selectedSlotNav}
        dfpId={props.dfpId}
        dfpLink={props.dfpLink}
        setDfpLink={props.setDfpLink}
        />
    </div>
  )
}

export default SlotDetail;