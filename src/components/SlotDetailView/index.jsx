import React, { Component } from 'react';
import './index.css';

const generateDetail = props => {
  return props.details.map(detailObj => {
    let detailKey = Object.keys(detailObj)[0];
    return(
      <div className="keyValCont" key={detailKey + detailObj[detailKey] + props.slotIdent}>
        <div className="keyItem keyValItem">{detailKey}</div>
        <div className="valCont">
          {detailObj[detailKey].map(val => <div className="valItem keyValItem" key={detailKey+val+props.slotIdent}>{`${val}`}</div>)}
        </div>
      </div>
    )
  })
}

const SlotDetailView = props => {
  if(props.details.length <= 0) return (<div>No Info</div>);
  return (
    <div className="targCont">
      {generateDetail(props)}
    </div>
  )
}

export default SlotDetailView;