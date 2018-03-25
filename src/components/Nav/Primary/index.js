import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './../../Button';

const PrimaryButton = Button.extend`
  height: 40px;
  width: 100px;
  font-size: 17px;
  box-shadow: ${props => props.active ? '0px 3px 18px -9px rgb(182, 188, 196)' : 'none'};
  position: relative;
  z-index: ${props => props.active ? 1 : 0};
`;

const shouldDispatchSetView = (props, toView) => {
  if (props.selectedValue === toView) return;
    props.setSelected(toView)
}

const PrimaryViewNav = props => {
  return (
    <nav>
      <PrimaryButton
        onClick={() => shouldDispatchSetView(props, 'Slots')}
        active={props.selectedView === 'Slots'}
      >Slots</PrimaryButton>
      <PrimaryButton
        onClick={() => shouldDispatchSetView(props, 'Page')}
        active={props.selectedView === 'Page'}
      >Page</PrimaryButton>
      <PrimaryButton
        onClick={() => shouldDispatchSetView(props, 'Events')}
        active={props.selectedView === 'Events'}
      >Events</PrimaryButton>
      <PrimaryButton
        onClick={() => shouldDispatchSetView(props, 'Debug')}
        active={props.selectedView === 'Debug'}
      >Debug</PrimaryButton>
    </nav>
  )
};

PrimaryViewNav.propTypes = {
  selectedView: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
}


/** Top level navigation */
export default PrimaryViewNav;
