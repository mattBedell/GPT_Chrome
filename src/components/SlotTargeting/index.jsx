import React, { Component } from 'react';
import './index.css';

const generateTargeting = props => {
  return props.targs.map(targObj => {
    return(
      <div className="keyValCont" key={targObj.key + props.slotIdent}>
        <div className="keyItem keyValItem">{targObj.key}</div>
        <div className="valCont">
          {targObj.val.map(val => <div className="valItem keyValItem" key={targObj.key+val+props.slotIdent}>{val}</div>)}
        </div>
      </div>
    )
  })
}

const SlotTargeting = props => {
  if(props.targs.length <= 0) return (<div>No Targeting</div>);
  return (
    <div className="targCont">
      {generateTargeting(props)}
    </div>
  )
}

export default SlotTargeting;