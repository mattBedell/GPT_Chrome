import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';
import IconContainer from './IconContainer';

const Eye = props => {
  return (
    <IconContainer {...props}>
      <svg viewBox="0 0 488.85 488.85" width={props.width} height={props.height} preserveAspectRatio="xMidYMin">
        <path d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"/>
      </svg>
    </IconContainer>
  );
}

Eye.defaultProps = {
  width: '20px',
  height: '20px',
  isOpen: false,
  fill: '#FAFAFA',
}

export default withTheme(Eye);
