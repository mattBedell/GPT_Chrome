import React, { Component } from 'react';
import './index.css'

const jumpToDiv = props => {
  let { divId, divExists, tabId } = props;
  if(divExists) {
    console.log(tabId, chrome.tabs)
    chrome.tabs.sendMessage(tabId, {
      type: 'POPUP_JUMP_TO_DIV',
      payload: divId
    })
  }
}

const SlotControl = props => {
  return (
    <div className="controlCont">
      <div className={`quickDisplay ${props.divExists ? 'quickDisplayTrue' : ''}`}>
        <div className="divIcon" onClick={() => jumpToDiv(props)}>DIV</div>
      </div>
      <div className={`quickDisplay ${props.isRefreshed ? 'quickDisplayTrue' : ''}`}>
        <svg version="1.1" className="refreshIcon" id={props.isRefreshed ? 'refreshOn' : ''} x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
          <g>
            <g>
              <g>
                <path d="M121.3,419.6c31.5,0,60-18.9,72.2-48C243.7,251.7,362.1,167.2,500,167.2c76,0,145.7,26.1,201.6,69.3l-43.8,6.8c-15,2.3-26.6,14.2-28.6,29.2c-2,15,6,29.5,19.8,35.7l240.9,108.4c10.6,4.7,22.8,3.8,32.5-2.4c9.7-6.3,15.6-17,15.7-28.6l1.3-265.4c0.1-15.1-9.8-28.4-24.2-32.8c-14.5-4.4-30.1,1.2-38.4,13.8L843.5,151C755,63.9,633.7,10,500,10C297.2,10,122.9,133.8,48.6,309.8c-10.3,24.4-7.7,52.3,6.9,74.4C70.1,406.3,94.8,419.6,121.3,419.6z"/>
                <path d="M944.6,615.8c-14.6-22.1-39.3-35.4-65.8-35.4c-31.5,0-60,18.9-72.2,48C756.3,748.3,637.9,832.8,500,832.8c-76,0-145.7-26.1-201.6-69.3l43.8-6.8c15-2.3,26.6-14.2,28.6-29.2c2-15-6.1-29.5-19.8-35.7L110.1,583.4c-10.6-4.7-22.8-3.8-32.5,2.4c-9.7,6.3-15.6,17-15.7,28.6l-1.3,265.4c-0.1,15.1,9.8,28.4,24.2,32.8c14.5,4.4,30.1-1.2,38.4-13.8l33.2-49.9C245,936.1,366.3,990,500,990c202.8,0,377.1-123.8,451.4-299.8C961.8,665.8,959.2,637.9,944.6,615.8z"/>
                </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g>
          </svg>
      </div>
    </div>
  )
};

export default SlotControl;