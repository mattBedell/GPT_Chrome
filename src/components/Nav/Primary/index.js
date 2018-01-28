import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './../../Button';

const PrimaryButton = Button.extend`
  height: 30px;
  width: 100px;
  font-size: 1em;
`;

const shouldDispatchSetView = (props, toView) => {
  if (props.selectedView === toView) return;
    props.setView(toView)
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
  setView: PropTypes.func.isRequired,
}


/** Top level navigation */
export default PrimaryViewNav;
