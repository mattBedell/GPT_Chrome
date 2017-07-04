import React, { Component } from 'react';
import './index.css';

const toggleSelected = (props, btnProp )=> {
  if(props.selectedSlotNav === btnProp) return 'slotNavBtnOn';
  return '';
}

const SlotNav = props => {
  return(
    <div id="navContainer">
      <div className={`slotNavBtn ${toggleSelected(props, 'targeting')}`}onClick={()=> props.handleSlotNavSelect('targeting')}>Targeting</div>
      <div className={`slotNavBtn ${toggleSelected(props, 'config')}`}onClick={()=> props.handleSlotNavSelect('config')}>Config</div>
    </div>
  )
}

export default SlotNav;