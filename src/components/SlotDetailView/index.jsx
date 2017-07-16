import React, { Component } from 'react';
import './index.css';
const copyLink = (props, textAreaLinkId) => {
  console.log(props)
  props.setDfpLink(textAreaLinkId);
  setTimeout(function() {
    let dfpLinkEl = document.querySelector(`#${textAreaLinkId}`);
    dfpLinkEl.select();
    document.execCommand('copy');
    props.setDfpLink();
  }, 2);
}
const toggleTextArea = (props, key, dfpLink) => {
  let txtId = `textAreaLink-${props.slotIdent}-${key}`;
    if(props.dfpLink === txtId) {
      return(
        <textarea id={txtId} style={{zIndex: '-10'}} defaultValue={dfpLink}></textarea>
      )
    }
    return;
}
const copyBtn = (props, key, dfpLink) => {
  return(
    <div key={`${props.slotIdent}-${key}-copy`} className='copyBtn' onClick={()=> copyLink(props, `textAreaLink-${props.slotIdent}-${key}`)}>Copy{toggleTextArea(props, key, dfpLink)}</div>
  )
};



const generateDfpLinks = (props, key, val) => {
  if(props.nav !== 'renderInfo') return `${val}`;
  let dfpLink;
  switch(key) {
    case 'orderId':
    dfpLink = `https://www.google.com/dfp/${props.dfpId}#delivery/OrderDetail/orderId=${val}`;
    return(
      <div>
        <a href={dfpLink} target='_blank'>{`${val}`}</a>
        {copyBtn(props, key, dfpLink)}
      </div>)
    case 'lineItemId':
    dfpLink = `https://www.google.com/dfp/${props.dfpId}#delivery/LineItemDetail/lineItemId=${val}`;
    return(
      <div>
        <a href={dfpLink} target='_blank'>{`${val}`}</a>
        {copyBtn(props, key, dfpLink)}
      </div>
    );
    case 'creativeId':
    dfpLink = `https://www.google.com/dfp/${props.dfpId}#delivery/CreativeDetail/creativeId=${val}`
    return(
      <div>
        <a href={dfpLink} target='_blank'>{`${val}`}</a>
        {copyBtn(props, key, dfpLink)}
      </div>
    );
    default:
    return `${val}`;
  }
}

const generateDetail = props => {
  return props.details.map(detailObj => {
    let detailKey = Object.keys(detailObj)[0];
    return(
      <div className="keyValCont" key={detailKey + detailObj[detailKey] + props.slotIdent}>
        <div className="keyItem keyValItem">{detailKey}</div>
        <div className="valCont">
          {detailObj[detailKey].map(val => <div className="valItem keyValItem" key={detailKey+val+props.slotIdent}>{generateDfpLinks(props, detailKey, val)}</div>)}
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