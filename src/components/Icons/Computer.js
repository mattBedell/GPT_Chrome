import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';
import IconContainer from './IconContainer';

const Computer = props => (
  <IconContainer {...props}>
    <svg viewBox="0 0 489.8 489.8" width={props.width} height={props.height} preserveAspectRatio="xMidYMin">
      <path d="M489.8 53.85c0-19.6-16-35.6-35.6-35.6H35.6C16 18.25 0 34.25 0 53.85V369.05c.6 16.8 14.4 30.1 31.3 30.1h158.9c-.3 7-4.2 39-52 45h1.5c-7.5 0-13.7 6.1-13.7 13.7s6.1 13.7 13.7 13.7H349c7.5 0 13.7-6.1 13.7-13.7s-6.1-13.7-13.7-13.7h2.3c-47.7-6-51.7-38-52-45h158.9c16.9 0 30.7-13.4 31.3-30.1V53.85h.3zm-244.9 323.1c-9.6 0-17.4-7.8-17.4-17.4s7.8-17.4 17.4-17.4c9.6 0 17.4 7.8 17.4 17.4 0 9.6-7.8 17.4-17.4 17.4zm178-64.5h-356V84.95h356v227.5z" />
    </svg>
  </IconContainer>
);

Computer.defaultProps = {
  width: '20px',
  height: '20px',
  isOpen: false,
  fill: '#FAFAFA',
};

export default withTheme(Computer);
